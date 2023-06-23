"use strict";

// module
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// routing
const home = require('./src/routes/home');


// app setting
app.set('views', './src/views');
app.set('view engine', 'ejs');

// register middle-wear
app.use('/', home);
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.urlencoded({ extended: true }));  // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제를 해결


// for external environment
module.exports = app;