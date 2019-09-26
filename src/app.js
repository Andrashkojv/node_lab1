//імпорт модулів
const express = require("express"); 
const apiRouter = require("./api");
//новий додаток 
const app = express();
//хоча б 1 функція роутінга
app.use("/api", apiRouter);
// порт для прослуховування
app.listen(3000);