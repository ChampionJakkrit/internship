create database trad_check_db;
create schema trad_check;
set search_path = trad_check;

create table Table_User (
    user_id serial primary key,
    login_name varchar(100) not null,
    first_name varchar(100) not null,
    last_name varchar(100) not null,
    phone char(10)
);

create table Table_History (
    user_id serial primary key,
    status enum,
    time datetime
);

create type Enum as enum ('in','out');
create domain datetime as timestamp with time zone;

