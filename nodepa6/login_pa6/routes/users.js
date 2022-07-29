var mysql = require('mysql');
var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();
const pool = require('../bin/mysql.js');
const models = require( '../models/index');
const {sequelize, Sequelize} = require("sequelize")
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { QueryTypes, query } = require('sequelize');




/* GET users listing. */
router.get('/', async(req,res) =>{
    /*const users = await pool.query('SELECT * FROM usuarios ')*/
    //console.log(users)
    //const users = await sequelize.query("SELECT * FROM `usuarios`", { type: Sequelize.QueryTypes.SELECT });
    const users = await models.user.findAll();
    //console.log(users.every(user => user instanceof User)); // true
    //console.log("All users:", JSON.stringify(users, null, 2))
    res.send(users)
} ) ;






module.exports = router;
