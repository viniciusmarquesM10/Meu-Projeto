const express = require ('express');
const routerProdutos = require (".router/router");

const app = express();

app.use(routerProdutos);

app.listen(3000, function(){
    console.log("API está on!");
})

module.exports = app;