import React,  {useState, useContext} from 'react';
import { 
    BiBus,BiListPlus, BiFile, BiTimeFive, BiPhoneCall,
     BiIdCard, BiGroup, BiCog, BiLineChart, BiPrinter,
      BiTachometer, BiLinkExternal, BiCart, BiCar, BiLock, BiChevronUp, BiChevronDown
 } from "react-icons/bi";


 export const masterItem=[
        

    {
        path: "",
        name:"Operaciones",
        icon: <BiListPlus/>,
        class: "link",
        iconOpened:<BiChevronUp/>, 
        iconClosed:<BiChevronDown/>,

        subNav: [
            {
                title:"Alta Pre-Solicitudes",
                path:'/operaciones/AltaPre-Solicitudes',
                class: "dropdown-link",
            },
            {
                title:"Actualizacion Pre-Solicitudes",
                path:'/operaciones/ActualizacionPre-Solicitudes',
                class: "dropdown-link",
            },
            {
                title:"Actualizacion Operaciones",
                path:'/operaciones/ActualizacionOperaciones',
                class: "dropdown-link",
            },
            {
                title:"Alta de Cartera",
                path:'/operaciones/AltadeCartera',
                class: "dropdown-link",
            },
            {
                title:"Agrup./ Adj- Pedidos- Entregas",
                path:'/operaciones/Agrup-adj-pedidos-entregas',
                class: "dropdown-link",
            },
            {
                title:"Scoring",
                path:'/operaciones/Scoring',
                class: "dropdown-link",
            },
            {
                title:"Conciliacion Tarjetas",
                path:'/operaciones/ConciliacionTarjetas',
                class: "dropdown-link",
            },
            {
                title:"Reporte Personalizado Op.",
                path:'/operaciones/ReportePersonalizadoOp',
                class: "dropdown-link",
            },
            {
                title:"Excel Datos y Operaciones",
                path:'/operaciones/ExcelDatosOperaciones',
                class: "dropdown-link",
            },
            {
                title:"Buscar Op. Pre-Sol DNI",
                path:'/operaciones/BuscarOpPreSolDNI',
                class: "dropdown-link",
            },{
                title:"Importaciones",
                path:'/operaciones/Importaciones',
                class: "dropdown-link",
            },
            {
                title:"Control Solicitudes",
                path:'/operaciones/ControlSolicitudes',
                class: "dropdown-link",
            },
            {
                title:"Control Recibos",
                path:'/operaciones/ControlRecibos',
                class: "dropdown-link",
            },
            {
                title:"Control Transferencias",
                path:'/operaciones/ControlTransferencias',
                class: "dropdown-link",
            },
            {
                title:"Impresion Recibos X",
                path:'/operaciones/ImpresionRecibosX',
                class: "dropdown-link",
            },
            {
                title:"Reclamos",
                path:'/operaciones/Reclamos',
                class: "dropdown-link",
            },
            {
                title:"Licitaciones",
                path:'/operaciones/Licitaciones',
                class: "dropdown-link",
            },
            {
                title:"Llamados Por Operacion",
                path:'/operaciones/LlamadosPorOperacion',
                class: "dropdown-link",
            },
            {
                title:"Reintegros",
                path:'/operaciones/Reintegros',
                class: "dropdown-link",
            },
            {
                title:"Rep. Micro Emprendedores",
                path:'/operaciones/RepMicroEmprendedores',
                class: "dropdown-link",
            },{
                title:"Reportes",
                path:'/operaciones/Reportes',
                class: "dropdown-link",
            },
        ],

         
        
    },{
        path:'',
        name:"Mesa de Planes",
        icon: <BiFile/>,
        class: "link",
        iconOpened:<BiChevronUp/>, 
        iconClosed:<BiChevronDown/>,
        subNav: [
            {
                title:"Mesa de Planes",
                path:'/mesadeplanes/MesadePlanes',
                class: "dropdown-link",

            }, {
                title:"Scoring",
                path:'/mesadeplanes/Scoring',
                class: "dropdown-link",

            }, {
                title:"Stock Para Ventas",
                path:'/mesadeplanes/StockParaVentas',
                class: "dropdown-link",

            }, {
                title:"Autorizador Clasificaciones",
                path:'/mesadeplanes/AutorizadorClasificaciones',
                class: "dropdown-link",

            }, {
                title:"Stock Contable",
                path:'/mesadeplanes/StockContable',
                class: "dropdown-link",

            }, {
                title:"Gestion de Señas Acumuladas",
                path:'/mesadeplanes/GestiondeSenasAcumuladas',
                class: "dropdown-link",

            }, {
                title:"Haberes Netos",
                path:'/mesadeplanes/HaberesNetos',
                class: "dropdown-link",

            },]
        
    },
    {
        path:'',
        name:"Mora",
        icon: <BiTimeFive/>,
        class: "link"
        
    },
    {
        path:'',
        name:"Call Center",
        icon: <BiPhoneCall/>,
        class: "link"
        
    },
    {
        path:'',
        name:"Personal",
        icon: <BiIdCard/>,
        class: "link"
        
    },
    {
        path:'',
        name:"Emprendedores",
        icon: <BiGroup/>,
        class: "link"
                },
    {
        path:'',
        name:"Configuracion de Datos Generales",
        icon: <BiCog/>,
        class: "link"
        
    },{
        path:'',
        name:"Contabilidad",
        icon: <BiLineChart/>,
        class: "link"
        
    },{
        path:'',
        name:"Reportes",
        icon: <BiPrinter/>,
        class: "link"
        
    },{
        path:'',
        name:"Plan Subite Fiat",
        icon: <BiTachometer/>,
        class: "link"
        
    },{
        path:'',
        name:"Entregas",
        icon: <BiLinkExternal/>,
        class: "link"
        
    },{
        path:'',
        name:"Compra Rescindidos",
        icon: <BiCart/>,
        class: "link"
        
    },{
        path:'',
        name:"Usados",
        icon: <BiCar/>,
        class: "link"
        
    },{
        path:'',
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
        path:'/',
        name:"Operaciones",
        icon: <BiListPlus/>,
        class: "link disabled",
        iconOpened:<BiChevronUp/>, 
        iconClosed:<BiChevronDown/>,

        subNav: [
            {
                title:"Alta Pre-Solicitudes",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Actualizacion Pre-Solicitudes",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Actualizacion Operaciones",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Alta de Cartera",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Agrup./ Adj- Pedidos- Entregas",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Scoring",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Conciliacion Tarjetas",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Reporte Personalizado Op.",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Excel Datos y Operaciones",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Buscar Op. Pre-Sol DNI",
                path:'/',
                class: "dropdown-link disabled",
            },{
                title:"Importaciones",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Control Solicitudes",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Control Recibos",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Control Transferencias",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Impresion Recibos X",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Reclamos",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Licitaciones",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Llamados Por Operacion",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Reintegros",
                path:'/',
                class: "dropdown-link disabled",
            },
            {
                title:"Rep. Micro Emprendedores",
                path:'/',
                class: "dropdown-link disabled",
            },{
                title:"Reportes",
                path:'/',
                class: "dropdown-link disabled",
            },]
        
    },{
        path:'/',
        name:"Mesa de Planes",
        icon: <BiFile/>,
        class: "link disabled"
        
    },
    {
        path:'/',
        name:"Mora",
        icon: <BiTimeFive/>,
        class: "link disabled"
        
    },
    {
        path:'/',
        name:"Call Center",
        icon: <BiPhoneCall/>,
        class: "link disabled"
        
    },
    {
        path:'/',
        name:"Personal",
        icon: <BiIdCard/>,
        class: "link disabled"
        
    },
    {
        path:'/',
        name:"Emprendedores",
        icon: <BiGroup/>,
        class: "link disabled"
                },
    {
        path:'/',
        name:"Configuracion de Datos Generales",
        icon: <BiCog/>,
        class: "link disabled"
        
    },{
        path:'/',
        name:"Contabilidad",
        icon: <BiLineChart/>,
        class: "link disabled"
        
    },{
        path:'/',
        name:"Reportes",
        icon: <BiPrinter/>,
        class: "link disabled"
        
    },{
        path:'/',
        name:"Plan Subite Fiat",
        icon: <BiTachometer/>,
        class: "link disabled"
        
    },{
        path:'/',
        name:"Entregas",
        icon: <BiLinkExternal/>,
        class: "link disabled"
        
    },{
        path:'/',
        name:"Compra Rescindidos",
        icon: <BiCart/>,
        class: "link disabled"
        
    },{
        path:'/',
        name:"Usados",
        icon: <BiCar/>,
        class: "link disabled"
        
    },{
        path:'/',
        name:"Stock Vehiculos Plan Ahorro",
        icon: <BiBus/>,
        class: "link disabled"
        
    },{
        path:'/',
        name:"Seguros",
        icon: <BiLock/>,
        class: "link disabled"
      
    },
    


]

