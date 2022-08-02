import React,  {useState, useContext} from 'react'
import { BiAlignMiddle,
    BiBus,BiListPlus, BiFile, BiTimeFive, BiPhoneCall,
     BiIdCard, BiGroup, BiCog, BiLineChart, BiPrinter,
      BiTachometer, BiLinkExternal, BiCart, BiCar, BiLock, BiMenu
 } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


const Sidenav = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const[isDropped ,setIsDropped] = useState(false);
    const toggleDrop = () => setIsDropped (!isDropped);
    const context = useContext(UserContext);
    const [roles,setRoles] = useState("");
    const roleIf = context.userInfo.rl_codigo 
  
   
   
if(roleIf == 1.2){
    const masterItem=[
        

        {
            path:'/operaciones-',
            name:"Operaciones",
            icon: <BiListPlus/>,
            class: "link"
            
        },{
            path:'/mesadeplanes-',
            name:"Mesa De Planes",
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
    return masterItem}
    
    
    const masterItem=[
        

        {
            path:'/operaciones-',
            name:"Operaciones",
            icon: <BiListPlus/>,
            class: "link"
            
        },{
            path:'/mesadeplanes-',
            name:"Mesa De Planes",
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


    return (<UserContext.Consumer>
        {context=>

        
        <div className="container">
        <div style={{width: isOpen ? "200px" : "55px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Planes de Ahorro 7</h1>
                <div style={{marginLeft: isOpen ? "25px" : "0px"}} className="bars">
                    <BiMenu onClick={toggle}/>
                </div>
            </div>
            <div className='scrollbar' id="style-1">
            
                <div>
                 
                    {  masterItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className={item.class} activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        
                    </NavLink>))}
                
                    {/*context.userInfo.rl_codigo == 1 &&
                    <div>
                    <NavLink to="/operaciones-" className="link" onClick={toggleDrop} activeclassName="disabled">
                        <div className="icon"><BiListPlus/></div>
                
                        <div style={{display: isOpen ? "block" : "none"}}  className="link_text">Operaciones</div>
                        <ul style={{display: isDropped ? "block" : "none"}} class="op-show">
                        <li><a href="">Alta Pre-Solicitudes</a></li>
                        <li><a href="">Actualización Pre-Sol</a></li>
                        <li><a href="">Actualización Operaciones</a></li>
                        <li><a href="">Alta de Cartera</a></li>
                        <li><a href="">Agrup./Adj./Pedidos/Entregas</a></li>
                        <li><a href="">Scoring</a></li>
                        <li><a href="">Conciliación Tarjetas</a></li>
                        <li><a href="">Reporte Personalizado Op.</a></li>
                        <li><a href="">Excel Datos Operaciones</a></li>
                        <li><a href="">Buscar Op/PreSol x DNI</a></li>
                        <li><a href="">Importaciones</a></li>
                        <li><a href="">Control Solicitudes</a></li>
                        <li><a href="">Control Recibos</a></li>
                        <li><a href="">Control Transferencias</a></li>
                        <li><a href="">Impresión Recibos X</a></li>
                        <li><a href="">Reclamos</a></li>
                        <li><a href="">Licitaciones</a></li>
                        <li><a href="">Llamados por Operación</a></li>
                        <li><a href="">Reintegros</a></li>
                        <li><a href="">Rep. Micro Emprendedores</a></li>
                        <li><a href="">Reportes</a></li>
                     </ul>
                    
                    </NavLink>
                    <NavLink to='/mesadeplanes-'  className="link disabled" activeclassName="active">
                        <div className="icon"><BiFile/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Mesa de Planes</div>
                        <ul style={{display: isDropped ? "block" : "none"}} class="mp-show">
                        <li><a href="">Mesa de Planes</a></li>
                        <li><a href="">Scoring</a></li>
                        <li><a href="">Stock Para Ventas</a></li>
                        <li><a href="">Autorizador Clasificaciones</a></li>
                        <li><a href="">Stock Contable</a></li>
                        <li><a href="">Gestión de Señas Acumuladas</a></li>
                        <li><a href="">Haberes Netos</a></li>
                    </ul>
                    </NavLink>
                    <NavLink to='/mora-'  className="link disabled" activeclassName="active">
                        <div className="icon"><BiTimeFive/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Mora</div>
                        <ul style={{display: isDropped ? "block" : "none"}} class="mora-show">
                        <li><a href="">Cuotas Encuadre</a></li>
                        <li><a href="">Recupero Cuotas Encuadre</a></li>
                        <li><a href="">Reporte Pagos y Recuperos Encuadre</a></li>
                        <li><a href="">Cuadro de Performance</a></li>
                        <li><a href="">Asignación de Mora</a></li>
                        <li><a href="">Mora Técnica</a></li>
                        <li><a href="">Gestión Mora Temprana</a></li>
                        <li><a href="">Gestión Mora Especializada</a></li>
                        <li><a href="">Cola de Llamados de Mora Temprana</a></li>
                        <li><a href="">Cola de Llamados de Mora Especializada</a></li>
                    </ul>
                    </NavLink>
                    <NavLink to='/callcenter-'  className="link disabled" activeclassName="active">
                        <div className="icon"><BiPhoneCall/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Call Center</div>
                        <ul style={{display: isDropped ? "block" : "none"}} class="call-show">
                        <li><a href="">Definición Campaña Mails</a></li>
                        <li><a href="">Definición Campaña SMS</a></li>
                        <li><a href="">Generación Bases Neotel</a></li>
                        <li><a href="">Envío y Recepción de Mails</a></li>
                        <li><a href="">Envío y Recepción de SMS</a></li>
                        <li><a href="">Definición Vto. Fecha Agendado Campaña</a></li>
                        <li><a href="">Administración Mails Enviados y Recibidos</a></li>
                        <li><a href="">Administración SMS Enviados y Recibidos</a></li>
                    </ul>
                    </NavLink>
                    <NavLink to='/personal-'  className="link disabled" activeclassName="active">
                        <div className="icon"><BiIdCard/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Personal</div>
                        <ul style={{display: isDropped ? "block" : "none"}} class="per-show">
                        <li><a href="">Legajos</a></li>
                        <li><a href="">Reportes</a></li>
                        <li><a href="">Importación de Sueldos</a></li>
                        <li><a href="">Generación TXT Acreditación Haberes</a></li>
                     </ul>
                    </NavLink>
                    <NavLink to='/emprendedores-'  className="link disabled" activeclassName="active">
                        <div className="icon"><BiGroup/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Emprendedores</div>
                        <ul style={{display: isDropped ? "block" : "none"}} class="empre-show">
                        <li><a href="">Circulares</a></li>
                     </ul>
                    </NavLink>
                    <NavLink to='/configuracion-'  className="link disabled" activeclassName="active">
                        <div className="icon"><BiCog/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Configuracion de Datos Generales</div>
                        <ul style={{display: isDropped ? "block" : "none"}} class="config-show">
                        <li><a href="">Vendedores</a></li>
                        <li><a href="">Cambio de Modelo</a></li>
                        <li><a href="">Obj. Altas Bajas Mesa de Planes</a></li>
                        <li><a href="">Parámetros</a></li>
                        <li><a href="">Modelos</a></li>
                        <li><a href="">Objetivos Mora</a></li>
                        <li><a href="">Obj. Grupo Mora</a></li>
                        <li><a href="">Cambio de Contraseña de Sueldos</a></li>
                        <li><a href="">Estructura Comercial</a></li>
                        <li><a href="">Objetivos por Marca</a></li>
                        <li><a href="">Cambio de Contraseña</a></li>
                        <li><a href="">Gerentes</a></li>
                        <li><a href="">Sucursales</a></li>
                        <li><a href="">Usuarios</a></li>
                        <li><a href="">Supervisores</a></li>
                        <li><a href="">Puntos de Venta</a></li>
                        <li><a href="">Intereses</a></li>
                        <li><a href="">Team Leader</a></li>
                        <li><a href="">Listas de Precios</a></li>
                        <li><a href="">Oficiales</a></li>
                        <li><a href="">Entrega Asegurada</a></li>
                     </ul>
                    </NavLink>
                    <NavLink to='/contabilidad-'  className="link disabled" activeclassName="active">
                        <div className="icon"><BiLineChart/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Contabilidad</div>
                        <ul style={{display: isDropped ? "block" : "none"}} class="cont-show">
                        <li><a href="">Tesorería</a></li>
                        <li><a href="">Ventas</a></li>
                        <li><a href="">Bancos</a></li>
                        <li><a href="">Contabilidad General</a></li>
                        <li><a href="">Compras</a></li>
                        <li><a href="">Centro de Costos</a></li>
                        <li><a href="">Proveedores</a></li>
                        <li><a href="">Presupuestos</a></li>
                        <li><a href="">Patentamientos Plan de Ahorro</a></li>
                    </ul>
                    </NavLink>
                    <NavLink to='/reportes'  className="link disabled" activeclassName="active">
                        <div className="icon"><BiPrinter/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Reportes</div>
                    </NavLink>
                    <NavLink to='/plansubite-'  className="link disabled" activeclassName="active">
                        <div className="icon"><BiTachometer/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Plan Subite Fiat</div>
                        <ul style={{display: isDropped ? "block" : "none"}} class="plan-s-show">
                        <li><a href="">Oficiales</a></li>
                        <li><a href="">Reporte de Compras</a></li>
                        <li><a href="">Importación de Datos</a></li>
                        <li><a href="">Gestión de Datos</a></li>
                        <li><a href="">Asignación de Datos</a></li>
                        <li><a href="">Estado de la Gestión</a></li>
                        <li><a href="">Reporte de Asignaciones por Período</a></li>
                        <li><a href="">Importación de HN</a></li>
                    </ul>
                    </NavLink>
                    <NavLink to='/entregas-'  className="link disabled" activeclassName="active">
                        <div className="icon"><BiLinkExternal/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Entregas Convencionales</div>
                        <ul style={{display: isDropped ? "block" : "none"}} class="entr-conv-show">
                        <li><a href="">Alta y Modificación de Convencionales</a></li>
                        <li><a href="">Turnos</a></li>
                        <li><a href="">Seguimiento Service</a></li>
                    </ul>
                    </NavLink>
                    <NavLink to='/compra-'  className="link disabled" activeclassName="active">
                        <div className="icon"><BiCart/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Compra Rescindidos</div>
                        <ul style={{display: isDropped ? "block" : "none"}} class="compra-show">
                        <li><a href="">Oficiales</a></li>
                        <li><a href="">Estado de la Gestión</a></li>
                        <li><a href="">Gestión de Datos</a></li>
                        <li><a href="">Asignación de Datos</a></li>
                        <li><a href="">Importación de Datos</a></li>
                    </ul>
                    </NavLink>
                    <NavLink to='/usados-'  className="link disabled" activeclassName="active">
                        <div className="icon"><BiCar/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Usados</div>
                        <ul style={{display: isDropped ? "block" : "none"}} class="usados-show">
                        <li><a href="">Cotizaciones</a></li>
                        <li><a href="">Cotizaciones Generales</a></li>
                        <li><a href="">Unidades Aprobadas Plan de Ahorro a Recibir</a></li>
                        <li><a href="">Unidades Aprobadas Convencional a Recibir</a></li>
                        <li><a href="">Resumen Usados (Interempresa)</a></li>
                        <li><a href="">Carga Tasa por Tenencia</a></li>
                        <li><a href="">Análisis Ingreso Egreso</a></li>
                        <li><a href="">Stock</a></li>
                        <li><a href="">Stock Interempresa</a></li>
                        <li><a href="">Egreso de Unidades y Ventas</a></li>
                        <li><a href="">Ventas Interempresa</a></li>
                        <li><a href="">Listado para Ventas</a></li>
                        <li><a href="">Listado para Ventas (Interempresa)</a></li>
                        <li><a href="">Vendedores Usados</a></li>
                        <li><a href="">Control Precio Toma</a></li>
                        <li><a href="">Capital Vehículos Usados</a></li>
                    </ul>
                    </NavLink>
                    <NavLink to='/stockvehiculos'  className="link disabled" activeclassName="active">
                        <div className="icon"><BiBus/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Stock Vehiculos Plan Ahorro</div>
                    </NavLink>
                    <NavLink to='/seguros'  className="link disabled" activeclassName="active">
                        <div className="icon"><BiLock/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Seguros</div>
                    </NavLink>
                    </div>}

                    {context.userInfo.rl_codigo == 1.2 &&
                    <div>
                    <NavLink to='/operaciones-'  className="link" activeclassName="active">
                        <div className="icon"><BiListPlus/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Operaciones</div>
                    </NavLink>
                    <NavLink to='/mesadeplanes-'  className="link" activeclassName="active">
                        <div className="icon"><BiFile/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Mesa de Planes</div>
                    </NavLink>
                    <NavLink to='/mora-'  className="link" activeclassName="active">
                        <div className="icon"><BiTimeFive/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Mora</div>
                    </NavLink>
                    <NavLink to='/callcenter-'  className="link" activeclassName="active">
                        <div className="icon"><BiPhoneCall/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Call Center</div>
                    </NavLink>
                    <NavLink to='/personal-'  className="link" activeclassName="active">
                        <div className="icon"><BiIdCard/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Personal</div>
                    </NavLink>
                    <NavLink to='/emprendedores-'  className="link" activeclassName="active">
                        <div className="icon"><BiGroup/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Emprendedores</div>
                    </NavLink>
                    <NavLink to='/configuracion-'  className="link" activeclassName="active">
                        <div className="icon"><BiCog/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Configuracion de Datos Generales</div>
                    </NavLink>
                    <NavLink to='/contabilidad-'  className="link" activeclassName="active">
                        <div className="icon"><BiLineChart/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Contabilidad</div>
                    </NavLink>
                    <NavLink to='/reportes'  className="link" activeclassName="active">
                        <div className="icon"><BiPrinter/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Reportes</div>
                    </NavLink>
                    <NavLink to='/plansubite-'  className="link" activeclassName="active">
                        <div className="icon"><BiTachometer/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Plan Subite Fiat</div>
                    </NavLink>
                    <NavLink to='/entregas-'  className="link" activeclassName="active">
                        <div className="icon"><BiLinkExternal/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Entregas Convencionales</div>
                    </NavLink>
                    <NavLink to='/compra-'  className="link" activeclassName="active">
                        <div className="icon"><BiCart/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Compra Rescindidos</div>
                    </NavLink>
                    <NavLink to='/usados-'  className="link" activeclassName="active">
                        <div className="icon"><BiCar/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Usados</div>
                    </NavLink>
                    <NavLink to='/stockvehiculos'  className="link" activeclassName="active">
                        <div className="icon"><BiBus/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Stock Vehiculos Plan Ahorro</div>
                    </NavLink>
                    <NavLink to='/seguros'  className="link" activeclassName="active">
                        <div className="icon"><BiLock/></div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Seguros</div>
                    </NavLink>
                    </div>*/}
                
                
                </div>
            
            </div>
        </div>
        <main>{children}</main>
     </div>}
     </UserContext.Consumer>
    )

}

export default Sidenav;