const express = require ('express');
const routerProdutos = require('./router');
const app = express();

app.use(routerProdutos)

app.listen(3000, function(){
    console.log ("API esta ON!");
})

module.exports = app;
