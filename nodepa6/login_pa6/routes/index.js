var express = require('express');
var router = express.Router();
const passport = require('passport');
const models = require( '../models/index');
const {createHash} = require("crypto");
var cors = require('cors')
var app = express();
const utils = require("../utils/utils")
const pool = require('../bin/mysql.js');









/* GET home page. */
router.options('/', cors())



router.post('/', async (req, res, next) => {
 
 
  console.log(req.body)

  const {username, password} = req.body

  const User = await models.user.findOne({where:{login: username}}).catch((err)=> {
  console.log("Error: ", err);})

  if(!User){
    return res.status(400).json({
      error:true,
      message:"Usuario Incorrecto"
    })
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

   const userRoles = await pool.query('SELECT roles.rl_codigo, roles.rl_descripcion FROM usuarios_has_roles LEFT JOIN roles ON usuarios_has_roles.rl_codigo = roles.rl_codigo WHERE usuarios_has_roles.us_login = ? AND usuarios_has_roles.uhr_activo=1',
   [User.login])
   //const roles = await pool.query('SELECT rl_descripcion FROM roles WHERE rl_codigo = ? ', [usRol.rl_codigo])
    //sconsole.log(roles[0].rl_descripcion)
   var i;
   var text = '';
   var rl_codigo = '';
   
   const rolesLength = userRoles.length
   for ( i = 0;  i< rolesLength ; i++){
       //console.log([i])
       const roles = userRoles[i]
      // console.log(roles)
      
       //text += roles[0].rl_descripcion + ', '
   if (i<rolesLength-1){
       text += roles.rl_descripcion + ', '
       rl_codigo += roles.rl_codigo + ' '
   }else{
       text += roles.rl_descripcion + '. '
       rl_codigo += roles.rl_codigo + ' '  
   }}
   console.log(text)
   //console.log(rl_codigo)

   
   const roleCode = await pool.query('SELECT roles.rl_codigo FROM usuarios_has_roles LEFT JOIN roles ON usuarios_has_roles.rl_codigo = roles.rl_codigo WHERE usuarios_has_roles.us_login = ? AND usuarios_has_roles.uhr_activo=1',
   [User.login])
   
     return    res.json({message: "Bienvenido, " + User.Nombre,
      token : token, roles : text , Nombre: User.Nombre, rl_codigo:roleCode})/*req.flash('success', 'Bienvenido ' + username)*/ 
 
    }else{
   
    return res.status(401).json({
      error:true,
      message:"Password Incorrecta"
    }) /*req.flash('message','Contraseña Incorrecta')*/ }
            
    

  
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
