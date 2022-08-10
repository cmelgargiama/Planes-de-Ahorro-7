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
//CONTEXT
    const context = useContext(UserContext);

//-----------------------------------------CODIGOS DE ROL -----------------------------------------   
    const role = context.userInfo.rl_codigo;
    const master =  (code, err) => {
    return code == "1" }
    //OPERACIONES
    const operaciones = (code) => {
    return code == "1.2"}
    const operacionesAltaPreSolRole = (code) => {
    return code == "1.2.1"}
    const operacionesActualizacionPreSolRole = (code) =>{
    return code == "1.2.2"}
        //ROLES NIVEL 2
    const operacionesActualizacionPreSolRoleNuevoPago = (code) =>{
    return code == "1.2.2.1"}
    const operacionesActualizacionPreSolRoleModificarPago = (code) =>{
    return code == "1.2.2.2"}
    const operacionesActualizacionPreSolRoleEliminarPago = (code) =>{
    return code == "1.2.2.3"}
    const operacionesActualizacionPreSolRoleGrabar = (code) =>{
    return code == "1.2.2.4"}
    const operacionesActualizacionPreSolRoleObservaciones = (code) =>{
    return code == "1.2.2.5"}
    const operacionesActualizacionPreSolRoleConformarOperacion = (code) =>{
    return code == "1.2.2.6"}
    const operacionesActualizacionPreSolRoleScoring = (code) =>{
    return code == "1.2.2.7"}
    const operacionesActualizacionPreSolRoleEsOpScoring = (code) =>{
    return code == "1.2.2.8"}
    const operacionesActualizacionPreSolRoleEsSupervisorComercial = (code) =>{
    return code == "1.2.2.9"}
    const operacionesActualizacionPreSolRoleEsSupervisorScoring = (code) =>{
    return code == "1.2.2.10"}
    const operacionesActualizacionPreSolRolePuedeRechazarDefinitivo = (code) =>{
    return code == "1.2.2.11"}
    const operacionesActualizacionPreSolRoleMITCXVCT = (code) =>{
    return code == "1.2.2.12"}
    const operacionesActualizacionPreSolRoleAgregarBonificacion = (code) =>{
    return code == "1.2.2.13"}
    const operacionesActualizacionPreSolRoleAnulacionPreSolicitudes = (code) =>{
    return code == "1.2.2.14"}
    const operacionesActualizacionPreSolRoleModificarNroTransferencia = (code) =>{
    return code == "1.2.2.15"}
    const operacionesActualizacionPreSolRoleCruceScoring = (code) =>{
    return code == "1.2.2.16"}
    const operacionesActualizacionPreSolRoleVerFechaUsuarioAlta = (code) =>{
    return code == "1.2.2.17"}
        //
    const operacionesActualizacionOperaciones = (code) => {
    return code == "1.2.3"}
    const operacionesAltaCartera = (code) => {
    return code == "1.2.4"}
    const operacionesAAPE = (code) => {
    return code == "1.2.5"}
    const operacionesScoring = (code) => {
    return code == "1.2.6"}
    const operacionesConciliacionTarjetas = (code) => {
    return code == "1.2.7"}
    const operacionesReportePersonalizado = (code) => {
    return code == "1.2.8"}  
    const operacionesExcelDatos =(code) => {
    return code == "1.2.9"}  
    const operacionesBuscarOp = (code) => {
    return code == "1.2.10"}  
    const operacionesImportaciones = (code) => {
    return code == "1.2.11"}  
    const operacionesControlSolicitudes = (code) => {
    return code == "1.2.12"}  
    const operacionesControlRecibos = (code) =>{
    return code == "1.2.13"}  
    const operacionesControlTransferencias = (code) =>{
    return code == "1.2.14"}  
    const operacionesImpresionRecibos = (code) => {
    return code == "1.2.15"}  
    const operacionesReclamos = (code) => {
    return code == "1.2.16"}  
    const operacionesLicitaciones = (code) =>{
    return code == "1.2.17"}  
    const operacionesLlamadosPorOperacion = (code) =>{
    return code == "1.2.18"}  
    const operacionesReintegros = (code) => {
    return code == "1.2.19"}
    const operacionesRepMicroEmprendedores = (code) =>{
    return code == "1.2.20"}  
    const operacionesReportes = (code) =>{
    return code == "1.2.21"}  
    const operacionesAgrupamientos = (code) =>{
    return code == "1.2.22"}
    //MESA DE PLANES
    const mesaDePlanes = (code) =>{
    return code == "1.3"}
        //NIVEL 2
    const mesaDePlanesAdministracionAhorristasAdjudicados = (code) =>{
    return code == "1.3.1"}
    const mesaDePlanesScoring = (code) =>{
    return code == "1.3.2"}
    const mesaDePlanesHaberesNetos = (code) =>{
    return code == "1.3.3"}
    const mesaDePlanesGestionDeSenasAcumuladas = (code) =>{
    return code == "1.3.5"}
    const mesaDePlanesAutorizadorClasificaciones = (code) =>{
    return code == "1.3.6"}
    const mesaDePlanesStockContable = (code) =>{
    return code == "1.3.7"}
    const mesaDePlanesStockParaVentas = (code) =>{
    return code == "1.3.8"}
    //MORA
    const mora = (code) =>{
    return code == "1.4"}
        //NIVEL 2
    const moraCuotasEncuadre = (code) =>{
    return code == "1.4.1"}
    const moraRecuperoCuotasEncuadre = (code) =>{
    return code == "1.4.2"}
    const moraReportePagosYRecuperosEncuadre = (code) =>{
    return code == "1.4.3"}
    const moraCuadroPerformance = (code) =>{
    return code == "1.4.4"}
    const moraAsignacionDeMora = (code) =>{
    return code == "1.4.5"}
    const moraMoraTecnica = (code) =>{
    return code == "1.4.6"}
    const moraGestionMoraTemprana = (code) =>{
    return code == "1.4.7"}
    const moraGestionMoraEspecializada = (code) =>{
    return code == "1.4.8"}
    const moraColaDeLlamadosMoraTemprana = (code) =>{
    return code == "1.4.9"}
    const moraColaDeLlamadosMoraEspecializada = (code) =>{
    return code == "1.4.10"}
    const moraSupervisorMora = (code) =>{
    return code == "1.4.11"}
    const moraVerTodaLaMora = (code) =>{
    return code == "1.4.12"}
    //CALL CENTER
    const callCenter = (code) =>{
    return code == "1.5"}
        //NIVEL 2
    const callCenterDefinicionCampanaMails = (code) =>{
    return code == "1.5.1"}
    const callCenterDefinicionCampanaSMS = (code) =>{
    return code == "1.5.2"}
    const callCenterGeneracionBasesNeotel = (code) =>{
    return code == "1.5.3"}
    const callCenterEnvioYRecepcionDeMails = (code) =>{
    return code == "1.5.4"}
    const callCenterEnvioYRecepcionDeSMS = (code) =>{
    return code == "1.5.5"}
    const callCenterDefinicionFechaVtoAgendadoCampana = (code) =>{
    return code == "1.5.6"}
    const callCenterAdministracionMailsEnviadosYRecibidos = (code) =>{
    return code == "1.5.7"}
    const callCenterAdministracionSMSEnviadosYRecibidos = (code) =>{
    return code == "1.5.8"}    
    //PERSONAL
    const personal = (code) =>{
    return code == "1.6"}
        //NIVEL 2
    const personalLegajos = (code) =>{
    return code == "1.6.1"}
    const personalReportes = (code) =>{
    return code == "1.6.2"}
    const personalImportacionSueldos = (code) =>{
    return code == "1.6.3"}
    const personalGeneracionTXTAcreditacionHaberes = (code) =>{
    return code == "1.6.4"}
    //CONFIGURACION DATOS
    const configuracionDatos = (code) =>{
    return code == "1.7"}
        //NIVEL 2
    const configuracionDatosVendedores = (code) =>{
    return code == "1.7.1"}
    const configuracionDatosSupervisores = (code) =>{
    return code == "1.7.2"}
    const configuracionDatosSucursales = (code) =>{
    return code == "1.7.3"}
    const configuracionDatosCambioDeModelo = (code) =>{
    return code == "1.7.4"}
    const configuracionDatosCambioDeContrasenaDeSueldos = (code) =>{
    return code == "1.7.5"}
    const configuracionDatosModelos = (code) =>{
    return code == "1.7.6"}
    const configuracionDatosListaDePrecios = (code) =>{
    return code == "1.7.7"}
    const configuracionDatosOficiales = (code) =>{
    return code == "1.7.8"}
    const configuracionDatosPuntosDeVenta = (code) =>{
    return code == "1.7.9"}
    const configuracionDatosCambioDeContrasena = (code) =>{
    return code == "1.7.10"}
    const configuracionDatosObjetivosXMarca = (code) =>{
    return code == "1.7.11"}
    const configuracionDatosObjetivosMora = (code) =>{
    return code == "1.7.12"}
    const configuracionDatosObjetivosXGrupoMora = (code) =>{
    return code == "1.7.13"}
    const configuracionDatosObjetivosAltasBajasMesaDePlanes = (code) =>{
    return code == "1.7.14"}
    const configuracionDatosParametros = (code) =>{
    return code == "1.7.15"}
    const configuracionDatosUsuarios = (code) =>{
    return code == "1.7.16"}
    const configuracionDatosABMIntereses = (code) =>{
    return code == "1.7.17"}
    const configuracionDatosGerentes = (code) =>{
    return code == "1.7.18"}
    const configuracionDatosTeamLeader = (code) =>{
    return code == "1.7.19"}
    const configuracionDatosEstructuraComercial = (code) =>{
    return code == "1.7.20"}
    const configuracionDatosEntregaAsegurada = (code) =>{
    return code == "1.7.21"}
    //CONTABILIDAD 1
    const contabilidad1 = (code) =>{
    return code == "1.8"}
        //NIVEL 2
    const contabilidad1Tesoreria = (code) =>{
    return code == "1.8.1"}
    const contabilidad1Ventas = (code) =>{
    return code == "1.8.2"}
    const contabilidad1Bancos = (code) =>{
    return code == "1.8.3"}
    const contabilidad1ContabilidadGeneral = (code) =>{
    return code == "1.8.4"}
    const contabilidad1Compras = (code) =>{
    return code == "1.8.5"}
    const contabilidad1CentroDeCostos = (code) =>{
    return code == "1.8.6"}
    const contabilidad1Proveedores = (code) =>{
    return code == "1.8.7"}
    const contabilidad1Presupuestos = (code) =>{
    return code == "1.8.8"}
    const contabilidad1PatentamientosPlanDeAhorro = (code) =>{
    return code == "1.8.9"}
    //CONTABILIDAD 2
    const contabilidad2 = (code) =>{
    return code == "1.9"}
        //NIVEL 2
    const contabilidad2ContabilidadGeneral = (code) =>{
    return code == "1.9.1"}
    //REPORTES
    const reportes = (code) =>{
    return code == "1.10"}
        //NIVEL 2
    const reportesEjecutaInterempresa = (code) =>{
    return code == "1.10.0"}
    const reportesAdministracionDePlanes = (code) =>{
    return code == "1.10.1"}
    const reportesVentas = (code) =>{
    return code == "1.10.2"}
    const reportesMora = (code) =>{
    return code == "1.10.3"}
    const reportesFacturacion = (code) =>{
    return code == "1.10.4"}
    const reportesCallCenter = (code) =>{
    return code == "1.10.5"}
    const reportesMesaDePlanes = (code) =>{
    return code == "1.10.6"}
    const reportesScoring = (code) =>{
    return code == "1.10.7"}
    const reportesMicroEmprendedores = (code) =>{
    return code == "1.10.8"}
    //PLAN SUBITE
    const planSubite = (code) =>{
    return code == "1.11"}
        //NIVEL 2
    const planSubiteOficiales = (code) =>{
    return code == "1.11.1"}
    const planSubiteEstadoDeLaGestion = (code) =>{
    return code == "1.11.2"}
    const planSubiteGestionDeDatos = (code) =>{
    return code == "1.11.3"}
    const planSubiteAsignacionDeDatos = (code) =>{
    return code == "1.11.4"}
    const planSubiteImportacionDeDatos = (code) =>{
    return code == "1.11.5"}
    const planSubiteSupervisorSubite = (code) =>{
    return code == "1.11.6"}
    const planSubiteSupervisorSubiteInterempresa = (code) =>{
    return code == "1.11.7"}
    const planSubiteAsignacionDatosASupervisor = (code) =>{
    return code == "1.11.8"}
    const planSubiteImportacionDeHN = (code) =>{
    return code == "1.11.9"}
    const planSubiteReporteDeCompras = (code) =>{
    return code == "1.11.10"}
    const planSubiteReporteDeAsignacionesPorPeriodo = (code) =>{
    return code == "1.11.11"}
    //ENTREGA CONVENCIONALES
    const entregasConvencionales = (code) =>{
    return code == "1.12"}
        //NIVEL 2
    const entregasConvencionalesAltaYModificacionDeConvencionales = (code) =>{
    return code == "1.12.1"}
    const entregasConvencionalesSeguimientoService = (code) =>{
    return code == "1.12.2"}
    const entregasConvencionalesTurnos = (code) =>{
    return code == "1.12.3"}
    //MINI EMPRENDEDORES
    const miniEmprendedores = (code) =>{
    return code == "1.13"}
        //NIVEL 2
    const miniEmprendedoresCirculares = (code) =>{
    return code == "1.13.1"}
    //COMPRA RESCINDIDOS
    const compraRescindidos = (code) =>{
    return code == "1.14"}
        //NIVEL 2
    const compraRescindidosOficiales = (code) =>{
    return code == "1.14.1"}
    const compraRescindidosEstadoDeLaGestion = (code) =>{
    return code == "1.14.2"}
    const compraRescindidosGestionDeDatos = (code) =>{
    return code == "1.14.3"}
    const compraRescindidosAsignacionDeDatos = (code) =>{
    return code == "1.14.4"}
    const compraRescindidosImportacionDeDatos = (code) =>{
    return code == "1.14.5"}
    const compraRescindidosSupervisor = (code) =>{
    return code == "1.14.6"}
    const compraRescindidosSupervisorInterempresa = (code) =>{
    return code == "1.14.7"}   
    //USADOS
    const usados = (code) =>{
    return code == "1.15"}
        //NIVEL 2
    const usadosCotizaciones = (code) =>{
    return code == "1.15.1"}
    const usadosRecepcionDeUnidadesPlanDeAhorro = (code) =>{
    return code == "1.15.2"}
    const usadosRecepcionDeUnidadesConvencional = (code) =>{
    return code == "1.15.3"}
    const usadosStock = (code) =>{
    return code == "1.15.4"}
    const usadosEgresoDeUnidades = (code) =>{
    return code == "1.15.5"}
    const usadosEnvioDeMails = (code) =>{
    return code == "1.15.6"}
    const usadosCotizacionGerencia = (code) =>{
    return code == "1.15.7"}
    const usadosListadoDeVentas = (code) =>{
    return code == "1.15.8"}
    const usadosListadoDeVentasInterempresa = (code) =>{
    return code == "1.15.9"}
    const usadosVentasInterempresa = (code) =>{
    return code == "1.15.10"}
    const usadosResumenUsadosInterempresa = (code) =>{
    return code == "1.15.11"}
    const usadosCargarPVS = (code) =>{
    return code == "1.15.12"}
    const usadosModificarTasaPorTenencia = (code) =>{
    return code == "1.15.13"}
    const usadosImagenes = (code) =>{
    return code == "1.15.14"}
    const usadosVendedoresABM = (code) =>{
    return code == "1.15.15"}
    const usadosCapitalVehiculosUsados = (code) =>{
    return code == "1.15.16"}
    const usadosControlPrecioToma = (code) =>{
    return code == "1.15.17"}
    const usadosAnalisisIngresoEgreso = (code) =>{
    return code == "1.15.18"}
    //PILOT
    const pilot = (code) =>{
    return code == "1.16"}
        //NIVEL 2
    const pilotDatosIngresadosPorFecha = (code) =>{
    return code == "1.16.1"}
    //STOCK VEHICULOS PLAN AHORRO
    const stockVehiculosPlanAhorro = (code) =>{
    return code == "1.17"}
        //NIVEL 2
    const stockVehiculosPlanAhorroVer = (code) =>{
    return code == "1.17.1"}
    const stockVehiculosPlanAhorroExcel = (code) =>{
    return code == "1.17.2"}
    const stockVehiculosPlanAhorroImprimir = (code) =>{
    return code == "1.17.3"}
    //SEGUROS
    const seguros = (code) =>{
    return code == "1.18"}
        //NIVEL 2
    const segurosAlta = (code) =>{
    return code == "1.18.0"}
    const segurosModificar = (code) =>{
    return code == "1.18.1"}
    const segurosAsignarOficial = (code) =>{
    return code == "1.18.2"}
    const segurosExcel = (code) =>{
    return code == "1.18.3"}

