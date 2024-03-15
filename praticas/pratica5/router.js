const express = require('express');

const router = express.Router();

router.get("/produtos", function(req, res){
    res.json([]);

});

router.get("/produtos/:produtoId", function(req, res){
    if (req.params.produtoId == 1)res.json({})
    else res.status(404).json ("Produto não encontrado")

});

router.post("/produtos", function(req, res) {

});

router.put("/produtos/:produtoId", function(req, res){

});

router.delete("/produtos/:produtoId", function(req, res){

});

module.exports = router;