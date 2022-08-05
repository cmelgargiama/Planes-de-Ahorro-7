import React,  {useState, useContext} from 'react'
import {  BiMenu, BiLogOut, BiBus,BiListPlus, BiFile, BiTimeFive, BiPhoneCall,
  BiIdCard, BiGroup, BiCog, BiLineChart, BiPrinter,
   BiTachometer, BiLinkExternal, BiCart, BiCar, BiLock, BiChevronUp, BiChevronDown
 } from "react-icons/bi";
import { NavLink, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import SubMenu from './submenu';
import {masterItem, operacionesItem} from "./sidebarData"


const Sidenav = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
// TOGGLE OPERACIONES
    const[isDroppedOperaciones ,setIsDroppedOperaciones] = useState(false);
    const toggleDropOperaciones = () => setIsDroppedOperaciones (!isDroppedOperaciones);
    const[isDroppedOperacionesScoring ,setIsDroppedOperacionesScoring] = useState(false);
    const toggleDropOperacionesScoring = () => setIsDroppedOperacionesScoring (!isDroppedOperacionesScoring);
    const[isDroppedOperacionesImportaciones ,setIsDroppedOperacionesImportaciones] = useState(false);
    const toggleDropOperacionesImportaciones = () => setIsDroppedOperacionesImportaciones (!isDroppedOperacionesImportaciones);
    const[isDroppedOperacionesLicitaciones ,setIsDroppedOperacionesLicitaciones] = useState(false);
    const toggleDropOperacionesLicitaciones = () => setIsDroppedOperacionesLicitaciones (!isDroppedOperacionesLicitaciones);
// TOGGLE MESA DE PLANES
    const[isDroppedMesaDePlanes ,setIsDroppedMesaDePlanes] = useState(false);
    const toggleDropMesaDePlanes = () => setIsDroppedMesaDePlanes (!isDroppedMesaDePlanes);
// TOGGLE MORA
    const[isDroppedMora ,setIsDroppedMora] = useState(false);
    const toggleDropMora = () => setIsDroppedMora (!isDroppedMora);
// TOGGLE CALL CENTER
    const[isDroppedCallCenter ,setIsDroppedCallCenter] = useState(false);
    const toggleDropCallCenter = () => setIsDroppedCallCenter (!isDroppedCallCenter);
// TOGGLE PERSONAL
    const[isDroppedPersonal ,setIsDroppedPersonal] = useState(false);
    const toggleDropPersonal = () => setIsDroppedPersonal (!isDroppedPersonal);
// TOGGLE EMPRENDEDORES
    const[isDroppedEmprendedores ,setIsDroppedEmprendedores] = useState(false);
    const toggleDropEmprendedores = () => setIsDroppedEmprendedores (!isDroppedEmprendedores);
// TOGGLE CONFIGURACION
    const[isDroppedConfiguracion ,setIsDroppedConfiguracion] = useState(false);
    const toggleDropConfiguracion = () => setIsDroppedConfiguracion (!isDroppedConfiguracion);
// TOGGLE CONTABILIDAD
    const[isDroppedContabilidad ,setIsDroppedContabilidad] = useState(false);
    const toggleDropContabilidad = () => setIsDroppedContabilidad (!isDroppedContabilidad);
// TOGGLE PLAN SUBITE
    const[isDroppedPlanSubite ,setIsDroppedPlanSubite] = useState(false);
    const toggleDropPlanSubite = () => setIsDroppedPlanSubite (!isDroppedPlanSubite);
// TOGGLE ENTREGA CONVENCIONALES
    const[isDroppedEntregaConvencionales ,setIsDroppedEntregaConvencionales] = useState(false);
    const toggleDropEntregaConvencionales = () => setIsDroppedEntregaConvencionales (!isDroppedEntregaConvencionales);
// TOGGLE COMPRA RESCINDIDOS
    const[isDroppedCompraRescindidos ,setIsDroppedCompraRescindidos] = useState(false);
    const toggleDropCompraRescindidos = () => setIsDroppedCompraRescindidos (!isDroppedCompraRescindidos);
// TOGGLE USADOS
    const[isDroppedUsados ,setIsDroppedUsados] = useState(false);
    const toggleDropUsados = () => setIsDroppedUsados (!isDroppedUsados);
// TOGGLE 
    const[isDropped ,setIsDropped] = useState(false);
    const toggleDrop = () => setIsDropped (!isDropped);
   

    const context = useContext(UserContext);

// FILTER DE CODIGOS DE ROL    
    const role = context.userInfo.rl_codigo;
    function master(code, err) {
    return code == "1" }
    function operaciones(code) {
    return code == "1.2"}
    function operacionesAltaPreSolRole(code) {
    return code == "1.2.1"}
    function operacionesActualizacionPreSolRole(code) {
    return code == "1.2.2"}
    function operacionesActualizacionOperaciones(code) {
    return code == "1.2.3"}
    function operacionesAltaCartera(code) {
    return code == "1.2.4"}
    function operacionesAAPE(code) {
    return code == "1.2.5"}
    function operacionesScoring(code) {
    return code == "1.2.6"}
    function operacionesConciliacionTarjetas(code) {
    return code == "1.2.7"}
    function operacionesReportePersonalizado(code) {
    return code == "1.2.8"}  
    function operacionesExcelDatos(code) {
    return code == "1.2.9"}  
    function operacionesBuscarOp(code) {
    return code == "1.2.10"}  
    function operacionesImportaciones(code) {
    return code == "1.2.11"}  
    function operacionesControlSolicitudes(code) {
    return code == "1.2.12"}  
    function operacionesControlRecibos(code) {
    return code == "1.2.13"}  
    function operacionesControlTransferencias(code) {
    return code == "1.2.14"}  
    function operacionesImpresionRecibos(code) {
    return code == "1.2.15"}  
    function operacionesReclamos(code) {
    return code == "1.2.16"}  
    function operacionesLicitaciones(code) {
    return code == "1.2.17"}  
    function operacionesLlamadosPorOperacion(code) {
    return code == "1.2.18"}  
    function operacionesReintegros(code) {
    return code == "1.2.19"}
    function operacionesRepMicroEmprendedores(code) {
    return code == "1.2.20"}  
    function operacionesReportes(code) {
    return code == "1.2.21"}  
    function operacionesAgrupamientos(code) {
    return code == "1.2.22"}        
    const roleMaster = role.filter( master)  
    const roleOperaciones = role.filter( operaciones)  
    const roleOperacionesAltaPreSol = role.filter( operacionesAltaPreSolRole) 
    const roleOperacionesActualizacionPreSol = role.filter( operacionesActualizacionPreSolRole)
    const roleOperacionesActualizacionOperaciones = role.filter( operacionesActualizacionOperaciones)
    const roleOperacionesAltaCartera = role.filter( operacionesAltaCartera)
    const roleOperacionesAAPE = role.filter( operacionesAAPE)
    const roleOperacionesScoring = role.filter( operacionesScoring)
    const roleOperacionesConciliacionTarjetas = role.filter( operacionesConciliacionTarjetas)
    const roleOperacionesReportePersonalizado = role.filter( operacionesReportePersonalizado)
    const roleOperacionesExcelDatos = role.filter( operacionesExcelDatos)
    const roleOperacionesBuscarOp = role.filter( operacionesBuscarOp)
    const roleOperacionesImportaciones = role.filter( operacionesImportaciones)
    const roleOperacionesControlSolicitudes = role.filter( operacionesControlSolicitudes)
    const roleOperacionesControlRecibos = role.filter( operacionesControlRecibos)
    const roleOperacionesControlTransferencias = role.filter( operacionesControlTransferencias)
    const roleOperacionesImpresionRecibos = role.filter( operacionesImpresionRecibos)
    const roleOperacionesReclamos = role.filter( operacionesReclamos)
    const roleOperacionesLicitaciones = role.filter( operacionesLicitaciones)
    const roleOperacionesLlamadosPorOperacion = role.filter( operacionesLlamadosPorOperacion)
    const roleOperacionesReintegros = role.filter( operacionesReintegros)
    const roleOperacionesRepMicroEmprendedores = role.filter( operacionesRepMicroEmprendedores)
    const roleOperacionesReportes = role.filter( operacionesReportes)
    const roleOperacionesAgrupamientos = role.filter( operacionesAgrupamientos)
    console.log(roleMaster,
                roleOperaciones,
                roleOperacionesAltaPreSol,
                roleOperacionesActualizacionPreSol,
                roleOperacionesActualizacionOperaciones,
                roleOperacionesAltaCartera,
                roleOperacionesAAPE,
                roleOperacionesScoring,
                roleOperacionesConciliacionTarjetas,
                roleOperacionesReportePersonalizado,
                roleOperacionesExcelDatos,
                roleOperacionesBuscarOp,
                roleOperacionesImportaciones,
                roleOperacionesControlSolicitudes,
                roleOperacionesControlRecibos,
                roleOperacionesControlTransferencias,
                roleOperacionesImpresionRecibos,
                roleOperacionesReclamos,
                roleOperacionesLicitaciones,
                roleOperacionesLlamadosPorOperacion,
                roleOperacionesReintegros,
                roleOperacionesRepMicroEmprendedores,
                roleOperacionesReportes,
                roleOperacionesAgrupamientos)

// RENDER DE SIDENAV    
    return (<UserContext.Consumer>
        {context=>
        <div className="container">
        <div style={{width: isOpen ? "180px" : "55px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "grid" : "none" }} className="logo">Planes de Ahorro 7</h1>
                <div style={{marginLeft: isOpen ? "25px" : "0px"}} className="bars">
                    <BiMenu onClick={toggle}/>
                </div>
            </div>
            <div className='scrollbar' id="style-1">
                <div>
                
              <div>
              <NavLink to="" className="link" activeclassName="disabled">
                    <div className="icon"><BiListPlus/>
            
                    <div style={{display: isOpen ? "block" : "none"}}  className="link_text">Operaciones
                    <i ><BiChevronDown onClick={toggleDropOperaciones} className="toggle"/></i>
                    <ul  className={ isDroppedOperaciones ?  "op-show show" : "ul"}>
                    { roleMaster == "1" || roleOperacionesAltaPreSol == "1.2.1" &&
                    <li><Link to="/operaciones/altaPre-Solicitudes">Alta Pre-Solicitudes</Link></li>}
                    { roleMaster != "1" || roleOperacionesAltaPreSol != "1.2.1"  &&
                    <li><Link to="">Alta Pre-Solicitudes</Link></li>}
                    { roleMaster == "1" || roleOperacionesActualizacionPreSol == "1.2.2"  &&
                    <li><Link to="/operaciones/ActualizacionPre-Solicitudes">Actualización Pre-Sol</Link></li>}
                    {roleMaster != "1" || roleOperacionesActualizacionPreSol != "1.2.2"  &&
                    <li><Link to="">Actualización Pre-Sol</Link></li>}
                    { roleMaster == "1" || roleOperacionesActualizacionOperaciones == "1.2.3"  &&
                    <li><Link to="/operaciones/ActualizacionOperaciones">Actualización Operaciones</Link></li>}
                    { roleMaster != "1" || roleOperacionesActualizacionOperaciones != "1.2.3" &&
                    <li><Link to="">Actualización Operaciones</Link></li>}
                    { roleMaster == "1" || roleOperacionesAltaCartera == "1.2.4" &&
                    <li><Link to="/operaciones/AltadeCartera">Alta de Cartera</Link></li>}
                    { roleMaster != "1" || roleOperacionesAltaCartera != "1.2.4" &&
                    <li><Link to="">Alta de Cartera</Link></li>}
                    {roleOperacionesAAPE == "1.2.5" || roleMaster == "1" &&
                    <li><Link to="/operaciones/Agrup-adj-pedidos-entregas">Agrup./Adj./Pedidos/Entregas</Link></li>}
                    {roleOperacionesAAPE != "1.2.5" || roleMaster != "1" &&
                    <li><Link to="">Agrup./Adj./Pedidos/Entregas</Link></li>}
                    {/*PENDIENTE SCORING*/}
                    <li><Link to="">Scoring
                    <i ><BiChevronDown onClick={toggleDropOperacionesScoring} className="toggle"/></i>
                    <ul  className={ isDroppedOperacionesScoring ?  "op-show show" : "ul"}>
                      <li><Link to="/operaciones/Scoring">Scoring</Link></li>
                      <li>Consultar Cotizador</li>
                      <li>Scoring Avanzado</li>
                    </ul>
                    </Link></li>
                    {roleOperacionesConciliacionTarjetas == "1.2.7" || roleMaster == "1" &&
                    <li><Link to="/operaciones/ConciliacionTarjetas">Conciliación Tarjetas</Link></li>}
                    {roleOperacionesConciliacionTarjetas != "1.2.7" || roleMaster != "1" &&
                    <li><Link to="">Conciliación Tarjetas</Link></li>}
                    {roleOperacionesReportePersonalizado == "1.2.8" || roleMaster == "1" &&
                    <li><Link to="/operaciones/ReportePersonalizadoOp">Reporte Personalizado Op.</Link></li>}
                    {roleOperacionesReportePersonalizado != "1.2.8" || roleMaster != "1" &&
                    <li><Link to="">Reporte Personalizado Op.</Link></li>}
                    {roleOperacionesExcelDatos == "1.2.9" || roleMaster == "1" &&
                    <li><Link to="/operaciones/ExcelDatosOperaciones">Excel Datos Operaciones</Link></li>}
                    {roleOperacionesExcelDatos != "1.2.9" || roleMaster != "1"&&
                    <li><Link to="">Excel Datos Operaciones</Link></li>}
                    {roleOperacionesBuscarOp == "1.2.10" || roleMaster == "1" &&
                    <li><Link to="/operaciones/BuscarOpPreSolDNI">Buscar Op/PreSol x DNI</Link></li>}
                    {roleOperacionesBuscarOp != "1.2.10" || roleMaster != "1" &&
                    <li><Link to="">Buscar Op/PreSol x DNI</Link></li>}
                    {/*PENDIENTE IMPORTACIONES*/}
                    <li><Link to="">Importaciones
                    <i ><BiChevronDown onClick={toggleDropOperacionesImportaciones} className="toggle"/></i>
                    <ul  className={ isDroppedOperacionesImportaciones ?  "op-show show" : "ul"}>
                      <li><Link to="/operaciones/Importaciones">Importación Agrupamientos</Link></li>
                      <li>Importación Cambios de Concesionaria</li>
                      <li>Importación Fecha Arribo Unidad y Documentación</li>
                      <li>Importación Observaciones Acto Adj.</li>
                      <li>Importación Comisión Vendedores</li>
                      <li>Importación Adjudicaciones</li>
                      <li>Importación Fecha Ingreso/Regreso Gestoría</li>
                      <li>Importación Cuotas Encuadre.</li>
                      <li>Importación Rescindidos</li>
                      <li>Importación Cuotas</li>
                      <li>Importación Adjudicaciones Vencidas</li>
                    </ul>
                    </Link></li>
                    {roleOperacionesControlSolicitudes == "1.2.12" || roleMaster == "1" &&
                    <li><Link to="/operaciones/ControlSolicitudes">Control Solicitudes</Link></li>}
                    {roleOperacionesControlSolicitudes != "1.2.12" || roleMaster != "1" &&
                    <li><Link to="">Control Solicitudes</Link></li>}
                    {roleOperacionesControlRecibos == "1.2.13" || roleMaster == "1" &&
                    <li><Link to="/operaciones/ControlRecibos">Control Recibos</Link></li>}
                    {roleOperacionesControlRecibos != "1.2.13" || roleMaster != "1" &&
                    <li><Link to="">Control Recibos</Link></li>}
                    {roleOperacionesControlTransferencias == "1.2.14" || roleMaster == "1" &&
                    <li><Link to="/operaciones/ControlTransferencias">Control Transferencias</Link></li>}
                    {roleOperacionesControlTransferencias != "1.2.14" || roleMaster != "1" &&
                    <li><Link to="">Control Transferencias</Link></li>}
                    {roleOperacionesImpresionRecibos == "1.2.15" || roleMaster == "1" &&
                    <li><Link to="/operaciones/ImpresionRecibosX">Impresión Recibos X</Link></li>}
                    {roleOperacionesImpresionRecibos != "1.2.15" || roleMaster != "1" &&
                    <li><Link to="">Impresión Recibos X</Link></li>}
                    {roleOperacionesReclamos == "1.2.16" || roleMaster == "1" &&
                    <li><Link to="/operaciones/Reclamos">Reclamos</Link></li>}
                    {roleOperacionesReclamos != "1.2.16" || roleMaster != "1" &&
                    <li><Link to="">Reclamos</Link></li>}
                    {/*PENDIENTE LICITACIONES*/}
                    <li><Link to="">Licitaciones
                    <i ><BiChevronDown onClick={toggleDropOperacionesLicitaciones} className="toggle"/></i>
                    <ul  className={ isDroppedOperacionesLicitaciones ?  "op-show show" : "ul"}>
                      <li><Link to="/operaciones/Licitaciones">Licitaciones</Link></li>
                      <li>Cliente en Condiciones de Licitar</li>
                      <li>Clientes Interesados en Licitar</li>
                      <li>Control Llave x Llave</li>
                      <li>Reintegro de Licitaciones</li>
                    </ul></Link></li>
                    {roleOperacionesLlamadosPorOperacion == "1.2.18" || roleMaster == "1" &&
                    <li><Link to="/operaciones/LlamadosPorOperacion">Llamados por Operación</Link></li>}
                    {roleOperacionesLlamadosPorOperacion != "1.2.18" || roleMaster != "1" &&
                    <li><Link to="">Llamados por Operación</Link></li>}
                    {roleOperacionesReintegros == "1.2.19" || roleMaster == "1" &&
                    <li><Link to="/operaciones/Reintegros">Reintegros</Link></li>}
                    {roleOperacionesReintegros != "1.2.19" || roleMaster != "1" &&
                    <li><Link to="">Reintegros</Link></li>}
                    {roleOperacionesRepMicroEmprendedores == "1.2.20" || roleMaster == "1" &&
                    <li><Link to="/operaciones/RepMicroEmprendedores">Rep. Micro Emprendedores</Link></li>}
                    {roleOperacionesRepMicroEmprendedores != "1.2.20" || roleMaster != "1" &&
                    <li><Link to="">Rep. Micro Emprendedores</Link></li>}
                    {roleOperacionesReportes == "1.2.21" || roleMaster == "1" &&
                    <li><Link to="/operaciones/Reportes">Reportes</Link></li>}
                    {roleOperacionesReportes != "1.2.21" || roleMaster != "1" &&
                    <li><Link to="">Reportes</Link></li>}
                  </ul> </div> </div>
                
                </NavLink>
                <NavLink to=''  className="link disabled" activeclassName="active">
                    <div className="icon"><BiFile/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Mesa de Planes
                    <i ><BiChevronDown onClick={toggleDropMesaDePlanes} className="toggle"/></i>
                    <ul className={ isDroppedMesaDePlanes ? "mp-show show" : "ul"} >
                    <li><a href="">Mesa de Planes</a></li>
                    <li><a href="">Scoring</a></li>
                    <li><a href="">Stock Para Ventas</a></li>
                    <li><a href="">Autorizador Clasificaciones</a></li>
                    <li><a href="">Stock Contable</a></li>
                    <li><a href="">Gestión de Señas Acumuladas</a></li>
                    <li><a href="">Haberes Netos</a></li>
                </ul></div>
                </NavLink>
                <NavLink to=''  className="link disabled" activeclassName="active">
                    <div className="icon"><BiTimeFive/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Mora
                    <i ><BiChevronDown onClick={toggleDropMora} className="toggle"/></i>
                    <ul className={ isDroppedMora ? "mora-show show"  : "ul"} >
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
                </ul></div>
                </NavLink>
                <NavLink to=''  className="link disabled" activeclassName="active">
                    <div className="icon"><BiPhoneCall/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Call Center
                    <i ><BiChevronDown onClick={toggleDropCallCenter} className="toggle"/></i>
                    <ul className={ isDroppedCallCenter ? "call-show show"  : "ul"} >
                    <li><a href="">Definición Campaña Mails</a></li>
                    <li><a href="">Definición Campaña SMS</a></li>
                    <li><a href="">Generación Bases Neotel</a></li>
                    <li><a href="">Envío y Recepción de Mails</a></li>
                    <li><a href="">Envío y Recepción de SMS</a></li>
                    <li><a href="">Definición Vto. Fecha Agendado Campaña</a></li>
                    <li><a href="">Administración Mails Enviados y Recibidos</a></li>
                    <li><a href="">Administración SMS Enviados y Recibidos</a></li>
                </ul></div>
                </NavLink>
                <NavLink to=''  className="link disabled" activeclassName="active">
                    <div className="icon"><BiIdCard/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Personal
                    <i ><BiChevronDown onClick={toggleDropPersonal} className="toggle"/></i>
                    <ul className={ isDroppedPersonal ? "per-show show"  : "ul"} >
                    <li><a href="">Legajos</a></li>
                    <li><a href="">Reportes</a></li>
                    <li><a href="">Importación de Sueldos</a></li>
                    <li><a href="">Generación TXT Acreditación Haberes</a></li>
                  </ul></div>
                </NavLink>
                <NavLink to=''  className="link disabled" activeclassName="active">
                    <div className="icon"><BiGroup/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Emprendedores
                    <i ><BiChevronDown onClick={toggleDropEmprendedores} className="toggle"/></i>
                    <ul className={ isDroppedEmprendedores ? "empre-show show"  : "ul"} >
                    <li><a href="">Circulares</a></li>
                  </ul></div>
                </NavLink>
                <NavLink to=''  className="link disabled" activeclassName="active">
                    <div className="icon"><BiCog/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Configuracion de Datos Generales
                    <i ><BiChevronDown onClick={toggleDropConfiguracion} className="toggle"/></i>
                    <ul className={ isDroppedConfiguracion ? "config-show show"  : "ul"} >
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
                  </ul></div>
                </NavLink>
                <NavLink to=''  className="link disabled" activeclassName="active">
                    <div className="icon"><BiLineChart/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Contabilidad
                    <i ><BiChevronDown onClick={toggleDropContabilidad} className="toggle"/></i>
                    <ul className={ isDroppedContabilidad ? "cont-show show"  : "ul"} >
                    <li><a href="">Tesorería</a></li>
                    <li><a href="">Ventas</a></li>
                    <li><a href="">Bancos</a></li>
                    <li><a href="">Contabilidad General</a></li>
                    <li><a href="">Compras</a></li>
                    <li><a href="">Centro de Costos</a></li>
                    <li><a href="">Proveedores</a></li>
                    <li><a href="">Presupuestos</a></li>
                    <li><a href="">Patentamientos Plan de Ahorro</a></li>
                </ul></div>
                </NavLink>
                <NavLink to=''  className="link disabled" activeclassName="active">
                    <div className="icon"><BiPrinter/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Reportes</div>
                </NavLink>
                <NavLink to=''  className="link disabled" activeclassName="active">
                    <div className="icon"><BiTachometer/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Plan Subite Fiat
                    <i ><BiChevronDown onClick={toggleDropPlanSubite} className="toggle"/></i>
                    <ul className={ isDroppedPlanSubite ? "plan-s-show show"  : "ul"} >
                    <li><a href="">Oficiales</a></li>
                    <li><a href="">Reporte de Compras</a></li>
                    <li><a href="">Importación de Datos</a></li>
                    <li><a href="">Gestión de Datos</a></li>
                    <li><a href="">Asignación de Datos</a></li>
                    <li><a href="">Estado de la Gestión</a></li>
                    <li><a href="">Reporte de Asignaciones por Período</a></li>
                    <li><a href="">Importación de HN</a></li>
                </ul></div>
                </NavLink>
                <NavLink to=''  className="link disabled" activeclassName="active">
                    <div className="icon"><BiLinkExternal/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Entregas Convencionales
                    <i ><BiChevronDown onClick={toggleDropEntregaConvencionales} className="toggle"/></i>
                    <ul className={ isDroppedEntregaConvencionales ? "entre-show show"  : "ul"} >
                    <li><a href="">Alta y Modificación de Convencionales</a></li>
                    <li><a href="">Turnos</a></li>
                    <li><a href="">Seguimiento Service</a></li>
                </ul></div>
                </NavLink>
                <NavLink to=''  className="link disabled" activeclassName="active">
                    <div className="icon"><BiCart/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Compra Rescindidos
                    <i ><BiChevronDown onClick={toggleDropCompraRescindidos} className="toggle"/></i>
                    <ul className={ isDroppedCompraRescindidos ? "compra-show show"  : "ul"} >
                    <li><a href="">Oficiales</a></li>
                    <li><a href="">Estado de la Gestión</a></li>
                    <li><a href="">Gestión de Datos</a></li>
                    <li><a href="">Asignación de Datos</a></li>
                    <li><a href="">Importación de Datos</a></li>
                </ul></div>
                </NavLink>
                <NavLink to=''  className="link disabled" activeclassName="active">
                    <div className="icon"><BiCar/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Usados
                    <i ><BiChevronDown onClick={toggleDropUsados} className="toggle"/></i>
                    <ul className={ isDroppedUsados ? "usados-show show"  : "ul"} >
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
                </ul></div>
                </NavLink>
                <NavLink to=''  className="link disabled" activeclassName="active">
                    <div className="icon"><BiBus/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Stock Vehiculos Plan Ahorro</div>
                </NavLink>
                <NavLink to='/seguros'  className="link disabled" activeclassName="active">
                    <div className="icon"><BiLock/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Seguros</div>
                </NavLink>
                </div>

                
                   
            </div> </div>
            <div class="profile" style={{width: isOpen ? "180px" : "55px"}}>
            <div class="profile-details"  style={{display: isOpen ? "block" : "none" }}>
           <div class="name_job">
            <div class="empresa">{context.userInfo.empresa}</div>
             <div class="name">{context.userInfo.login} </div>
             <div class="job">{context.userInfo.roles}</div>
           </div></div>
         <a href="/" style={{position: isOpen ? "relative" : "relative", marginLeft: isOpen ? "130px" : "0", bottom: isOpen ? "52px" : "12px" }} class="logout_button">
         <i id="log_out"><BiLogOut /></i></a>
        </div></div>
      <main>{children}</main>
     </div>}
     </UserContext.Consumer>
    )
}
export default Sidenav;