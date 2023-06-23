// BACKEND

"use strict";

const User = require('../../models/User');

const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login');
    },
};


// login process
const process = {
    login: (req, res) => {

        const user = new User(req.body);
        const response = user.login();

        return res.json(response);

    },
};


// for external environment
module.exports = {
    output,
    process,
}