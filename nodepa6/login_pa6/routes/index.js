var express = require('express');
var router = express.Router();
const passport = require('passport');
const models = require( '../models/index');
const {createHash} = require("crypto");
var cors = require('cors')
var app = express();










/* GET home page. */
router.options('/', cors())
router.get('/', cors(), function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', (req, res, next) => {
 console.log(req.body)
  
  var success = '/inicio';
  passport.authenticate('local-login', {
   successRedirect : success,
   failureRedirect : '/' , 
  //failureFlash : true , 
     })(req, res, next) 
     
     
},
)



module.exports = router;
