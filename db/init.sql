CREATE TYPE state_types AS ENUM ('male', 'female');
CREATE TYPE userRoles AS ENUM ('admin', 'user');

CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    state state_types
);
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    role userRoles,
    dateCreate timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    profileId INTEGER,
    FOREIGN KEY (profileId) REFERENCES profiles (id) ON DELETE CASCADE
);