//-----------------------------------FUNCION FILTER DE ROLES-----------------------------------------
    const roleMaster = role.filter( master)  
    //OPERACIONES
    const roleOperaciones = role.filter( operaciones)
        //NIVEL 2
    const roleOperacionesAltaPreSol = role.filter( operacionesAltaPreSolRole) 
    const roleOperacionesActualizacionPreSol = role.filter( operacionesActualizacionPreSolRole,)
            //NIVEL 3
    const nuevoPago = role.filter( operacionesActualizacionPreSolRoleNuevoPago)
    const roleOperacionesActualizacionPreSolNuevoPago = nuevoPago.toString().split(".", 3).join(".")
    const modificarPago = role.filter( operacionesActualizacionPreSolRoleModificarPago)
    const roleOperacionesActualizacionPreSolModificarPago = modificarPago.toString().split(".", 3).join(".")
    const eliminarPago = role.filter( operacionesActualizacionPreSolRoleEliminarPago)
    const roleOperacionesActualizacionPreSolEliminarPago = eliminarPago.toString().split(".", 3).join(".")
    const grabar = role.filter( operacionesActualizacionPreSolRoleGrabar)
    const roleOperacionesActualizacionPreSolGrabar = grabar.toString().split(".", 3).join(".")
    const observaciones = role.filter( operacionesActualizacionPreSolRoleObservaciones)
    const roleOperacionesActualizacionPreSolObservaciones = observaciones.toString().split(".", 3).join(".")
    const conformarOperacion = role.filter( operacionesActualizacionPreSolRoleConformarOperacion)
    const roleOperacionesActualizacionPreSolConformarOperacion = conformarOperacion.toString().split(".", 3).join(".")
    const scoring = role.filter( operacionesActualizacionPreSolRoleScoring)
    const roleOperacionesActualizacionPreSolScoring = scoring.toString().split(".", 3).join(".")
    const esOpScoring = role.filter( operacionesActualizacionPreSolRoleEsOpScoring)
    const roleOperacionesActualizacionPreSolEsOpScoring = esOpScoring.toString().split(".", 3).join(".")
    const esSupervisorComercial = role.filter( operacionesActualizacionPreSolRoleEsSupervisorComercial)
    const roleOperacionesActualizacionPreSolEsSupervisorComercial = esSupervisorComercial.toString().split(".", 3).join(".")
    const esSupervisorScoring = role.filter( operacionesActualizacionPreSolRoleEsSupervisorScoring)
    const roleOperacionesActualizacionPreSolEsSupervisorScoring = esSupervisorScoring.toString().split(".", 3).join(".")
    const puedeRechazarDefinitivo = role.filter( operacionesActualizacionPreSolRolePuedeRechazarDefinitivo)
    const roleOperacionesActualizacionPreSolPuedeRechazarDefinitivo = puedeRechazarDefinitivo.toString().split(".", 3).join(".")
    const MITCXVCT = role.filter( operacionesActualizacionPreSolRoleMITCXVCT)
    const roleOperacionesActualizacionPreSolMITCXVCT = MITCXVCT.toString().split(".", 3).join(".")
    const agregarBonificacion = role.filter( operacionesActualizacionPreSolRoleAgregarBonificacion)
    const roleOperacionesActualizacionPreSolAgregarBonificacion = agregarBonificacion.toString().split(".", 3).join(".")
    const anulacionPreSolicitudes = role.filter( operacionesActualizacionPreSolRoleAnulacionPreSolicitudes)
    const roleOperacionesActualizacionPreSolAnulacionPreSolicitudes = anulacionPreSolicitudes.toString().split(".", 3).join(".")
    const modificarNroTransferencia = role.filter( operacionesActualizacionPreSolRoleModificarNroTransferencia)
    const roleOperacionesActualizacionPreSolModificarNroTransferencia = modificarNroTransferencia.toString().split(".", 3).join(".")
    const cruceScoring = role.filter( operacionesActualizacionPreSolRoleCruceScoring)
    const roleOperacionesActualizacionPreSolCruceScoring = cruceScoring.toString().split(".", 3).join(".")
    const verFechaUsuarioAlta = role.filter( operacionesActualizacionPreSolRoleVerFechaUsuarioAlta)
    const roleOperacionesActualizacionPreSolVerFechaUsuarioAlta = verFechaUsuarioAlta.toString().split(".", 3).join(".")
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
    //MESA DE PLANES
    const roleMesaDePlanes = role.filter(mesaDePlanes);
        //NIVEL 2
    const roleMesaDePlanesAdministracionAhorristasAdjudicados = role.filter(mesaDePlanesAdministracionAhorristasAdjudicados)
    const roleMesaDePlanesScoring = role.filter(mesaDePlanesScoring);
    const roleMesaDePlanesHaberesNetos = role.filter(mesaDePlanesHaberesNetos);
    const roleMesaDePlanesGestionDeSenasAcumuladas = role.filter(mesaDePlanesGestionDeSenasAcumuladas);
    const roleMesaDePlanesAutorizadorClasificaciones = role.filter(mesaDePlanesAutorizadorClasificaciones);
    const roleMesaDePlanesStockContable = role.filter(mesaDePlanesStockContable);
    const roleMesaDePlanesStockParaVentas = role.filter(mesaDePlanesStockParaVentas)
    //MORA
    const roleMora = role.filter(mora);
        //NIVEL 2
    const roleMoraCuotasEncuadre = role.filter(moraCuotasEncuadre);
    const roleMoraRecuperoCuotasEncuadre = role.filter(moraRecuperoCuotasEncuadre)
    const roleMoraReportePagosYRecuperosEncuadre = role.filter(moraReportePagosYRecuperosEncuadre)
    const roleMoraCuadroPerformance = role.filter(moraCuadroPerformance);
    const roleMoraAsignacionDeMora = role.filter(moraAsignacionDeMora);
    const roleMoraMoraTecnica = role.filter(moraMoraTecnica);
    const roleMoraGestionMoraTemprana = role.filter(moraGestionMoraTemprana);
    const roleMoraGestionMoraEspecializada = role.filter(moraGestionMoraEspecializada);
    const roleMoraColaDeLlamadosMoraTemprana = role.filter(moraColaDeLlamadosMoraTemprana);
    const roleMoraColaDeLlamadosMoraEspecializada = role.filter(moraColaDeLlamadosMoraEspecializada);
    const roleMoraSupervisorMora = role.filter(moraSupervisorMora)
    const roleMoraVerTodaLaMora = role.filter(moraVerTodaLaMora);
    //CALL CENTER
    const roleCallCenter = role.filter(callCenter);
        //NIVEL 2
    const roleCallCenterDefinicionCampanaMails = role.filter(callCenterDefinicionCampanaMails);
    const roleCallCenterDefinicionCampanaSMS = role.filter(callCenterDefinicionCampanaSMS);
    const roleCallCenterGeneracionBasesNeotel = role.filter(callCenterGeneracionBasesNeotel);
    const roleCallCenterEnvioYRecepcionDeMails = role.filter(callCenterEnvioYRecepcionDeMails);
    const roleCallCenterEnvioYRecepcionDeSMS = role.filter(callCenterEnvioYRecepcionDeSMS);
    const roleCallCenterDefinicionFechaVtoAgendadoCampana = role.filter(callCenterDefinicionFechaVtoAgendadoCampana);
    const roleCallCenterAdministracionMailsEnviadosYRecibidos = role.filter(callCenterAdministracionMailsEnviadosYRecibidos);
    const roleCallCenterAdministracionSMSEnviadosYRecibidos = role.filter(callCenterAdministracionSMSEnviadosYRecibidos);
    //PERSONAL
    const rolePersonal = role.filter(personal);
        //NIVEL 2
    const rolePersonalLegajos = role.filter(personalLegajos)
    const rolePersonalReportes = role.filter(personalReportes);
    const rolePersonalImportacionSueldos = role.filter(personalImportacionSueldos);
    const rolePersonalGeneracionTXTAcreditacionHaberes = role.filter(personalGeneracionTXTAcreditacionHaberes);
    //CONFIGURACION DATOS
    const roleConfiguracionDatos = role.filter(configuracionDatos)
        //NIVEL 2
    const roleConfiguracionDatosVendedores = role.filter(configuracionDatosVendedores);
    const roleConfiguracionDatosSupervisores = role.filter(configuracionDatosSupervisores);
    const roleConfiguracionDatosSucursales = role.filter(configuracionDatosSucursales);
    const roleConfiguracionDatosCambioDeModelo = role.filter(configuracionDatosCambioDeModelo);
    const roleConfiguracionDatosCambioDeContrasenaDeSueldos = role.filter(configuracionDatosCambioDeContrasenaDeSueldos);
    const roleConfiguracionDatosModelos = role.filter(configuracionDatosModelos);
    const roleConfiguracionDatosListaDePrecios = role.filter(configuracionDatosListaDePrecios)
    const roleConfiguracionDatosOficiales = role.filter(configuracionDatosOficiales);
    const roleConfiguracionDatosPuntosDeVenta = role.filter(configuracionDatosPuntosDeVenta);
    const roleConfiguracionDatosCambioDeContrasena = role.filter(configuracionDatosCambioDeContrasena);
    const roleConfiguracionDatosObjetivosXMarca = role.filter(configuracionDatosObjetivosXMarca);
    const roleConfiguracionDatosObjetivosMora = role.filter(configuracionDatosObjetivosMora);
    const roleConfiguracionDatosObjetivosXGrupoMora = role.filter(configuracionDatosObjetivosXGrupoMora);
    const roleConfiguracionDatosObjetivosAltasBajasMesaDePlanes = role.filter(configuracionDatosObjetivosAltasBajasMesaDePlanes);
    const roleConfiguracionDatosParametros = role.filter(configuracionDatosParametros);
    const roleConfiguracionDatosUsuarios = role.filter(configuracionDatosUsuarios);
    const roleConfiguracionDatosABMIntereses = role.filter(configuracionDatosABMIntereses);
    const roleConfiguracionDatosGerentes = role.filter(configuracionDatosGerentes);
    const roleConfiguracionDatosTeamLeader = role.filter(configuracionDatosTeamLeader);
    const roleConfiguracionDatosEstructuraComercial = role.filter(configuracionDatosEstructuraComercial);
    const roleConfiguracionDatosEntregaAsegurada = role.filter(configuracionDatosEntregaAsegurada);
    //CONTABILIDAD 1
    const roleContabilidad1 = role.filter(contabilidad1);
        //NIVEL 2
    const roleContabilidad1Tesoreria = role.filter(contabilidad1Tesoreria);
    const roleContabilidad1Ventas = role.filter(contabilidad1Ventas);
    const roleContabilidad1Bancos = role.filter(contabilidad1Bancos);
    const roleContabilidad1ContabilidadGeneral = role.filter(contabilidad1ContabilidadGeneral);
    const roleContabilidad1Compras = role.filter(contabilidad1Compras);
    const roleContabilidad1CentroDeCostos = role.filter(contabilidad1CentroDeCostos);
    const roleContabilidad1Proveedores = role.filter(contabilidad1Proveedores);
    const roleContabilidad1Presupuestos = role.filter(contabilidad1Presupuestos);
    const roleContabilidad1PatentamientosPlanDeAhorro = role.filter(contabilidad1PatentamientosPlanDeAhorro);
    //CONTABILIDAD 2
    const roleContabilidad2 = role.filter(contabilidad2);
        //NIVEL 2
    const roleContabilidad2ContabilidadGeneral = role.filter(contabilidad2ContabilidadGeneral);
    //REPORTES
    const roleReportes = role.filter(reportes);
        //NIVEL 2
    const roleReportesEjecutaInterempresa = role.filter(reportesEjecutaInterempresa)    
    const roleReportesAdministracionDePlanes = role.filter(reportesAdministracionDePlanes);
    const roleReportesVentas = role.filter(reportesVentas);
    const roleReportesMora = role.filter(reportesMora);
    const roleReportesFacturacion = role.filter(reportesFacturacion);
    const roleReportesCallCenter = role.filter(reportesCallCenter);
    const roleReportesMesaDePlanes = role.filter(reportesMesaDePlanes);
    const roleReportesScoring = role.filter(reportesScoring);
    const roleReportesMicroEmprendedores = role.filter(reportesMicroEmprendedores);
    //PLAN SUBITE
    const rolePlanSubite = role.filter(planSubite);
        //NIVEL 2
    const rolePlanSubiteOficiales = role.filter(planSubiteOficiales);
    const rolePlanSubiteEstadoDeLaGestion = role.filter(planSubiteEstadoDeLaGestion);
    const rolePlanSubiteGestionDeDatos = role.filter(planSubiteGestionDeDatos);
    const rolePlanSubiteAsignacionDeDatos = role.filter(planSubiteAsignacionDeDatos);
    const rolePlanSubiteImportacionDeDatos = role.filter(planSubiteImportacionDeDatos);
    const rolePlanSubiteSupervisorSubite = role.filter(planSubiteSupervisorSubite);
    const rolePlanSubiteSupervisorSubiteInterempresa = role.filter(planSubiteSupervisorSubiteInterempresa);
    const rolePlanSubiteAsignacionDatosASupervisor = role.filter(planSubiteAsignacionDatosASupervisor);
    const rolePlanSubiteImportacionDeHN = role.filter(planSubiteImportacionDeHN);
    const rolePlanSubiteReporteDeCompras = role.filter(planSubiteReporteDeCompras);
    const rolePlanSubiteReporteDeAsignacionesPorPeriodo = role.filter(planSubiteReporteDeAsignacionesPorPeriodo);
    //ENTREGA CONVENCIONALES
    const roleEntregasConvencionales = role.filter(entregasConvencionales);
        //NIVEL 2
    const roleEntregasConvencionalesAltaYModificacionDeConvencionales = role.filter(entregasConvencionalesAltaYModificacionDeConvencionales);
    const roleEntregasConvencionalesSeguimientoService = role.filter(entregasConvencionalesSeguimientoService);
    const roleEntregasConvencionalesTurnos = role.filter(entregasConvencionalesTurnos);
    //MINI EMPRENDEDORES
    const roleMiniEmprendedores = role.filter(miniEmprendedores);
        //NIVEL 2
    const roleMiniEmprendedoresCirculares = role.filter(miniEmprendedoresCirculares)
    //COMPRA RESCINDIDOS
    const roleCompraRescindidos = role.filter(compraRescindidos);
        //NIVEL 2
    const roleCompraRescindidosOficiales = role.filter(compraRescindidosOficiales);
    const roleCompraRescindidosEstadoDeLaGestion = role.filter(compraRescindidosEstadoDeLaGestion);
    const roleCompraRescindidosGestionDeDatos = role.filter(compraRescindidosGestionDeDatos);
    const roleCompraRescindidosAsignacionDeDatos = role.filter(compraRescindidosAsignacionDeDatos);
    const roleCompraRescindidosImportacionDeDatos = role.filter(compraRescindidosImportacionDeDatos);
    const roleCompraRescindidosSupervisor = role.filter(compraRescindidosSupervisor);
    const roleCompraRescindidosSupervisorInterempresa = role.filter(compraRescindidosSupervisorInterempresa);
    //USADOS
    const roleUsados = role.filter(usados);
        //NIVEL 2
    const roleUsadosCotizaciones = role.filter(usadosCotizaciones);
    const roleUsadosRecepcionDeUnidadesPlanDeAhorro = role.filter(usadosRecepcionDeUnidadesPlanDeAhorro);
    const roleUsadosRecepcionDeUnidadesConvencional = role.filter(usadosRecepcionDeUnidadesConvencional);
    const roleUsadosStock = role.filter(usadosStock);
    const roleUsadosEgresoDeUnidades = role.filter(usadosEgresoDeUnidades);
    const roleUsadosEnvioDeMails = role.filter(usadosEnvioDeMails);
    const roleUsadosCotizacionGerencia = role.filter(usadosCotizacionGerencia);
    const roleUsadosListadoDeVentas = role.filter(usadosListadoDeVentas);
    const roleUsadosListadoDeVentasInterempresa = role.filter(usadosListadoDeVentasInterempresa);
    const roleUsadosVentasInterempresa = role.filter(usadosVentasInterempresa);
    const roleUsadosResumenUsadosInterempresa = role.filter(usadosResumenUsadosInterempresa);
    const roleUsadosCargarPVS = role.filter(usadosCargarPVS);
    const roleUsadosModificarTasaPorTenencia = role.filter(usadosModificarTasaPorTenencia);
    const roleUsadosImagenes = role.filter(usadosImagenes);
    const roleUsadosVendedoresABM = role.filter(usadosVendedoresABM);
    const roleUsadosControlPrecioToma = role.filter(usadosControlPrecioToma);
    const roleUsadosCapitalVehiculosUsados = role.filter(usadosCapitalVehiculosUsados)
    const roleUsadosAnalisisIngresoEgreso = role.filter(usadosAnalisisIngresoEgreso);
    //PILOT
    const rolePilot = role.filter(pilot);
        //NIVEL 2
    const rolePilotDatosIngresadosPorFecha = role.filter(pilotDatosIngresadosPorFecha);
    //STOCK VEHICULOS PLAN AHORRO
    const roleStockVehiculosPlanAhorro = role.filter(stockVehiculosPlanAhorro);
        //NIVEL 2
    const roleStockVehiculosPlanAhorroVer = role.filter(stockVehiculosPlanAhorroVer);
    const roleStockVehiculosPlanAhorroExcel = role.filter(stockVehiculosPlanAhorroExcel);
    const roleStockVehiculosPlanAhorroImprimir = role.filter(stockVehiculosPlanAhorroImprimir);
    //SEGUROS
    const roleSeguros = role.filter(seguros);
        //NIVEL 2
    const roleSegurosAlta = role.filter(segurosAlta);
    const roleSegurosModificar = role.filter(segurosModificar);
    const roleSegurosAsignarOficial = role.filter(segurosAsignarOficial);
    const roleSegurosExcel = role.filter(segurosExcel);


    /*console.log(roleMaster,
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
                roleOperacionesAgrupamientos)*/
