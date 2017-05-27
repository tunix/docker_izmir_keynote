const os = require("os");
const Telegraf = require("telegraf");

const api = require("./api");
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.telegram.setWebhook(`https://${process.env.BOT_HOST}/webhook`);
bot.startWebhook("/webhook", null, 3000);

function createUser(ctx) {
    return {
        id: ctx.from.id,
        username: ctx.from.username,
        firstName: ctx.from.first_name,
        lastName: ctx.from.last_name,
        languageCode: ctx.from.language_code
    };
}

bot.on("sticker", ctx => {
    let stickerId = ctx.message.sticker.file_id;
    let chatId = ctx.chat.id;
    let trumpThumbsUp = "CAADAgAD7QYAAnlc4gnK88QdYpKR7AI";

    console.log(`Received a sticker [${stickerId}] from chat [${chatId}], sending a sticker reply ;)`);

    ctx.telegram.sendSticker(chatId, trumpThumbsUp);
});

bot.command("/start", ctx => {
    let user = createUser(ctx);

    api.saveUser(user)
        .then(resp => ctx.reply(`Hi ${user.firstName}! This is: ${os.hostname()}!`))
        .catch(err => ctx.reply("Sorry, error occured! :("));
});

bot.command("/hello", ctx => {
    ctx.reply(`Cheers ${ctx.from.first_name}! This is: ${os.hostname()}!`);
});

bot.on('text', ctx => {
    let user = createUser(ctx);
    let msgId = ctx.message.message_id;

    api.saveUser(user)
        .then(userData => {
            let msg = {
                id: msgId,
                user: userData._links.self.href,
                message: ctx.message.text
            };

            api.saveMessage(msg)
                .then(resp => console.log(`Stored message: ${msgId}`))
                .catch(err => console.log(`Error occurred while storing message: ${msgId}`));
        })
        .catch(err => ctx.reply("Sorry, error occured! :("));
});
