# Baskend App connected with PostgreeSQL
This application is connects to PostgreeSQL database thet is inside a docker container. 

DB have 2 tables 'users' and 'profiles' which have a relationship between them to each other. 

Posible actions: 

    1. Add user (check data used Joi).
    2. Update user (check data used Joi).
    3. Delete user.
    4. Get all users.
    5. Get all users by role.
    6. Get one user.

## Installation

Do 2 things:

```bash
clone this repo
npm install
```
    
## Documentation

To start project split your terminal to have 2 at the moment:

    npm run dev - starts localhost server
    npm run db - starts docker container with PostgreSQL DB

Now you ready to send reqests to the base. You can do it with postman service or similar.

User data have validation before creation or updating step.

## Usage/Examples
Requests examples:

    get all users:
    GET http://localhost:3000/users
        
    get all users by role:
    GET http://localhost:3000/users?role=user    

    get user by id:
    GET http://localhost:3000/users/1

    create user:
    POST http://localhost:3000/users

    update user by id:
    PATCH http://localhost:3000/users/1

    delete user by id:
    DELETE http://localhost:3000/users/1


# Technologies used

NodeJS. Express. Docker. PostgreSQL. 

Libs: Joi, Nodemon.