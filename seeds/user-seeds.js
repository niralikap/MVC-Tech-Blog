const { User } = require('../models');

const userData = [
    {
        username: "nirali",
        email: "nirali@test.com",
        password: "password"

    },
    {
        username: "test1",
        email: "test1@test.com",
        password: "password1"

    },
    {
        username: "test2",
        email: "test2@test.com",
        password: "password2"

    },
    {
        username: "test3",
        email: "test3@test.com",
        password: "password3"

    },
  
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;