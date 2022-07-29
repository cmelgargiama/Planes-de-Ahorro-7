var db = require("../bin/mysql")
const errorMessage = require("../utils/errorMessage.js");



module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
      login: {
        type: Sequelize.STRING
      },
    
      Nombre: {
        type: Sequelize.STRING
      },
      password_hash:{
        type: Sequelize.STRING
      },
      ID:{
        type:Sequelize.STRING,
        primaryKey: true
      },
      salt:{type:Sequelize.STRING}
    }, {
      tableName: "usuarios",
      timestamps: false

    });
    return User;
  };


/*const userTable = {
    login : {
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        minlength:3,
    } ,
    password :{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        minlength:3,
        validator:function(v){
                const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]){6,12}/;
                return regex.test(v)
        },
        message:"El password debe contener al menos 6 caracteres, numeros, 1 mayuscula, 1 minuscula"
        
    },
}*/

/*module.exports.get = async function(){
    var login = username
    // const [rows, fields] = await db.pool.execute('SELECT login, Nombre FROM usuarios WHERE login = ?, ' [login]);
    const Rows  = await db.pool.execute('SELECT login, Nombre, password_hash FROM usuarios WHERE login = ?', [login]) ;
    
    return rows
}*/

