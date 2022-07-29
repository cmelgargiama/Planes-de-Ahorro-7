
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;




const dbSwitch = '';
var empresaSeleccionada;

empresaSeleccionada = document.getElementByName("selectEmpresa");

switch (empresaSeleccionada){
    case 'carGroup' : 
        dbSwitch = " pa7";
        break;
        case 'gestionFinanciera' : 
        dbSwitch = " pa7";
        break;
        case 'autoNet' : 
        dbSwitch = " pa7";
        break;
        case  'autosDelPlata' : 
        dbSwitch = " pa7";
        break;
        case  'detroit' : 
        dbSwitch = " pa7";
        break;
        case  'gestionFinancieraLuxcar' : 
        dbSwitch = " pa7";
        break;
        case  'alyzze' : 
        dbSwitch = " pa7";
        break;    

        default:
        console.log("sin parametro empresa")
        break;
}



function Inicio() {
    var usuario;
    var password;
    var message;

    usuario = document.getElementById("usuario").value;

    password = document.getElementById("password").value;
    
    if (usuario === ""){
        alert("Debe escribir un usuario")
        return false
    }
    if(password === ""){
        alert("Debe escribir una contraseña")
        return false
    }

    message = ("Bienvenido, " + usuario);

    message = document.getElementById('userValue')


};





module.exports = {
    dbSwitch
}
