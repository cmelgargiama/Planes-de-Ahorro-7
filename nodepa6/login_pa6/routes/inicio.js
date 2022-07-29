var express = require('express');
var router = express.Router();
const helpers = require('../lib/passport')
const pool = require('../bin/mysql.js');
const sidenav = require("../views/sidenav.hbs");
const utils = require("../utils/utils")
var cors = require('cors')

// validate the user credentials





router.options('/', cors())
router.get('/' ,cors(), async (req, res, next) => {
    const user = req.user
    console.log(user)
    const token = utils.generateToken(user);
    // get basic user details
    const userObj = utils.getCleanUser(user);
    // return the token along with user details
     console.log(token, userObj)

     res.send(token)
    
  /* console.log(req.user)
    const userRoles = await pool.query('SELECT roles.rl_codigo, roles.rl_descripcion FROM usuarios_has_roles LEFT JOIN roles ON usuarios_has_roles.rl_codigo = roles.rl_codigo WHERE usuarios_has_roles.us_login = ? AND usuarios_has_roles.uhr_activo=1',
    [req.user.login])
    //const roles = await pool.query('SELECT rl_descripcion FROM roles WHERE rl_codigo = ? ', [usRol.rl_codigo])
    // console.log(roles[0].rl_descripcion)
    var i;
    var text = '';
    const rolesLength = userRoles.length
    for ( i = 0;  i< rolesLength ; i++){
        //console.log([i])
        const roles = userRoles[i]
        //console.log(roles)
       
        //text += roles[0].rl_descripcion + ', '
    if (i<rolesLength-1){
        text += roles.rl_descripcion + ', '
    }else{
        text += roles.rl_descripcion + '. '
    }}
*/
    //res.send('Bienvenido a Pa7, '+ req.user.Nombre + '. ' + 'Sus roles son : ' + text)
  /* res.render('inicio', {roles : text,
                        nombre: req.user.Nombre,
                        sidenav : sidenav
                    } );*/
    
    
});
// verify the token and return it if it's valid
/*router.get('/verifyToken', function (req, res) {
    // check header or url parameters or post parameters for token
    var token = req.query.token;
    if (!token) {
      return res.status(400).json({
        error: true,
        message: "Token is required."
      });
    }
    // check token that was passed by decoding token using secret
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
      if (err) return res.status(401).json({
        error: true,
        message: "Invalid token."
      });
   
      // return 401 status if the userId does not match.
      if (user.userId !== userData.userId) {
        return res.status(401).json({
          error: true,
          message: "Invalid user."
        });
      }
      // get basic user details
      var userObj = utils.getCleanUser(userData);
      return res.json({ user: userObj, token });
    });
  });*/

module.exports=router;

