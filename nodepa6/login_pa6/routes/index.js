var express = require('express');
var router = express.Router();
const passport = require('passport');
const models = require( '../models/index');
const {createHash} = require("crypto");
var cors = require('cors')
var app = express();
const utils = require("../utils/utils")









/* GET home page. */
router.options('/', cors())



router.post('/', async (req, res, next) => {
 
 
  console.log(req.body)

  const {username, password} = req.body

  const User = await models.user.findOne({where:{login: username}}).catch((err)=> {
  console.log("Error: ", err);})

  if(!User){
    return res.json({message:"El usuario no existe"})
  }


  const pwdsalt = password + User.salt;
  
    const verifyPass = (pwdsalt) => {
     
     const storedSaltBytes = new Buffer.from(pwdsalt, 'utf-8');
     var sha256 = createHash("sha256");
     sha256.update(storedSaltBytes, "utf8");
     var result = sha256.digest("base64");
    // console.log(result)
     return result
 
    };
 
    
 if(verifyPass(pwdsalt) === User.password_hash){
    
  const token = utils.generateToken(User);
  // get basic user details
  const userObj = utils.getCleanUser(User);
  // return the token along with user details
   console.log(token, userObj)

   
 
   
     return    res.send(token)/*req.flash('success', 'Bienvenido ' + username)*/ 
 
    }else{
   
    return res.json({message:"Contraseña Incorrecta"} ) /*req.flash('message','Contraseña Incorrecta')*/ }
            
    

  
 /* var success = '/inicio';
  passport.authenticate('local-login', {
   successRedirect : success,
   failureRedirect : '/' , 
  //failureFlash : true , 
     })(req, res, next) */
     
     
},
)
router.get('/', cors(), function(req, res, next) {
  res.send(token)
});



module.exports = router;