console.log(roleOperacionesActualizacionPreSolNuevoPago)
//----------------------------------------FLAGS DE ROLES-----------------------------------------------
    //OPERACIONES
    var roleOperacionesFlag = false;
    var roleOperacionesAltaPreSolFlag = false;
    var roleOperacionesActualizacionPreSolFlag = false;
    var roleOperacionesActualizacionOperacionesFlag = false;
    var roleOperacionesAltaCarteraFlag = false;
    var roleOperacionesAAPEFlag = false;
    var roleOperacionesConciliacionTarjetasFlag = false;    
    var roleOperacionesReportePersonalizadoFlag = false;
    var roleOperacionesExcelDatosFlag = false;
    var roleOperacionesBuscarOpFlag = false;
    var roleOperacionesControlSolicitudesFlag = false;
    var roleOperacionesControlRecibosFlag = false;
    var roleOperacionesControlTransferenciasFlag = false;
    var roleOperacionesImpresionRecibosFlag = false;
    var roleOperacionesReclamosFlag = false;
    var roleOperacionesLlamadosPorOperacionFlag = false;
    var roleOperacionesReintegrosFlag = false;
    var roleOperacionesRepMicroEmprendedoresFlag = false;
    var roleOperacionesReportesFlag = false;
    //MESA DE PLANES
    var roleMesaDePlanesFlag = false;
    var roleMesaDePlanesAdministracionAhorristasAdjudicadosFlag = false;
    var roleMesaDePlanesScoringFlag = false;
    var roleMesaDePlanesStockParaVentasFlag = false;
    var roleMesaDePlanesAutorizadorClasificacionesFlag = false;
    var roleMesaDePlanesStockContableFlag = false;
    var roleMesaDePlanesGestionDeSenasAcumuladasFlag = false;
    var roleMesaDePlanesHaberesNetosFlag = false;
    //MORA
    var roleMoraFlag = false;
        //NIVEL 2
    var roleMoraCuotasEncuadreFlag = false;
    var roleMoraRecuperoCuotasEncuadreFlag = false;
    var roleMoraReportePagosYRecuperosEncuadreFlag = false;
    var roleMoraCuadroPerformanceFlag = false;
    var roleMoraAsignacionDeMoraFlag = false;
    var roleMoraMoraTecnicaFlag = false;
    var roleMoraGestionMoraTempranaFlag = false;
    var roleMoraGestionMoraEspecializadaFlag = false;
    var roleMoraColaDeLlamadosMoraTempranaFlag = false;
    var roleMoraColaDeLlamadosMoraEspecializadaFlag = false;
    var roleMoraSupervisorMoraFlag = false;
    var roleMoraVerTodaLaMoraFlag = false;
    //CALL CENTER
    var roleCallCenterFlag = false;
        //NIVEL 2
    var roleCallCenterDefinicionCampanaMailsFlag = false;
    var roleCallCenterDefinicionCampanaSMSFlag = false;
    var roleCallCenterGeneracionBasesNeotelFlag = false;
    var roleCallCenterEnvioYRecepcionDeMailsFlag = false;
    var roleCallCenterEnvioYRecepcionDeSMSFlag = false;
    var roleCallCenterDefinicionFechaVtoAgendadoCampanaFlag = false;
    var roleCallCenterAdministracionMailsEnviadosYRecibidosFlag = false;
    var roleCallCenterAdministracionSMSEnviadosYRecibidosFlag = false;
    //PERSONAL
    var rolePersonalFlag = false;
        //NIVEL 2
    var rolePersonalLegajosFlag = false;
    var rolePersonalReportesFlag = false;
    var rolePersonalImportacionSueldosFlag = false;
    var rolePersonalGeneracionTXTAcreditacionHaberesFlag = false;
    //CONFIGURACION DATOS
    var roleConfiguracionDatosFlag = false;
        //NIVEL 2
    var roleConfiguracionDatosVendedoresFlag = false; 
    var roleConfiguracionDatosSupervisoresFlag = false;
    var roleConfiguracionDatosSucursalesFlag = false;
    var roleConfiguracionDatosCambioDeModeloFlag = false;
    var roleConfiguracionDatosCambioDeContrasenaDeSueldosFlag = false; 
    var roleConfiguracionDatosModelosFlag = false;
    var roleConfiguracionDatosListaDePreciosFlag = false;
    var roleConfiguracionDatosOficialesFlag = false;
    var roleConfiguracionDatosPuntosDeVentaFlag = false;
    var roleConfiguracionDatosCambioDeContrasenaFlag = false;
    var roleConfiguracionDatosObjetivosXMarcaFlag = false;
    var roleConfiguracionDatosObjetivosMoraFlag = false;
    var roleConfiguracionDatosObjetivosXGrupoMoraFlag = false;
    var roleConfiguracionDatosObjetivosAltasBajasMesaDePlanesFlag = false;
    var roleConfiguracionDatosParametrosFlag = false;
    var roleConfiguracionDatosUsuariosFlag = false;
    var roleConfiguracionDatosABMInteresesFlag = false;
    var roleConfiguracionDatosGerentesFlag = false;
    var roleConfiguracionDatosTeamLeaderFlag = false;
    var roleConfiguracionDatosEstructuraComercialFlag = false;
    var roleConfiguracionDatosEntregaAseguradaFlag = false;
    //CONTABILIDAD 1
    var roleContabilidad1Flag = false;
    //NIVEL 2
    var roleContabilidad1TesoreriaFlag = false;
    var roleContabilidad1VentasFlag = false;
    var roleContabilidad1BancosFlag = false; 
    var roleContabilidad1ContabilidadGeneralFlag = false; 
    var roleContabilidad1ComprasFlag = false; 
    var roleContabilidad1CentroDeCostosFlag = false; 
    var roleContabilidad1ProveedoresFlag = false; 
    var roleContabilidad1PresupuestosFlag = false; 
    var roleContabilidad1PatentamientosPlanDeAhorroFlag = false; 
    //CONTABILIDAD 2
    var roleContabilidad2Flag = false; 
        //NIVEL 2
    var roleContabilidad2ContabilidadGeneralFlag = false;
    //REPORTES
    var roleReportesFlag = false; 
        //NIVEL 2
    var roleReportesEjecutaInterempresaFlag = false;
    var roleReportesAdministracionDePlanesFlag = false;
    var roleReportesVentasFlag = false; 
    var roleReportesMoraFlag = false;
    var roleReportesFacturacionFlag = false; 
    var roleReportesCallCenterFlag = false; 
    var roleReportesMesaDePlanesFlag = false; 
    var roleReportesScoringFlag = false; 
    var roleReportesMicroEmprendedoresFlag = false; 
    //PLAN SUBITE
    var rolePlanSubiteFlag = false; 
        //NIVEL 2
    var rolePlanSubiteOficialesFlag = false;
    var rolePlanSubiteEstadoDeLaGestionFlag = false; 
    var rolePlanSubiteGestionDeDatosFlag = false; 
    var rolePlanSubiteAsignacionDeDatosFlag = false; 
    var rolePlanSubiteImportacionDeDatosFlag = false; 
    var rolePlanSubiteSupervisorSubiteFlag = false; 
    var rolePlanSubiteSupervisorSubiteInterempresaFlag = false; 
    var rolePlanSubiteAsignacionDatosASupervisorFlag = false; 
    var rolePlanSubiteImportacionDeHNFlag = false; 
    var rolePlanSubiteReporteDeComprasFlag = false; 
    var rolePlanSubiteReporteDeAsignacionesPorPeriodoFlag = false;
    //ENTREGA CONVENCIONALES
    var roleEntregasConvencionalesFlag = false; 
        //NIVEL 2
    var roleEntregasConvencionalesAltaYModificacionDeConvencionalesFlag = false; 
    var roleEntregasConvencionalesSeguimientoServiceFlag = false; 
    var roleEntregasConvencionalesTurnosFlag = false; 
    //MINI EMPRENDEDORES
    var roleMiniEmprendedoresFlag = false;
        //NIVEL 2
    var roleMiniEmprendedoresCircularesFlag = false; 
    //COMPRA RESCINDIDOS
    var roleCompraRescindidosFlag = false; 
        //NIVEL 2
    var roleCompraRescindidosOficialesFlag = false;
    var roleCompraRescindidosEstadoDeLaGestionFlag = false; 
    var roleCompraRescindidosGestionDeDatosFlag = false;
    var roleCompraRescindidosAsignacionDeDatosFlag = false; 
    var roleCompraRescindidosImportacionDeDatosFlag = false; 
    var roleCompraRescindidosSupervisorFlag = false; 
    var roleCompraRescindidosSupervisorInterempresaFlag = false; 
    //USADOS
    var roleUsadosFlag = false;
        //NIVEL 2
    var roleUsadosCotizacionesFlag = false; 
    var roleUsadosRecepcionDeUnidadesPlanDeAhorroFlag = false; 
    var roleUsadosRecepcionDeUnidadesConvencionalFlag = false; 
    var roleUsadosStockFlag = false; 
    var roleUsadosEgresoDeUnidadesFlag = false;
    var roleUsadosEnvioDeMailsFlag = false; 
    var roleUsadosCotizacionGerenciaFlag = false;
    var roleUsadosListadoDeVentasFlag = false;
    var roleUsadosListadoDeVentasInterempresaFlag = false; 
    var roleUsadosVentasInterempresaFlag = false; 
    var roleUsadosResumenUsadosInterempresaFlag = false; 
    var roleUsadosCargarPVSFlag = false; 
    var roleUsadosModificarTasaPorTenenciaFlag = false;
    var roleUsadosImagenesFlag = false; 
    var roleUsadosVendedoresABMFlag = false;
    var roleUsadosCapitalVehiculosUsadosFlag = false; 
    var roleUsadosControlPrecioTomaFlag = false; 
    var roleUsadosAnalisisIngresoEgresoFlag = false; 
    //PILOT
    var rolePilotFlag = false; 
        //NIVEL 2
    var rolePilotDatosIngresadosPorFechaFlag = false; 
    //STOCK VEHICULOS PLAN AHORRO
    var roleStockVehiculosPlanAhorroFlag = false; 
        //NIVEL 2
    var roleStockVehiculosPlanAhorroVerFlag = false;
    var roleStockVehiculosPlanAhorroExcelFlag = false; 
    var roleStockVehiculosPlanAhorroImprimirFlag = false;
    //SEGUROS
    var roleSegurosFlag = false; 
        //NIVEL 2
    var roleSegurosAltaFlag = false; 
    var roleSegurosModificarFlag = false; 
    var roleSegurosAsignarOficialFlag = false; 
    var roleSegurosExcelFlag = false; 

