//import Router from 'express';
const express = require("express");
const aboutRouter = express.Router();

aboutRouter.get('/', function (request, response){
    response.send({message:"Андрашко Юрій"});
});

//export default aboutRouter();
module.exports = aboutRouter;