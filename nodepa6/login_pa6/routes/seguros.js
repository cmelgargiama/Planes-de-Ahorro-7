const pool = require("../bin/mysql.js")
var express = require('express');
var router = express.Router();


router.get('/', async(req,res) =>{
    const seguros = await pool.query('SELECT * FROM su_seguro ');
    //const segNum = (seguros.id-1)
    //console.log(segNum)
   /* const seg = seguros[0];
    const seg1 = seguros[1];
    const segLength = seguros.length;
    var i;
    var segText ;
    console.log(segLength);
   /* for (i=0; i<segLength; i++){
        
        const segFor = seguros[i];
        //console.log(segFor);
        
            segText += (<td>{segFor.Nombre}</td>); 
        
    }
    console.log(segText)*/
    /* ;
     var date = seg.fechaAlta;
    fechaAlta = date.toLocaleDateString('es');
    //console.log(fechaAlta)
    var date = seg1.fechaAlta;
    fechaAlta1 = date.toLocaleDateString('es');
    //console.log(fechaAlta1)

    //console.log(users)
   /* res.render('seguros', {
        segMarca: seg.Marca,
        segFechaAlta: fechaAlta,
        segUsuario: seg.usuarioAlta,
        segNombre: seg.Nombre,
        segApellido: seg.Apellido,
        segLocalidad: seg.localidad,
        segTelefono : seg.telefonos,
        segTelefono2: seg.telefono2,
        segOficial: seg.oficialSeguro,
        segEstado: seg.Estado,
        segObservacion: seg.observacion,

        seg1Marca: seg1.Marca,
        seg1FechaAlta: fechaAlta1,
        seg1Usuario: seg1.usuarioAlta,
        seg1Nombre: seg1.Nombre,
        seg1Apellido: seg1.Apellido,
        seg1Localidad: seg1.localidad,
        seg1Telefono : seg1.telefonos,
        seg1Telefono2: seg1.telefono2,
        seg1Oficial: seg1.oficialSeguro,
        seg1Estado: seg1.Estado,
        seg1Observacion: seg1.observacion,

        seg : seguros,
        segLength : segLength,
        roles : req.text,
        nombre: req.user.Nombre,
        

    })*/
    res.send(seguros)
} ) ;






module.exports = router;