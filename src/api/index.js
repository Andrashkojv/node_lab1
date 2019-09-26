
const express = require("express");
const aboutRouter = require("./about");
const randomRouter = require("./random");

const apiRouter = express.Router();
apiRouter.use('/about', aboutRouter);
apiRouter.use('/random', randomRouter);
apiRouter.get('',function(q,s){
    s.send(1);
});

module.exports = apiRouter;