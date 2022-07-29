const pool = require("../bin/mysql.js")
var express = require('express');
var router = express.Router();

router.get('/', async(req,res) =>{

    res.render('stockVehiculos',{
        roles : req.text,
        nombre: req.user.Nombre,
    })
})

module.exports = router;