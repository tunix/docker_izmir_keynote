"use strict";

const unirest = require("unirest");

const API_HOST = process.env.API_HOST || "localhost";
const API_BASE_URL = `http://${API_HOST}:8080`;
const DEFAULT_HEADERS = {
    "Accept": "application/json",
    "Content-Type": "application/json"
};

function handleError(resp) {
    if (resp.error) {
        console.error(`Error occured: ${JSON.stringify(resp)}`);

        return resp.error.code;
    }

    console.error(`Error occured: [${resp.code}] [${resp.body.error}]`);

    return resp.body.error;
}

exports.saveUser = (user) => {
    return new Promise((resolve, reject) => {
        unirest.post(`${API_BASE_URL}/users`)
            .headers(DEFAULT_HEADERS)
            .send(user)
            .end(resp => {
                if (resp.ok) {
                    console.log(`Saved user: ${JSON.stringify(resp.body)}`);
                    return resolve(resp.body);
                } else {
                    return reject(handleError(resp));
                }
            });
    });
}

exports.saveMessage = (msg) => {
    return new Promise((resolve, reject) => {
        unirest.post(`${API_BASE_URL}/messages`)
            .headers(DEFAULT_HEADERS)
            .send(msg)
            .end(resp => {
                if (resp.ok) {
                    console.log(`Saved message: ${JSON.stringify(resp.body)}`);
                    return resolve(resp.body);
                } else {
                    return reject(handleError(resp));
                }
            });
    });
};

exports.getUser = (userId) => {
    return new Promise((resolve, reject) => {
        unirest.get(`${API_BASE_URL}/users/${userId}`)
            .headers(DEFAULT_HEADERS)
            .end(resp => {
                if (resp.ok) {
                    console.log(`Got user: ${JSON.stringify(resp.body)}`);
                    return resolve(resp.body);
                } else {
                    return reject(handleError(resp));
                }
            });
    });
};
