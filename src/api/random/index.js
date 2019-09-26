//імпорт
const express = require('express');
const randomControler = require('./controler.js');
//роутер
const randomRouter = express.Router();

randomRouter.get('/number', randomControler.randomNumber);
randomRouter.get('/array', randomControler.randomArray);

module.exports = randomRouter;