//CONDICIONALES FLAGS
    //OPERACIONES
    if(roleMaster == "1" || roleOperaciones == "1.2")
    {roleOperacionesFlag = true}
        //NIVEL 2
    if(roleMaster == "1"||roleOperacionesAltaPreSol == "1.2.1")
    {roleOperacionesAltaPreSolFlag = true}
    if(roleMaster == "1"||roleOperacionesActualizacionPreSol == "1.2.2"
    ||roleOperacionesActualizacionPreSolNuevoPago == "1.2.2"
    ||roleOperacionesActualizacionPreSolModificarPago == "1.2.2"
    ||roleOperacionesActualizacionPreSolEliminarPago == "1.2.2"
    ||roleOperacionesActualizacionPreSolGrabar == "1.2.2"
    ||roleOperacionesActualizacionPreSolObservaciones == "1.2.2"
    ||roleOperacionesActualizacionPreSolConformarOperacion == "1.2.2"
    ||roleOperacionesActualizacionPreSolScoring == "1.2.2"
    ||roleOperacionesActualizacionPreSolEsOpScoring == "1.2.2"
    ||roleOperacionesActualizacionPreSolEsSupervisorComercial == "1.2.2"
    ||roleOperacionesActualizacionPreSolEsSupervisorScoring == "1.2.2"
    ||roleOperacionesActualizacionPreSolPuedeRechazarDefinitivo == "1.2.2"
    ||roleOperacionesActualizacionPreSolMITCXVCT == "1.2.2"
    ||roleOperacionesActualizacionPreSolAgregarBonificacion == "1.2.2"
    ||roleOperacionesActualizacionPreSolAnulacionPreSolicitudes == "1.2.2"
    ||roleOperacionesActualizacionPreSolModificarNroTransferencia == "1.2.2"
    ||roleOperacionesActualizacionPreSolCruceScoring == "1.2.2"
    ||roleOperacionesActualizacionPreSolVerFechaUsuarioAlta == "1.2.2")
    {roleOperacionesActualizacionPreSolFlag = true}
    if(roleMaster == "1"||roleOperacionesActualizacionOperaciones == "1.2.3")
    {roleOperacionesActualizacionOperacionesFlag = true}
    if(roleMaster == "1"||roleOperacionesAltaCartera == "1.2.4")
    {roleOperacionesAltaCarteraFlag = true}
    if(roleMaster == "1"||roleOperacionesAAPE == "1.2.5")
    {roleOperacionesAAPEFlag = true}
    if(roleMaster == "1"||roleOperacionesConciliacionTarjetas == "1.2.7")
    {roleOperacionesConciliacionTarjetasFlag = true}
    if(roleMaster == "1"||roleOperacionesReportePersonalizado == "1.2.8")
    {roleOperacionesReportePersonalizadoFlag = true}
    if(roleMaster == "1"||roleOperacionesExcelDatos == "1.2.9")
    {roleOperacionesExcelDatosFlag = true}
    if(roleMaster == "1"||roleOperacionesBuscarOp == "1.2.10")
    {roleOperacionesBuscarOpFlag = true}
    if(roleMaster == "1"||roleOperacionesControlSolicitudes == "1.2.12")
    {roleOperacionesControlSolicitudesFlag = true}
    if(roleMaster == "1"||roleOperacionesControlRecibos == "1.2.13")
    {roleOperacionesControlRecibosFlag = true}
    if(roleMaster == "1"||roleOperacionesControlTransferencias == "1.2.14")
    {roleOperacionesControlTransferenciasFlag = true}
    if(roleMaster == "1"||roleOperacionesImpresionRecibos == "1.2.15")
    {roleOperacionesImpresionRecibosFlag = true}
    if(roleMaster == "1"||roleOperacionesReclamos == "1.2.16")
    {roleOperacionesReclamosFlag = true}
    if(roleMaster == "1"||roleOperacionesLlamadosPorOperacion == "1.2.18")
    {roleOperacionesLlamadosPorOperacionFlag = true}
    if(roleMaster == "1"||roleOperacionesReintegros == "1.2.19")
    {roleOperacionesReintegrosFlag = true}
    if(roleMaster == "1"||roleOperacionesRepMicroEmprendedores == "1.2.20")
    {roleOperacionesRepMicroEmprendedoresFlag = true}
    if(roleMaster == "1"||roleOperacionesReportes == "1.2.21")
    {roleOperacionesReportesFlag = true}
    //MESA DE PLANES
    if(roleMaster == "1" || roleMesaDePlanes == "1.3")
    {roleMesaDePlanesFlag = true}
        //NIVEL 2
    if(roleMaster == "1" || roleMesaDePlanesAdministracionAhorristasAdjudicados == "1.3.1")
    {roleMesaDePlanesAdministracionAhorristasAdjudicadosFlag = true}
    if(roleMaster == "1" || roleMesaDePlanesScoring == "1.3.2")
    {roleMesaDePlanesScoringFlag = true}
    if(roleMaster == "1" || roleMesaDePlanesHaberesNetos == "1.3.3")
    {roleMesaDePlanesHaberesNetosFlag = true}
    if(roleMaster == "1" || roleMesaDePlanesGestionDeSenasAcumuladas == "1.3.5")
    {roleMesaDePlanesGestionDeSenasAcumuladasFlag = true}
    if(roleMaster == "1" || roleMesaDePlanesAutorizadorClasificaciones == "1.3.6")
    {roleMesaDePlanesAutorizadorClasificacionesFlag = true}
    if(roleMaster == "1" || roleMesaDePlanesStockContable == "1.3.7")
    {roleMesaDePlanesStockContableFlag = true}
    if(roleMaster == "1" || roleMesaDePlanesStockParaVentas == "1.3.8")
    {roleMesaDePlanesStockParaVentasFlag = true}
    //MORA
    if(roleMaster == "1" || roleMora == "1.4")
    {roleMoraFlag = true}
        //NIVEL 2
    if(roleMaster == "1" || roleMoraCuotasEncuadre == "1.4.1")
    {roleMoraCuotasEncuadreFlag = true}
    if(roleMaster == "1" || roleMoraRecuperoCuotasEncuadre == "1.4.2")
    {roleMoraRecuperoCuotasEncuadreFlag = true}
    if(roleMaster == "1" || roleMoraReportePagosYRecuperosEncuadre == "1.4.3")
    {roleMoraReportePagosYRecuperosEncuadreFlag = true}
    if(roleMaster == "1" || roleMoraCuadroPerformance == "1.4.4")
    {roleMoraCuadroPerformanceFlag = true}
    if(roleMaster == "1" || roleMoraAsignacionDeMora == "1.4.5")
    {roleMoraAsignacionDeMoraFlag = true}
    if(roleMaster == "1" || roleMoraMoraTecnica == "1.4.6")
    {roleMoraMoraTecnicaFlag = true}
    if(roleMaster == "1" || roleMoraGestionMoraTemprana == "1.4.7")
    {roleMoraFlag = true}
    if(roleMaster == "1" || roleMoraGestionMoraEspecializada == "1.4.8")
    {roleMoraGestionMoraEspecializadaFlag = true}
    if(roleMaster == "1" || roleMoraColaDeLlamadosMoraTemprana == "1.4.9")
    {roleMoraColaDeLlamadosMoraTempranaFlag = true}
    if(roleMaster == "1" || roleMoraColaDeLlamadosMoraEspecializada == "1.4.10")
    {roleMoraColaDeLlamadosMoraEspecializadaFlag = true}
    if(roleMaster == "1" || roleMoraSupervisorMora == "1.4.11")
    {roleMoraSupervisorMoraFlag = true}
    if(roleMaster == "1" || roleMoraVerTodaLaMora == "1.4.12")
    {roleMoraVerTodaLaMora = true}
    //CALL CENTER
    if(roleMaster == "1" || roleCallCenter == "1.5")
    {roleCallCenterFlag = true}
        //NIVEL 2
    if(roleMaster == "1" || roleCallCenterDefinicionCampanaMails == "1.5.1")
    {roleCallCenterDefinicionCampanaMailsFlag = true}
    if(roleMaster == "1" || roleCallCenterDefinicionCampanaSMS == "1.5.2")
    {roleCallCenterDefinicionCampanaSMSFlag = true}
    if(roleMaster == "1" || roleCallCenterGeneracionBasesNeotel == "1.5.3")
    {roleCallCenterGeneracionBasesNeotelFlag = true}
    if(roleMaster == "1" || roleCallCenterEnvioYRecepcionDeMails == "1.5.4")
    {roleCallCenterEnvioYRecepcionDeMailsFlag = true}
    if(roleMaster == "1" || roleCallCenterEnvioYRecepcionDeSMS == "1.5.5")
    {roleCallCenterEnvioYRecepcionDeSMSFlag = true}
    if(roleMaster == "1" || roleCallCenterDefinicionFechaVtoAgendadoCampana == "1.5.6")
    {roleCallCenterDefinicionFechaVtoAgendadoCampanaFlag = true}
    if(roleMaster == "1" || roleCallCenterAdministracionMailsEnviadosYRecibidos == "1.5.7")
    {roleCallCenterAdministracionMailsEnviadosYRecibidosFlag = true}
    if(roleMaster == "1" || roleCallCenterAdministracionSMSEnviadosYRecibidos == "1.5.8")
    {roleCallCenterAdministracionSMSEnviadosYRecibidosFlag = true}
    //PERSONAL
    if(roleMaster == "1" || rolePersonal == "1.6")
    {rolePersonalFlag = true}
        //NIVEL 2
    if(roleMaster == "1" || rolePersonalLegajos == "1.6.1")
    {rolePersonalLegajosFlag = true}
    if(roleMaster == "1" || rolePersonalReportes == "1.6.2")
    {rolePersonalReportesFlag = true}
    if(roleMaster == "1" || rolePersonalImportacionSueldos == "1.6.3")
    {rolePersonalImportacionSueldosFlag = true}
    if(roleMaster == "1" || rolePersonalGeneracionTXTAcreditacionHaberes == "1.6.4")
    {rolePersonalGeneracionTXTAcreditacionHaberesFlag = true}
    //CONFIGURACION DE DATOS GENERALES
    if(roleMaster == "1" || roleConfiguracionDatos == "1.7")
    {roleConfiguracionDatosFlag = true}
        //NIVEL 2
    if(roleMaster == "1" || roleConfiguracionDatosVendedores == "1.7.1")
    {roleConfiguracionDatosVendedoresFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosSupervisores == "1.7.2")
    {roleConfiguracionDatosSupervisoresFlag = true}    
    if(roleMaster == "1" || roleConfiguracionDatosSucursales == "1.7.3")
    {roleConfiguracionDatosSucursalesFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosCambioDeModelo == "1.7.4")
    {roleConfiguracionDatosCambioDeModeloFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosCambioDeContrasenaDeSueldos == "1.7.5")
    {roleConfiguracionDatosCambioDeContrasenaDeSueldosFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosModelos == "1.7.6")
    {roleConfiguracionDatosModelosFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosListaDePrecios == "1.7.7")
    {roleConfiguracionDatosListaDePreciosFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosOficiales == "1.7.8")
    {roleConfiguracionDatosOficialesFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosPuntosDeVenta == "1.7.9")
    {roleConfiguracionDatosPuntosDeVentaFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosCambioDeContrasena == "1.7.10")
    {roleConfiguracionDatosCambioDeContrasenaFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosObjetivosXMarca == "1.7.11")
    {roleConfiguracionDatosObjetivosXMarcaFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosObjetivosMora == "1.7.12")
    {roleConfiguracionDatosObjetivosMoraFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosObjetivosXGrupoMora == "1.7.13")
    {roleConfiguracionDatosObjetivosXGrupoMoraFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosObjetivosAltasBajasMesaDePlanes == "1.7.14")
    {roleConfiguracionDatosObjetivosAltasBajasMesaDePlanesFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosParametros == "1.7.15")
    {roleConfiguracionDatosParametrosFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosUsuarios == "1.7.16")
    {roleConfiguracionDatosUsuariosFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosABMIntereses == "1.7.17")
    {roleConfiguracionDatosABMInteresesFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosGerentes == "1.7.18")
    {roleConfiguracionDatosGerentesFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosTeamLeader == "1.7.19")
    {roleConfiguracionDatosTeamLeaderFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosEstructuraComercial == "1.7.20")
    {roleConfiguracionDatosEstructuraComercialFlag = true}
    if(roleMaster == "1" || roleConfiguracionDatosEntregaAsegurada == "1.7.21")
    {roleConfiguracionDatosEntregaAseguradaFlag = true}
    //CONTABILIDAD 1
    if(roleMaster == "1" || roleContabilidad1 == "1.8")
    {roleContabilidad1Flag = true}
        //NIVEL 2
    if(roleMaster == "1" || roleContabilidad1Tesoreria == "1.8.1")
    {roleContabilidad1TesoreriaFlag = true}
    if(roleMaster == "1" || roleContabilidad1Ventas == "1.8.2")
    {roleContabilidad1VentasFlag = true}
    if(roleMaster == "1" || roleContabilidad1Bancos == "1.8.3")
    {roleContabilidad1BancosFlag = true}
    if(roleMaster == "1" || roleContabilidad1ContabilidadGeneral == "1.8.4")
    {roleContabilidad1ContabilidadGeneralFlag = true}
    if(roleMaster == "1" || roleContabilidad1Compras == "1.8.5")
    {roleContabilidad1ComprasFlag = true}
    if(roleMaster == "1" || roleContabilidad1CentroDeCostos == "1.8.6")
    {roleContabilidad1CentroDeCostosFlag = true}
    if(roleMaster == "1" || roleContabilidad1Proveedores == "1.8.7")
    {roleContabilidad1ProveedoresFlag = true}
    if(roleMaster == "1" || roleContabilidad1Presupuestos == "1.8.8")
    {roleContabilidad1PresupuestosFlag = true}
    if(roleMaster == "1" || roleContabilidad1PatentamientosPlanDeAhorro == "1.8.9")
    {roleContabilidad1PatentamientosPlanDeAhorroFlag = true}
    //CONTABILIDAD 2
    if(roleMaster == "1" || roleContabilidad2 == "1.9")
    {roleContabilidad2Flag = true}
        //NIVEL 2
    if(roleMaster == "1" || roleContabilidad2ContabilidadGeneral == "1.9.1")
    {roleContabilidad2ContabilidadGeneralFlag = true}
    //REPORTES
    if(roleMaster == "1" || roleReportes == "1.10")
    {roleReportesFlag = true}
        //NIVEL 2
    if(roleMaster == "1" || roleReportesEjecutaInterempresa == "1.10.0")
    {roleReportesEjecutaInterempresaFlag = true}
    if(roleMaster == "1" || roleReportesAdministracionDePlanes == "1.10.1")
    {roleReportesAdministracionDePlanesFlag = true}
    if(roleMaster == "1" || roleReportesVentas == "1.10.2")
    {roleReportesVentasFlag = true}
    if(roleMaster == "1" || roleReportesMora == "1.10.3")
    {roleReportesMoraFlag = true}
    if(roleMaster == "1" || roleReportesFacturacion == "1.10.4")
    {roleReportesFacturacionFlag = true}
    if(roleMaster == "1" || roleReportesCallCenter == "1.10.5")
    {roleReportesCallCenterFlag = true}
    if(roleMaster == "1" || roleReportesMesaDePlanes == "1.10.6")
    {roleReportesMesaDePlanesFlag = true}
    if(roleMaster == "1" || roleReportesScoring == "1.10.7")
    {roleReportesScoringFlag = true}
    if(roleMaster == "1" || roleReportesMicroEmprendedores == "1.10.8")
    {roleReportesMicroEmprendedoresFlag = true}
    //PLAN SUBITE
    if(roleMaster == "1" || rolePlanSubite == "1.11")
    {rolePlanSubiteFlag = true}
        //NIVEL 2
    if(roleMaster == "1" || rolePlanSubiteOficiales == "1.11.1")
    {rolePlanSubiteOficialesFlag = true}
    if(roleMaster == "1" || rolePlanSubiteEstadoDeLaGestion == "1.11.2")
    {rolePlanSubiteEstadoDeLaGestionFlag = true}
    if(roleMaster == "1" || rolePlanSubiteGestionDeDatos == "1.11.3")
    {rolePlanSubiteGestionDeDatosFlag = true}
    if(roleMaster == "1" || rolePlanSubiteAsignacionDeDatos == "1.11.4")
    {rolePlanSubiteAsignacionDeDatosFlag = true}
    if(roleMaster == "1" || rolePlanSubiteImportacionDeDatos == "1.11.5")
    {rolePlanSubiteImportacionDeDatosFlag = true}
    if(roleMaster == "1" || rolePlanSubiteSupervisorSubite == "1.11.6")
    {rolePlanSubiteSupervisorSubiteFlag = true}
    if(roleMaster == "1" || rolePlanSubiteSupervisorSubiteInterempresa == "1.11.7")
    {rolePlanSubiteSupervisorSubiteInterempresaFlag = true}
    if(roleMaster == "1" || rolePlanSubiteAsignacionDatosASupervisor == "1.11.8")
    {rolePlanSubiteAsignacionDatosASupervisorFlag = true}
    if(roleMaster == "1" || rolePlanSubiteImportacionDeHN == "1.11.9")
    {rolePlanSubiteImportacionDeHNFlag = true}
    if(roleMaster == "1" || rolePlanSubiteReporteDeCompras == "1.11.10")
    {rolePlanSubiteReporteDeComprasFlag = true}
    if(roleMaster == "1" || rolePlanSubiteReporteDeAsignacionesPorPeriodo == "1.11.11")
    {rolePlanSubiteReporteDeAsignacionesPorPeriodoFlag = true}
    //ENTREGA CONVENCIONALES
    if(roleMaster == "1" || roleEntregasConvencionales == "1.12")
    {roleEntregasConvencionalesFlag = true}
        //NIVEL 2
    if(roleMaster == "1" || roleEntregasConvencionalesAltaYModificacionDeConvencionales == "1.12.1")
    {roleEntregasConvencionalesAltaYModificacionDeConvencionalesFlag = true}
    if(roleMaster == "1" || roleEntregasConvencionalesSeguimientoService == "1.12.2")
    {roleEntregasConvencionalesSeguimientoServiceFlag = true}
    if(roleMaster == "1" || roleEntregasConvencionalesTurnos == "1.12.3")
    {roleEntregasConvencionalesTurnosFlag = true}
    //MINI EMPRENDEDORES
    if(roleMaster == "1" || roleMiniEmprendedores == "1.13")
    {roleMiniEmprendedoresFlag = true}
        //NIVEL 2
    if(roleMaster == "1" || roleMiniEmprendedoresCirculares == "1.13.1")
    {roleMiniEmprendedoresCircularesFlag = true}
    //COMPRA RESCINDIDOS
    if(roleMaster == "1" || roleCompraRescindidos == "1.14")
    {roleCompraRescindidosFlag = true}
        //NIVEL 2
    if(roleMaster == "1" || roleCompraRescindidosOficiales == "1.14.1")
    {roleCompraRescindidosOficialesFlag = true}
    if(roleMaster == "1" || roleCompraRescindidosEstadoDeLaGestion == "1.14.2")
    {roleCompraRescindidosEstadoDeLaGestionFlag = true}
    if(roleMaster == "1" || roleCompraRescindidosGestionDeDatos == "1.14.3")
    {roleCompraRescindidosGestionDeDatosFlag = true}
    if(roleMaster == "1" || roleCompraRescindidosAsignacionDeDatos == "1.14.4")
    {roleCompraRescindidosAsignacionDeDatosFlag = true}
    if(roleMaster == "1" || roleCompraRescindidosImportacionDeDatos == "1.14.5")
    {roleCompraRescindidosImportacionDeDatosFlag = true}
    if(roleMaster == "1" || roleCompraRescindidosSupervisor == "1.14.6")
    {roleCompraRescindidosSupervisorFlag = true}
    if(roleMaster == "1" || roleCompraRescindidosSupervisorInterempresa == "1.14.7")
    {roleCompraRescindidosSupervisorInterempresaFlag = true}
    //USADOS
    if(roleMaster == "1" || roleUsados == "1.15")
    {roleUsadosFlag = true}
        //NIVEL 2
    if(roleMaster == "1" || roleUsadosCotizaciones == "1.15.1")
    {roleUsadosCotizacionesFlag = true}
    if(roleMaster == "1" || roleUsadosRecepcionDeUnidadesPlanDeAhorro == "1.15.2")
    {roleUsadosRecepcionDeUnidadesPlanDeAhorroFlag = true}
    if(roleMaster == "1" || roleUsadosRecepcionDeUnidadesConvencional == "1.15.3")
    {roleUsadosRecepcionDeUnidadesConvencionalFlag = true}
    if(roleMaster == "1" || roleUsadosStock == "1.15.4")
    {roleUsadosStockFlag = true}
    if(roleMaster == "1" || roleUsadosEgresoDeUnidades == "1.15.5")
    {roleUsadosEgresoDeUnidadesFlag = true}
    if(roleMaster == "1" || roleUsadosEnvioDeMails == "1.15.6")
    {roleUsadosEnvioDeMailsFlag = true}
    if(roleMaster == "1" || roleUsadosCotizacionGerencia == "1.15.7")
    {roleUsadosCotizacionGerenciaFlag = true}
    if(roleMaster == "1" || roleUsadosListadoDeVentas == "1.15.8")
    {roleUsadosListadoDeVentasFlag = true}
    if(roleMaster == "1" || roleUsadosListadoDeVentasInterempresa == "1.15.9")
    {roleUsadosListadoDeVentasInterempresaFlag = true}
    if(roleMaster == "1" || roleUsadosVentasInterempresa == "1.15.10")
    {roleUsadosVentasInterempresaFlag = true}
    if(roleMaster == "1" || roleUsadosResumenUsadosInterempresa == "1.15.11")
    {roleUsadosResumenUsadosInterempresaFlag = true}
    if(roleMaster == "1" || roleUsadosCargarPVS == "1.15.12")
    {roleUsadosCargarPVSFlag = true}
    if(roleMaster == "1" || roleUsadosModificarTasaPorTenencia == "1.15.13")
    {roleUsadosModificarTasaPorTenenciaFlag = true}
    if(roleMaster == "1" || roleUsadosImagenes == "1.15.14")
    {roleUsadosImagenesFlag = true}
    if(roleMaster == "1" || roleUsadosVendedoresABM == "1.15.15")
    {roleUsadosVendedoresABMFlag = true}
    if(roleMaster == "1" || roleUsadosCapitalVehiculosUsados == "1.15.16")
    {roleUsadosCapitalVehiculosUsadosFlag = true}
    if(roleMaster == "1" || roleUsadosControlPrecioToma == "1.15.17")
    {roleUsadosControlPrecioTomaFlag = true}
    if(roleMaster == "1" || roleUsadosAnalisisIngresoEgreso == "1.15.18")
    {roleUsadosAnalisisIngresoEgresoFlag = true}
    //PILOT 
    if(roleMaster == "1" || rolePilot == "1.16")
    {rolePilotFlag = true}
        //NIVEL 2
    if(roleMaster == "1" || rolePilotDatosIngresadosPorFecha == "1.16.1")
    {rolePilotDatosIngresadosPorFechaFlag = true}
    //STOCK VEHICULOS PLAN AHORRO
    if(roleMaster == "1" || roleStockVehiculosPlanAhorro == "1.17")
    {roleStockVehiculosPlanAhorroFlag = true}
        //NIVEL 2
    if(roleMaster == "1" || roleStockVehiculosPlanAhorroVer == "1.17.1")
    {roleStockVehiculosPlanAhorroVerFlag = true}
    if(roleMaster == "1" || roleStockVehiculosPlanAhorroExcel == "1.17.2")
    {roleStockVehiculosPlanAhorroExcelFlag = true}
    if(roleMaster == "1" || roleStockVehiculosPlanAhorroImprimir == "1.17.3")
    {roleStockVehiculosPlanAhorroImprimirFlag = true}
    //SEGURO
    if(roleMaster == "1" || roleSeguros == "1.18")
    {roleSegurosFlag = true}
        //NIVEL 2
    if(roleMaster == "1" || roleSegurosAlta == "1.18.0")
    {roleSegurosAltaFlag = true}
    if(roleMaster == "1" || roleSegurosModificar == "1.18.1")
    {roleSegurosModificarFlag = true}
    if(roleMaster == "1" || roleSegurosAsignarOficial == "1.18.2")
    {roleSegurosAsignarOficialFlag = true}
    if(roleMaster == "1" || roleSegurosExcel == "1.18.3")
    {roleSegurosExcelFlag = true}
    
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
              <NavLink to="" className={roleOperacionesFlag == true ? "link" : "link disabled"} >
                    <div className="icon"><BiListPlus/></div>
                    <div style={{display: isOpen ? "block" : "none"}}  className="link_text">Operaciones
                    <i ><BiChevronDown onClick={toggleDropOperaciones} className="toggle"/></i>
                    <ul  className={ isDroppedOperaciones ?  "op-show show" : "ul"}>
                    {roleOperacionesAltaPreSolFlag == true 
                    ? <li><Link to="/operaciones/altaPre-Solicitudes" className='access'>Alta Pre-Solicitudes</Link></li> 
                    : <li><Link to="" className="disabled">Alta Pre-Solicitudes</Link></li> }
                    {roleOperacionesActualizacionPreSolFlag == true
                    ? <li><Link to="/operaciones/ActualizacionPre-Solicitudes" className='access'>Actualización Pre-Sol</Link></li>
                    : <li><Link to="" className="disabled">Actualización Pre-Sol</Link></li> }
                    {roleOperacionesActualizacionOperacionesFlag == true 
                    ? <li><Link to="/operaciones/ActualizacionOperaciones" className='access'>Actualización Operaciones</Link></li>
                    : <li><Link to="" className="disabled">Actualización Operaciones</Link></li> }
                    {roleOperacionesAltaCarteraFlag == true 
                    ? <li><Link to="/operaciones/AltadeCartera" className='access'>Alta de Cartera</Link></li>
                    : <li><Link to="" className="disabled">Alta de Cartera</Link></li>   }
                    {roleOperacionesAAPEFlag == true 
                    ? <li><Link to="/operaciones/Agrup-adj-pedidos-entregas" className='access'>Agrup./Adj./Pedidos/Entregas</Link></li>
                    : <li><Link to="" className="disabled">Agrup./Adj./Pedidos/Entregas</Link></li>    }
                    {/*PENDIENTE SCORING*/}
                    <li><Link to="" className="disabled">Scoring
                    <i ><BiChevronDown onClick={toggleDropOperacionesScoring} className="toggle"/></i>
                    <ul  className={ isDroppedOperacionesScoring ?  "op-show show" : "ul"}>
                      <li><Link to="/operaciones/Scoring">Scoring</Link></li>
                      <li>Consultar Cotizador</li>
                      <li>Scoring Avanzado</li>
                    </ul>
                    </Link></li>
                    { roleOperacionesConciliacionTarjetasFlag == true  
                    ? <li><Link to="/operaciones/ConciliacionTarjetas" className='access'>Conciliación Tarjetas</Link></li>
                    : <li><Link to="" className="disabled">Conciliación Tarjetas</Link></li> }
                    { roleOperacionesReportePersonalizadoFlag == true 
                    ? <li><Link to="/operaciones/ReportePersonalizadoOp" className='access'>Reporte Personalizado Op.</Link></li>
                    : <li><Link to="" className="disabled">Reporte Personalizado Op.</Link></li>    }
                    {roleOperacionesExcelDatosFlag == true 
                    ? <li><Link to="/operaciones/ExcelDatosOperaciones" className='access'>Excel Datos Operaciones</Link></li>
                    : <li><Link to="" className="disabled">Excel Datos Operaciones</Link></li>    }            
                    {roleOperacionesBuscarOpFlag == true 
                    ? <li><Link to="/operaciones/BuscarOpPreSolDNI" className='access'>Buscar Op/PreSol x DNI</Link></li>
                    : <li><Link to="" className="disabled">Buscar Op/PreSol x DNI</Link></li>    }
                    {/*PENDIENTE IMPORTACIONES*/}
                    <li><Link to="" className="disabled">Importaciones
                    <i ><BiChevronDown onClick={toggleDropOperacionesImportaciones} className="toggle"/></i>
                    <ul  className={ isDroppedOperacionesImportaciones ?  "op-show show" : "ul"}>
                      <li><Link to="/operaciones/Importaciones" className="disabled">Importación Agrupamientos</Link></li>
                      <li><Link to="/operaciones/Importaciones" className="disabled">Importación Cambios de Concesionaria</Link></li>
                      <li><Link to="/operaciones/Importaciones" className="disabled">Importación Fecha Arribo Unidad y Documentación</Link></li>
                      <li><Link to="/operaciones/Importaciones" className="disabled">Importación Observaciones Acto Adj.</Link></li>
                      <li><Link to="/operaciones/Importaciones" className="disabled">Importación Comisión Vendedores</Link></li>
                      <li><Link to="/operaciones/Importaciones">Importación Adjudicaciones</Link></li>
                      <li><Link to="/operaciones/Importaciones">Importación Fecha Ingreso/Regreso Gestoría</Link></li>
                      <li><Link to="/operaciones/Importaciones">Importación Cuotas Encuadre.</Link></li>
                      <li><Link to="/operaciones/Importaciones">Importación Rescindidos</Link></li>
                      <li><Link to="/operaciones/Importaciones">Importación Cuotas</Link></li>
                      <li><Link to="/operaciones/Importaciones">Importación Adjudicaciones Vencidas</Link></li>
                    </ul>
                    </Link></li>
                    {roleOperacionesControlSolicitudesFlag == true 
                    ? <li><Link to="/operaciones/ControlSolicitudes" className='access'>Control Solicitudes</Link></li>
                    : <li><Link to="" className="disabled">Control Solicitudes</Link></li>    }
                    {roleOperacionesControlRecibosFlag == true 
                    ? <li><Link to="/operaciones/ControlRecibos" className='access'>Control Recibos</Link></li>
                    : <li><Link to="" className="disabled">Control Recibos</Link></li>  }
                    {roleOperacionesControlTransferenciasFlag == true
                    ? <li><Link to="/operaciones/ControlTransferencias" className='access'>Control Transferencias</Link></li>
                    : <li><Link to="" className="disabled">Control Transferencias</Link></li>    }
                    {roleOperacionesImpresionRecibosFlag == true 
                    ? <li><Link to="/operaciones/ImpresionRecibosX" className='access'>Impresión Recibos X</Link></li>
                    : <li><Link to="" className="disabled">Impresión Recibos X</Link></li>    }
                    {roleOperacionesReclamosFlag == true 
                    ? <li><Link to="/operaciones/Reclamos" className='access'>Reclamos</Link></li>
                    : <li><Link to="" className="disabled">Reclamos</Link></li>  }
                    {/*PENDIENTE LICITACIONES*/}
                    <li><Link to="" className="disabled">Licitaciones
                    <i ><BiChevronDown onClick={toggleDropOperacionesLicitaciones} className="toggle"/></i>
                    <ul  className={ isDroppedOperacionesLicitaciones ?  "op-show show" : "ul"}>
                      <li><Link to="/operaciones/Licitaciones" className="disabled">Licitaciones</Link></li>
                      <li>Cliente en Condiciones de Licitar</li>
                      <li>Clientes Interesados en Licitar</li>
                      <li>Control Llave x Llave</li>
                      <li>Reintegro de Licitaciones</li>
                    </ul></Link></li>
                    {roleOperacionesLlamadosPorOperacionFlag == true 
                    ? <li><Link to="/operaciones/LlamadosPorOperacion" className='access'>Llamados por Operación</Link></li>
                    : <li><Link to="" className="disabled">Llamados por Operación</Link></li> }
                    {roleOperacionesReintegrosFlag == true 
                    ? <li><Link to="/operaciones/Reintegros" className='access'>Reintegros</Link></li>
                    : <li><Link to="" className="disabled">Reintegros</Link></li> }
                    {roleOperacionesRepMicroEmprendedoresFlag == true 
                    ? <li><Link to="/operaciones/RepMicroEmprendedores" className='access'>Rep. Micro Emprendedores</Link></li>
                    : <li><Link to="" className="disabled">Rep. Micro Emprendedores</Link></li> }
                    {roleOperacionesReportesFlag == true 
                    ? <li><Link to="/operaciones/Reportes" className='access'>Reportes</Link></li>
                    : <li><Link to="" className="disabled">Reportes</Link></li> }
                  </ul> </div> 
                </NavLink>
                <NavLink to=''  className="link" activeclassName="active">
                    <div className="icon"><BiFile/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Mesa de Planes
                    <i ><BiChevronDown onClick={toggleDropMesaDePlanes} className="toggle"/></i>
                    <ul className={ isDroppedMesaDePlanes ? "mp-show show" : "ul"} >
                    {roleMesaDePlanesAdministracionAhorristasAdjudicadosFlag == true   
                    ?<li><Link to="/mesadeplanes/MesadePlanes">Mesa de Planes</Link></li>
                    :<li><Link to="">Mesa de Planes</Link></li>}
                    {roleMesaDePlanesScoringFlag == true
                    ?<li><Link to="/mesadeplanes/Scoring">Scoring</Link></li>
                    :<li><Link to="">Scoring</Link></li>}
                    {roleMesaDePlanesStockParaVentasFlag == true
                    ?<li><Link to="/mesadeplanes/StockParaVentas">Stock Para Ventas</Link></li>
                    :<li><Link to="">Stock Para Ventas</Link></li>}
                    {roleMesaDePlanesAutorizadorClasificacionesFlag == true
                    ?<li><Link to="/mesadeplanes/AutorizadorClasificaciones">Autorizador Clasificaciones</Link></li>
                    :<li><Link to="">Autorizador Clasificaciones</Link></li>}
                    {roleMesaDePlanesStockContableFlag == true
                    ?<li><Link to="/mesadeplanes/StockContable">Stock Contable</Link></li>
                    :<li><Link to="">Stock Contable</Link></li>}
                    {roleMesaDePlanesGestionDeSenasAcumuladasFlag == true
                    ?<li><Link to="/mesadeplanes/GestiondeSenasAcumuladas">Gestión de Señas Acumuladas</Link></li>
                    :<li><Link to="">Gestión de Señas Acumuladas</Link></li>}
                    {roleMesaDePlanesHaberesNetosFlag == true
                    ?<li><Link to="/mesadeplanes/HaberesNetos">Haberes Netos</Link></li>
                    :<li><Link to="">Haberes Netos</Link></li>}
                </ul></div>
                </NavLink>
                <NavLink to=''  className="link" activeclassName="active">
                    <div className="icon"><BiTimeFive/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Mora
                    <i ><BiChevronDown onClick={toggleDropMora} className="toggle"/></i>
                    <ul className={ isDroppedMora ? "mora-show show"  : "ul"} >
                    {roleMoraCuotasEncuadreFlag == true
                    ?<li><Link to="/mora/CuotasEncuadre">Cuotas Encuadre</Link></li>
                    :<li><Link to="">Cuotas Encuadre</Link></li>}
                    {roleMoraRecuperoCuotasEncuadreFlag == true
                    ?<li><Link to="/mora/RecuperoCuotasEncuadre">Recupero Cuotas Encuadre</Link></li>
                    :<li><Link to="">Recupero Cuotas Encuadre</Link></li>}
                    {roleMoraReportePagosYRecuperosEncuadreFlag == true
                    ?<li><Link to="/mora/ReportePagosyRecuperosEncuadre">Reporte Pagos y Recuperos Encuadre</Link></li>
                    :<li><Link to="">Reporte Pagos y Recuperos Encuadre</Link></li>}
                    {roleMoraCuadroPerformanceFlag == true
                    ?<li><Link to="/mora/CuadrodePerformance">Cuadro de Performance</Link></li>
                    :<li><Link to="">Cuadro de Performance</Link></li>}
                    {roleMoraAsignacionDeMoraFlag == true
                    ?<li><Link to="/mora/AsignaciondeMora">Asignación de Mora</Link></li>
                    :<li><Link to="">Asignación de Mora</Link></li>}
                    {roleMoraMoraTecnicaFlag == true
                    ?<li><Link to="/mora/MoraTecnica">Mora Técnica</Link></li>
                    :<li><Link to="">Mora Técnica</Link></li>}
                    {roleMoraGestionMoraTempranaFlag == true
                    ?<li><Link to="/mora/GestionMoraTemprana">Gestión Mora Temprana</Link></li>
                    :<li><Link to="">Gestión Mora Temprana</Link></li>}
                    {roleMoraGestionMoraEspecializadaFlag == true
                    ?<li><Link to="/mora/GestionMoraEspecializada">Gestión Mora Especializada</Link></li>
                    :<li><Link to="">Gestión Mora Especializada</Link></li>}
                    {roleMoraColaDeLlamadosMoraTempranaFlag == true
                    ?<li><Link to="/mora/ColadeLlamadosdeMoraTemprana">Cola de Llamados de Mora Temprana</Link></li>
                    :<li><Link to="">Cola de Llamados de Mora Temprana</Link></li>}
                    {roleMoraColaDeLlamadosMoraEspecializadaFlag == true
                    ?<li><Link to="/mora/ColadeLlamadosdeMoraEspecializada">Cola de Llamados de Mora Especializada</Link></li>
                    :<li><Link to="">Cola de Llamados de Mora Temprana</Link></li>}
                </ul></div>
                </NavLink>
                <NavLink to=''  className="link" activeclassName="active">
                    <div className="icon"><BiPhoneCall/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Call Center
                    <i ><BiChevronDown onClick={toggleDropCallCenter} className="toggle"/></i>
                    <ul className={ isDroppedCallCenter ? "call-show show"  : "ul"} >
                    {roleCallCenterDefinicionCampanaMailsFlag == true
                    ?<li><Link to="/callcenter/DefinicionCampanaMails">Definición Campaña Mails</Link></li>
                    :<li><Link to="">Definición Campaña Mails</Link></li>}
                    {roleCallCenterDefinicionCampanaSMSFlag == true
                    ?<li><Link to="/callcenter/DefinicionCampanaSMS">Definición Campaña SMS</Link></li>
                    :<li><Link to="">Definición Campaña SMS</Link></li>}
                    {roleCallCenterGeneracionBasesNeotelFlag == true
                    ?<li><Link to="/callcenter/GeneracionBasesNeotel">Generación Bases Neotel</Link></li>
                    :<li><Link to="">Generación Bases Neotel</Link></li>}
                    {roleCallCenterEnvioYRecepcionDeMailsFlag == true
                    ?<li><Link to="/callcenter/EnvioyRecepcionDeMails">Envío y Recepción de Mails</Link></li>
                    :<li><Link to="">Envío y Recepción de Mails</Link></li>}
                    {roleCallCenterEnvioYRecepcionDeSMSFlag == true
                    ?<li><Link to="/callcenter/EnvioyRecepcionDeSMS">Envío y Recepción de SMS</Link></li>
                    :<li><Link to="">Envío y Recepción de SMS</Link></li>}
                    {roleCallCenterDefinicionFechaVtoAgendadoCampanaFlag == true
                    ?<li><Link to="/callcenter/DefinicionVtoFechaAgendadoCampana">Definición Vto. Fecha Agendado Campaña</Link></li>
                    :<li><Link to="">Definición Vto. Fecha Agendado Campaña</Link></li>}
                    {roleCallCenterAdministracionMailsEnviadosYRecibidosFlag == true
                    ?<li><Link to="/callcenter/AdministracionMailsEnviadosYRecibidos">Administración Mails Enviados y Recibidos</Link></li>
                    :<li><Link to="">Administración Mails Enviados y Recibidos</Link></li>}
                    {roleCallCenterAdministracionSMSEnviadosYRecibidosFlag == true
                    ?<li><Link to="/callcenter/AdministracionSMSEnviadosYRecibidos">Administración SMS Enviados y Recibidos</Link></li>
                    :<li><Link to="">Administración SMS Enviados y Recibidos</Link></li>}
                </ul></div>
                </NavLink>
                <NavLink to=''  className="link" activeclassName="active">
                    <div className="icon"><BiIdCard/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Personal
                    <i ><BiChevronDown onClick={toggleDropPersonal} className="toggle"/></i>
                    <ul className={ isDroppedPersonal ? "per-show show"  : "ul"} >
                    {rolePersonalLegajosFlag == true
                    ?<li><Link to="/personal/Legajos">Legajos</Link></li>
                    :<li><Link to="">Legajos</Link></li>}
                    {rolePersonalReportesFlag == true
                    ?<li><Link to="/personal/Reportes">Reportes</Link></li>
                    :<li><Link to="">Reportes</Link></li>}
                    {rolePersonalImportacionSueldosFlag == true
                    ?<li><Link to="/personal/ImportaciondeSueldos">Importación de Sueldos</Link></li>
                    :<li><Link to="">Importación de Sueldos</Link></li>}
                    {rolePersonalGeneracionTXTAcreditacionHaberesFlag == true
                    ?<li><Link to="/personal/GeneracionTXTAcreditacionHaberes">Generación TXT Acreditación Haberes</Link></li>
                    :<li><Link to="">Generación TXT Acreditación Haberes</Link></li>}
                  </ul></div>
                </NavLink>
                <NavLink to=''  className="link" activeclassName="active">
                    <div className="icon"><BiGroup/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Emprendedores
                    <i ><BiChevronDown onClick={toggleDropEmprendedores} className="toggle"/></i>
                    <ul className={ isDroppedEmprendedores ? "empre-show show"  : "ul"} >
                    {roleMiniEmprendedoresCircularesFlag == true
                    ?<li><Link to="/emprendedores/Circulares">Circulares</Link></li>
                    :<li><Link to="">Circulares</Link></li>}
                  </ul></div>
                </NavLink>
                <NavLink to=''  className="link" activeclassName="active">
                    <div className="icon"><BiCog/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Configuracion de Datos Generales
                    <i ><BiChevronDown onClick={toggleDropConfiguracion} className="toggle"/></i>
                    <ul className={ isDroppedConfiguracion ? "config-show show"  : "ul"} >
                    {roleConfiguracionDatosVendedoresFlag == true
                    ?<li><Link to="/configuracion/Vendedores">Vendedores</Link></li>
                    :<li><Link to="">Vendedores</Link></li>}
                    {roleConfiguracionDatosCambioDeModeloFlag == true
                    ?<li><Link to="/configuracion/CambioDeModelo">Cambio de Modelo</Link></li>
                    :<li><Link to="">Cambio de Modelo</Link></li>}
                    {roleConfiguracionDatosObjetivosAltasBajasMesaDePlanesFlag == true
                    ?<li><Link to="/configuracion/ObjAltasBajasMesaDePlanes">Obj. Altas Bajas Mesa de Planes</Link></li>
                    :<li><Link to="">Obj. Altas Bajas Mesa de Planes</Link></li>}
                    {roleConfiguracionDatosParametrosFlag == true
                    ?<li><Link to="/configuracion/Parametros">Parámetros</Link></li>
                    :<li><Link to="">Parámetros</Link></li>}
                    {roleConfiguracionDatosModelosFlag == true
                    ?<li><Link to="/configuracion/Modelos">Modelos</Link></li>
                    :<li><Link to="">Modelos</Link></li>}
                    {roleConfiguracionDatosObjetivosMoraFlag == true
                    ?<li><Link to="/configuracion/ObjetivosMora">Objetivos Mora</Link></li>
                    :<li><Link to="">Objetivos Mora</Link></li>}
                    {roleConfiguracionDatosObjetivosXGrupoMoraFlag == true
                    ?<li><Link to="/configuracion/ObjGrupoMora">Obj. Grupo Mora</Link></li>
                    :<li><Link to="">Obj. Grupo Mora</Link></li>}
                    {roleConfiguracionDatosCambioDeContrasenaDeSueldosFlag == true
                    ?<li><Link to="/configuracion/CambioDeContrasenaDeSueldo">Cambio de Contraseña de Sueldos</Link></li>
                    :<li><Link to="">Cambio de Contraseña de Sueldos</Link></li>}
                    {roleConfiguracionDatosEstructuraComercialFlag == true
                    ?<li><Link to="/configuracion/EstructuraComercial">Estructura Comercial</Link></li>
                    :<li><Link to="">Estructura Comercial</Link></li>}
                    {roleConfiguracionDatosObjetivosXMarcaFlag == true
                    ?<li><Link to="/configuracion/ObjetivosPorMarca">Objetivos por Marca</Link></li>
                    :<li><Link to="">Objetivos por Marca</Link></li>}
                    {roleConfiguracionDatosCambioDeContrasenaFlag == true
                    ?<li><Link to="/configuracion/CambioDeContrasena">Cambio de Contraseña</Link></li>
                    :<li><Link to="">Cambio de Contraseña</Link></li>}
                    {roleConfiguracionDatosGerentesFlag == true
                    ?<li><Link to="/configuracion/Gerentes">Gerentes</Link></li>
                    :<li><Link to="">Gerentes</Link></li>}
                    {roleConfiguracionDatosSucursalesFlag == true
                    ?<li><Link to="/configuracion/Sucursales">Sucursales</Link></li>
                    :<li><Link to="">Sucursales</Link></li>}
                    {roleConfiguracionDatosUsuariosFlag == true
                    ?<li><Link to="/configuracion/Usuarios">Usuarios</Link></li>
                    :<li><Link to="">Usuarios</Link></li>}
                    {roleConfiguracionDatosSupervisoresFlag == true
                    ?<li><Link to="/configuracion/Supervisores">Supervisores</Link></li>
                    :<li><Link to="">Supervisores</Link></li>}
                    {roleConfiguracionDatosPuntosDeVentaFlag == true
                    ?<li><Link to="/configuracion/PuntosDeVenta">Puntos de Venta</Link></li>
                    :<li><Link to="">Puntos de Venta</Link></li>}
                    {roleConfiguracionDatosABMInteresesFlag == true
                    ?<li><Link to="/configuracion/Intereses">Intereses</Link></li>
                    :<li><Link to="">Intereses</Link></li>}
                    {roleConfiguracionDatosTeamLeaderFlag == true
                    ?<li><Link to="/configuracion/TeamLeader">Team Leader</Link></li>
                    :<li><Link to="">Team Leader</Link></li>}
                    {roleConfiguracionDatosListaDePreciosFlag == true
                    ?<li><Link to="/configuracion/ListasDePrecio">Listas de Precios</Link></li>
                    :<li><Link to="">Listas de Precios</Link></li>}
                    {roleConfiguracionDatosOficialesFlag == true
                    ?<li><Link to="/configuracion/Oficiales">Oficiales</Link></li>
                    :<li><Link to="">Oficiales</Link></li>}
                    {roleConfiguracionDatosEntregaAseguradaFlag == true
                    ?<li><Link to="/configuracion/EntregaAsegurada">Entrega Asegurada</Link></li>
                    :<li><Link to="">Entrega Asegurada</Link></li>}
                  </ul></div>
                </NavLink>
                <NavLink to=''  className="link" activeclassName="active">
                    <div className="icon"><BiLineChart/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Contabilidad
                    <i ><BiChevronDown onClick={toggleDropContabilidad} className="toggle"/></i>
                    <ul className={ isDroppedContabilidad ? "cont-show show"  : "ul"} >
                    
                    <li><Link to="/contabilidad/Tesoreria">Tesorería</Link></li>
                    <li><Link to="/contabilidad/Ventas">Ventas</Link></li>
                    <li><Link to="/contabilidad/Bancos">Bancos</Link></li>
                    <li><Link to="/contabilidad/ContabilidadGeneral">Contabilidad General</Link></li>
                    <li><Link to="/contabilidad/Compras">Compras</Link></li>
                    <li><Link to="/contabilidad/CentroDeCostos">Centro de Costos</Link></li>
                    <li><Link to="/contabilidad/Proveedores">Proveedores</Link></li>
                    <li><Link to="/contabilidad/Presupuestos">Presupuestos</Link></li>
                    <li><Link to="/contabilidad/PatentamientoPlanDeAhorro">Patentamientos Plan de Ahorro</Link></li>
                </ul></div>
                </NavLink>
                <NavLink to=''  className="link" activeclassName="active">
                    <div className="icon"><BiPrinter/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Reportes</div>
                </NavLink>
                <NavLink to=''  className="link" activeclassName="active">
                    <div className="icon"><BiTachometer/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Plan Subite Fiat
                    <i ><BiChevronDown onClick={toggleDropPlanSubite} className="toggle"/></i>
                    <ul className={ isDroppedPlanSubite ? "plan-s-show show"  : "ul"} >
                    {rolePlanSubiteOficialesFlag == true
                    ?<li><Link to="/plansubite/Oficiales">Oficiales</Link></li>
                    :<li><Link to="">Oficiales</Link></li>}
                    {rolePlanSubiteReporteDeComprasFlag == true
                    ?<li><Link to="/plansubite/ReporteDeCompras">Reporte de Compras</Link></li>
                    :<li><Link to="">Reporte de Compras</Link></li>}
                    {rolePlanSubiteImportacionDeDatosFlag == true
                    ?<li><Link to="/plansubite/ImportacionDeDatos">Importación de Datos</Link></li>
                    :<li><Link to="">Importación de Datos</Link></li>}
                    {rolePlanSubiteGestionDeDatosFlag == true
                    ?<li><Link to="/plansubite/GestionDeDatos">Gestión de Datos</Link></li>
                    :<li><Link to="">Gestión de Datos</Link></li>}
                    {rolePlanSubiteAsignacionDeDatosFlag == true
                    ?<li><Link to="/plansubite/AsignacionDeDatos">Asignación de Datos</Link></li>
                    :<li><Link to="">Asignación de Datos</Link></li>}
                    {rolePlanSubiteEstadoDeLaGestionFlag ==true
                    ?<li><Link to="/plansubite/EstadoDeLaGestion">Estado de la Gestión</Link></li>
                    :<li><Link to="">Estado de la Gestión</Link></li>}
                    {rolePlanSubiteReporteDeAsignacionesPorPeriodoFlag == true
                    ?<li><Link to="/plansubite/ReporteDeAsignacionesPorPeriodo">Reporte de Asignaciones por Período</Link></li>
                    :<li><Link to="">Reporte de Asignaciones por Período</Link></li>}
                    {rolePlanSubiteImportacionDeHNFlag == true
                    ?<li><Link to="/plansubite/ImportacionDeHN">Importación de HN</Link></li>
                    :<li><Link to="">Importación de HN</Link></li>}
                </ul></div>
                </NavLink>
                <NavLink to=''  className="link" activeclassName="active">
                    <div className="icon"><BiLinkExternal/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Entregas Convencionales
                    <i ><BiChevronDown onClick={toggleDropEntregaConvencionales} className="toggle"/></i>
                    <ul className={ isDroppedEntregaConvencionales ? "entre-show show"  : "ul"} >
                    {roleEntregasConvencionalesAltaYModificacionDeConvencionalesFlag == true
                    ?<li><Link to="/entregasConvencionales/AltaYModificacionDeConvencionales">Alta y Modificación de Convencionales</Link></li>
                    :<li><Link to="">Alta y Modificación de Convencionales</Link></li>}
                    {roleEntregasConvencionalesTurnosFlag == true
                    ?<li><Link to="/entregasConvencionales/Turnos">Turnos</Link></li>
                    :<li><Link to="">Turnos</Link></li>}
                    {roleEntregasConvencionalesSeguimientoServiceFlag == true
                    ?<li><Link to="/entregasConvencionales/SeguimientoService">Seguimiento Service</Link></li>
                    :<li><Link to="">Seguimiento Service</Link></li>}
                </ul></div>
                </NavLink>
                <NavLink to=''  className="link" activeclassName="active">
                    <div className="icon"><BiCart/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Compra Rescindidos
                    <i ><BiChevronDown onClick={toggleDropCompraRescindidos} className="toggle"/></i>
                    <ul className={ isDroppedCompraRescindidos ? "compra-show show"  : "ul"} >
                    {roleCompraRescindidosOficialesFlag == true
                    ?<li><Link to="/compra/Oficiales">Oficiales</Link></li>
                    :<li><Link to="">Oficiales</Link></li>}
                    {roleCompraRescindidosEstadoDeLaGestionFlag == true
                    ?<li><Link to="/compra/EstadoDeLaGestion">Estado de la Gestión</Link></li>
                    :<li><Link to="">Estado de la Gestión</Link></li>}
                    {roleCompraRescindidosGestionDeDatosFlag == true
                    ?<li><Link to="/compra/GestionDeDatos">Gestión de Datos</Link></li>
                    :<li><Link to="">Gestión de Datos</Link></li>}
                    {roleCompraRescindidosAsignacionDeDatosFlag == true
                    ?<li><Link to="/compra/AsignacionDeDatos">Asignación de Datos</Link></li>
                    :<li><Link to="">Asignación de Datos</Link></li>}
                    {roleCompraRescindidosImportacionDeDatosFlag == true
                    ?<li><Link to="/compra/ImportacionDeDatos">Importación de Datos</Link></li>
                    :<li><Link to="">Importación de Datos</Link></li>}
                </ul></div>
                </NavLink>
                <NavLink to=''  className="link" activeclassName="active">
                    <div className="icon"><BiCar/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Usados
                    <i ><BiChevronDown onClick={toggleDropUsados} className="toggle"/></i>
                    <ul className={ isDroppedUsados ? "usados-show show"  : "ul"} >
                    {roleUsadosCotizacionesFlag == true
                    ?<li><Link to="/usados/Cotizaciones">Cotizaciones</Link></li>
                    :<li><Link to="/usados/Cotizaciones">Cotizaciones</Link></li>}
                    {roleUsadosCotizacionGerenciaFlag == true
                    ?<li><Link to="/usados/CotizacionesGenerales">Cotizaciones Generales</Link></li>
                    :<li><Link to="/usados/CotizacionesGenerales">Cotizaciones Generales</Link></li>}
                    {roleUsadosRecepcionDeUnidadesPlanDeAhorroFlag == true
                    ?<li><Link to="/usados/UnidadesAprobadasPlanDeAhorroARecibir">Unidades Aprobadas Plan de Ahorro a Recibir</Link></li>
                    :<li><Link to="/usados/UnidadesAprobadasPlanDeAhorroARecibir">Unidades Aprobadas Plan de Ahorro a Recibir</Link></li>}
                    {roleUsadosRecepcionDeUnidadesConvencionalFlag == true
                    ?<li><Link to="/usados/UnidadesAprobadasConvencionalARecibir">Unidades Aprobadas Convencional a Recibir</Link></li>
                    :<li><Link to="/usados/UnidadesAprobadasConvencionalARecibir">Unidades Aprobadas Convencional a Recibir</Link></li>}
                    {roleUsadosResumenUsadosInterempresaFlag == true
                    ?<li><Link to="/usados/ResumenUsadosInterempresa">Resumen Usados (Interempresa)</Link></li>
                    :<li><Link to="/usados/ResumenUsadosInterempresa">Resumen Usados (Interempresa)</Link></li>}
                    {roleUsadosModificarTasaPorTenenciaFlag == true
                    ?<li><Link to="/usados/CargaTasaPorTenencia">Carga Tasa por Tenencia</Link></li>
                    :<li><Link to="/usados/CargaTasaPorTenencia">Carga Tasa por Tenencia</Link></li>}
                    {roleUsadosAnalisisIngresoEgresoFlag == true
                    ?<li><Link to="/usados/AnalisisIngresoEgreso">Análisis Ingreso Egreso</Link></li>
                    :<li><Link to="/usados/AnalisisIngresoEgreso">Análisis Ingreso Egreso</Link></li>}
                    {roleUsadosStockFlag == true
                    ?<li><Link to="/usados/Stock">Stock</Link></li>
                    :<li><Link to="/usados/Stock">Stock</Link></li>}
                    {roleUsadosStockFlag == true
                    ?<li><Link to="/usados/StockInterempresa">Stock Interempresa</Link></li>
                    :<li><Link to="/usados/StockInterempresa">Stock Interempresa</Link></li>}
                    {roleUsadosEgresoDeUnidadesFlag == true
                    ?<li><Link to="/usados/EgresoDeUnidadesYVentas">Egreso de Unidades y Ventas</Link></li>
                    :<li><Link to="/usados/EgresoDeUnidadesYVentas">Egreso de Unidades y Ventas</Link></li>}
                    {roleUsadosVentasInterempresaFlag == true
                    ?<li><Link to="/usados/VentasInterempresa">Ventas Interempresa</Link></li>
                    :<li><Link to="/usados/VentasInterempresa">Ventas Interempresa</Link></li>}
                    {roleUsadosListadoDeVentasFlag == true
                    ?<li><Link to="/usados/ListadoParaVentas">Listado para Ventas</Link></li>
                    :<li><Link to="/usados/ListadoParaVentas">Listado para Ventas</Link></li>}
                    {roleUsadosListadoDeVentasInterempresaFlag == true
                    ?<li><Link to="/usados/ListadoParaVentasInterempresa">Listado para Ventas (Interempresa)</Link></li>
                    :<li><Link to="/usados/ListadoParaVentasInterempresa">Listado para Ventas (Interempresa)</Link></li>}
                    {roleUsadosVendedoresABMFlag == true
                    ?<li><Link to="/usados/VendedoresUsados">Vendedores Usados</Link></li>
                    :<li><Link to="/usados/VendedoresUsados">Vendedores Usados</Link></li>}
                    {roleUsadosControlPrecioTomaFlag == true
                    ?<li><Link to="/usados/ControlPrecioToma">Control Precio Toma</Link></li>
                    :<li><Link to="/usados/ControlPrecioToma">Control Precio Toma</Link></li>}
                    {roleUsadosCapitalVehiculosUsadosFlag == true
                    ?<li><Link to="/usados/CapitalVehiculosUsados">Capital Vehículos Usados</Link></li>
                    :<li><Link to="/usados/CapitalVehiculosUsados">Capital Vehículos Usados</Link></li>}12
                </ul></div>
                </NavLink>
                <NavLink to='/stockvehiculos'  className="link" activeclassName="active">
                    <div className="icon"><BiBus/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Stock Vehiculos Plan Ahorro</div>
                </NavLink>
                <NavLink to='/seguros'  className="link" activeclassName="active">
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
    )    }
export default Sidenav;