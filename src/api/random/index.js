const express = require('express');

const randomRouter = express.Router();

randomRouter.get('', function (request, response){
    response.send({"random number":Math.random()});
});

module.exports = randomRouter;