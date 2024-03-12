const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.status(200).end();
    
});

app.post('/', function(req, res) {
    res.status(201).end()
})

app.listen(3000, function(req, res) {
    console.log("API está ON!");  

});

module.exports = app;