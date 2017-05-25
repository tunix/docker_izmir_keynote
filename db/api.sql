create table message (
    id bigint not null,
    created_at tinyblob not null,
    message longtext,
    user_id bigint,
    primary key (id)
);

create table user (
    id bigint not null,
    created_at tinyblob not null,
    first_name varchar(255),
    language_code varchar(255),
    last_name varchar(255),
    username varchar(255),
    primary key (id)
);

alter table user add constraint UK_sb8bbouer5wak8vyiiy4pf2bx unique (username);
alter table message add constraint FKb3y6etti1cfougkdr0qiiemgv foreign key (user_id) references user (id);