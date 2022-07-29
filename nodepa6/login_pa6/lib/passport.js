const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../bin/mysql.js');
const db = require( "../database.js");
const {createHash} = require("crypto");
const sequelize = require("../database.js");
const {QueryTypes} = require('sequelize');
const { text } = require('express');
const jwt = require('jsonwebtoken')
const models = require( '../models/index');


//const form = require('../../../pa7/src/pages/loginPage')

passport.use('local-login', new LocalStrategy(
        { usernameField: "username",
            passwordField: "password",
            passReqToCallback: true
 } , async (req,  username, password, done ) => {
   
    /* const rows = await pool.query('SELECT * FROM usuarios WHERE login = ?',
    [username])*/

    const rows = await models.user.findAll({where:{
        login:username
    }});

    const userRoles = await pool.query('SELECT rl_codigo FROM usuarios_has_roles WHERE us_login = ?',
    [username])

   /* const rolesArr = userRoles.forEach((value, index)=>{
        index,index+1})
        console.log(rolesArr)*/
        
      /*  var i;
        var text = '';
        
        const rolesLength = userRoles.length
        for ( i = 0;  i< rolesLength ; i++){
            console.log([i])
            const usRol = userRoles[i]
            console.log(usRol,)
            const roles = await pool.query('SELECT rl_descripcion FROM roles WHERE rl_codigo = ? ', [usRol.rl_codigo])
            console.log(roles[0].rl_descripcion)
            text += roles[0].rl_descripcion + ','*/
        
      /*  if (i = rolesLength){
            break; 
            
        }
              
        
        }
        //text = text.slice()
        //text = parseInt(text)
        
       /* console.log(text)
       
        const user = rows[0];
             
       var nombre = '';
       nombre = user.Nombre;
       var test = 'testing';

       console.log(nombre)*/
       
   

   // console.log(usRol, roles)
   
  if(rows.length > 0){
    const User = rows[0];
             
    const pwdsalt = password + User.salt;
  
    
   /* const {create} = require('express-handlebars')
    const hbs = create({
        // Specify helpers which are only registered on this instance.
        helpers: {
            username() { return User.Nombre; },
            roles() { return text; }
        }
    });
    
    module.exports = helpers*/
    const verifyPass = (pwdsalt) => {
     
     const storedSaltBytes = new Buffer.from(pwdsalt, 'utf-8');
     var sha256 = createHash("sha256");
     sha256.update(storedSaltBytes, "utf8");
     var result = sha256.digest("base64");
    // console.log(result)
     return result
 
    };
 
    
 if(verifyPass(pwdsalt) === User.password_hash){
    
   //console.log(User.password_hash)
    /*let payload = { id: User.id };
    let token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({ msg: 'ok', token: token });*/
    // generate token
 
   
     done(null ,User,   console.log("Bienvenido " + User.Nombre) /*req.flash('success', 'Bienvenido ' + username)*/ )
 
    }else{
   
    done(null, false, console.log("Contraseña Incorrecta", ), /*req.flash('message','Contraseña Incorrecta')*/ )}
            
              
;}else{
    console.log("El usuario no existe")
    return done(null, false /*req.flash('message', "El usuario no existe")*/)
}

}))
;



passport.serializeUser((User, done) =>{
  //  console.log(User.ID)
    
     done(null, User.ID )

});

passport.deserializeUser(async ( ID, done) => {
    
        //const rows =  await models.user.findAll({where:{ ID: ID}});
        const rows = await pool.query('SELECT * FROM usuarios WHERE ID = ?',[ID])
        done(null, rows[0] )
});
