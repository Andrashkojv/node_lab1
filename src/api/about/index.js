//імпорт
const express = require("express");
const aboutRouter = express.Router();
//метод обробки запиту GET
aboutRouter.get('/', function (request, response){
    response.send({
        message:"Андрашко Юрій Васильович"
    });
});
//експорт
module.exports = aboutRouter;