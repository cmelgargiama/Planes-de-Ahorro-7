import React,  {useState, useContext} from 'react';
import { BiAlignMiddle,
    BiBus,BiListPlus, BiFile, BiTimeFive, BiPhoneCall,
     BiIdCard, BiGroup, BiCog, BiLineChart, BiPrinter,
      BiTachometer, BiLinkExternal, BiCart, BiCar, BiLock, BiMenu, BiUpArrow, BiDownArrow
 } from "react-icons/bi";


 export const masterItem=[
        

    {
        path:'/operaciones/',
        name:"Operaciones",
        icon: <BiListPlus/>,
        class: "link",
        iconOpened:<BiUpArrow/>, 
        iconClosed:<BiDownArrow/>,

        subNav: [
            {
                title:"Alta Pre-Solicitudes",
                path:'/operaciones/AltaPre-Solicitudes'
            },
            {
                title:"Actualizacion Pre-Solicitudes",
                path:'/operaciones/ActualizacionPre-Solicitudes'
            },
            {
                title:"Actualizacion Operaciones",
                path:'/operaciones/ActualizacionOperaciones'
            },
            {
                title:"Alta de Cartera",
                path:'/operaciones/AltadeCartera'
            },
            {
                title:"Agrup./ Adj- Pedidos- Entregas",
                path:'/operaciones/Agrup-adj-pedidos-entregas'
            },
            {
                title:"Scoring",
                path:'/operaciones/Scoring'
            },
            {
                title:"Conciliacion Tarjetas",
                path:'/operaciones/ConciliacionTarjetas'
            },
            {
                title:"Alta Pre-Solicitudes",
                path:'/operaciones/AltaPre-Solicitudes'
            },
            {
                title:"Reporte Personalizado Op.",
                path:'/operaciones/ReportePersonalizadoOp'
            },
            {
                title:"Excel Datos y Operaciones",
                path:'/operaciones/ExcelDatosOperaciones'
            },
            {
                title:"Buscar Op. Pre-Sol DNI",
                path:'/operaciones/BuscarOpPreSolDNI'
            },{
                title:"Importaciones",
                path:'/operaciones/Importaciones'
            },
            {
                title:"Control Solicitudes",
                path:'/operaciones/ControlSolicitudes'
            },
            {
                title:"Control Recibos",
                path:'/operaciones/ControlRecibos'
            },
            {
                title:"Control Transferencias",
                path:'/operaciones/ControlTransferencias'
            },
            {
                title:"Impresion Recibos X",
                path:'/operaciones/ImpresionRecibosX'
            },
            {
                title:"Reclamos",
                path:'/operaciones/Reclamos'
            },
            {
                title:"Licitaciones",
                path:'/operaciones/Licitaciones'
            },
            {
                title:"Llamados Por Operacion",
                path:'/operaciones/LlamadosPorOperacion'
            },
            {
                title:"Reintegros",
                path:'/operaciones/Reintegros'
            },
            {
                title:"Rep. Micro Emprendedores",
                path:'/operaciones/RepMicroEmprendedores'
            },{
                title:"Reportes",
                path:'/operaciones/Reportes'
            },
        ],

         
        
    },{
        path:'/mesadeplanes-',
        name:"Mesa de Planes",
        icon: <BiFile/>,
        class: "link",
        subNav: [
            {
                title:"Mesa de Planes",
                path:'/mesadeplanes/mesadeplanes'

            },]
        
    },
    {
        path:'/mora-',
        name:"Mora",
        icon: <BiTimeFive/>,
        class: "link"
        
    },
    {
        path:'/callcenter-',
        name:"Call Center",
        icon: <BiPhoneCall/>,
        class: "link"
        
    },
    {
        path:'/personal-',
        name:"Personal",
        icon: <BiIdCard/>,
        class: "link"
        
    },
    {
        path:'/emprendedores-',
        name:"Emprendedores",
        icon: <BiGroup/>,
        class: "link"
                },
    {
        path:'/configuracion-',
        name:"Configuracion de Datos Generales",
        icon: <BiCog/>,
        class: "link"
        
    },{
        path:'/contabilidad-',
        name:"Contabilidad",
        icon: <BiLineChart/>,
        class: "link"
        
    },{
        path:'/reportes',
        name:"Reportes",
        icon: <BiPrinter/>,
        class: "link"
        
    },{
        path:'/plansubite-',
        name:"Plan Subite Fiat",
        icon: <BiTachometer/>,
        class: "link"
        
    },{
        path:'/entregas-',
        name:"Entregas",
        icon: <BiLinkExternal/>,
        class: "link"
        
    },{
        path:'/compra-',
        name:"Compra Rescindidos",
        icon: <BiCart/>,
        class: "link"
        
    },{
        path:'/usados-',
        name:"Usados",
        icon: <BiCar/>,
        class: "link"
        
    },{
        path:'/stockvehiculos',
        name:"Stock Vehiculos Plan Ahorro",
        icon: <BiBus/>,
        class: "link"
        
    },{
        path:'/seguros',
        name:"Seguros",
        icon: <BiLock/>,
        class: "link"
      
    },



]



export const operacionesItem=[
    

    {
        path:'/operaciones-',
        name:"Operaciones",
        icon: <BiListPlus/>,
        class: "link"
        
    },{
        path:'/mesadeplanes-',
        name:"Mesa de Planes",
        icon: <BiFile/>,
        class: "link disabled"
        
    },
    {
        path:'/mora-',
        name:"Mora",
        icon: <BiTimeFive/>,
        class: "link disabled"
        
    },
    {
        path:'/callcenter-',
        name:"Call Center",
        icon: <BiPhoneCall/>,
        class: "link disabled"
        
    },
    {
        path:'/personal-',
        name:"Personal",
        icon: <BiIdCard/>,
        class: "link disabled"
        
    },
    {
        path:'/emprendedores-',
        name:"Emprendedores",
        icon: <BiGroup/>,
        class: "link disabled"
                },
    {
        path:'/configuracion-',
        name:"Configuracion de Datos Generales",
        icon: <BiCog/>,
        class: "link disabled"
        
    },{
        path:'/contabilidad-',
        name:"Contabilidad",
        icon: <BiLineChart/>,
        class: "link disabled"
        
    },{
        path:'/reportes',
        name:"Reportes",
        icon: <BiPrinter/>,
        class: "link disabled"
        
    },{
        path:'/plansubite-',
        name:"Plan Subite Fiat",
        icon: <BiTachometer/>,
        class: "link disabled"
        
    },{
        path:'/entregas-',
        name:"Entregas",
        icon: <BiLinkExternal/>,
        class: "link disabled"
        
    },{
        path:'/compra-',
        name:"Compra Rescindidos",
        icon: <BiCart/>,
        class: "link disabled"
        
    },{
        path:'/usados-',
        name:"Usados",
        icon: <BiCar/>,
        class: "link disabled"
        
    },{
        path:'/stockvehiculos',
        name:"Stock Vehiculos Plan Ahorro",
        icon: <BiBus/>,
        class: "link disabled"
        
    },{
        path:'/seguros',
        name:"Seguros",
        icon: <BiLock/>,
        class: "link disabled"
      
    },
    


]

