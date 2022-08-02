import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import LoginPage from './pages/loginPage.js';
import Sidenav from './components/sidenav';
import InicioPage from './pages/inicioPage.js';
import { BrowserRouter, Routes, Route, NavLink, Switch } from 'react-router-dom';
import Operaciones from './pages/operaciones';
import MesaDePlanes from './pages/mesaDePlanes';
import Mora from './pages/mora';
import CallCenter from './pages/callCenter';
import Personal from './pages/personal';
import Emprendedores from './pages/emprendedores';
import ConfigDatos from './pages/configDatos';
import Contabilidad from './pages/contabilidad';
import Reportes from './pages/reportes';
import PlanSubite from './pages/planSubite';
import EntregasConvencionales from './pages/entregasConvencionales';
import CompraRescindidos from './pages/compraRescindidos';
import Usados from './pages/usados';
import StockVehiculos from './pages/stockVehiculos';
import Seguros from './pages/seguros';
import HomePage from './pages/homePage';
import PrivateRoute from './utils/PrivateRoute'
import PublicRoute from './utils/PublicRoute'
import { Container } from 'react-bootstrap';
import { UserContext } from './context/UserContext';
import { useState, useContext } from 'react';
import GlobalState from './context/globalState.js'
import RequireAuth from './utils/RequireAuth';
import Missing from "./pages/missing";

const App = (props) => {
  const [userLogin, setUserLogin] = useState(false)
  const context = useContext(UserContext)

  return (<div className="App">

    <div>
      <GlobalState>
        <BrowserRouter>
          <div className="content"  >

            <Routes>
              <Route path="/" element={<InicioPage />} />
              <Route path="/home" element={<HomePage />} />

              <Route element={<RequireAuth allowedRoles={[2]} />}>
                <Route path="/operaciones-" element={<Operaciones />}>
                  <Route path="AltaPre-Solicitudes"  />
                  <Route path="ActualizacionPre-Solicitudes"  />
                  <Route path="ActualizacionOperaciones"  />
                  <Route path="AltadeCartera"  />
                  <Route path="Agrup-adj-pedidos-entregas"  />
                  <Route path="Scoring"  />
                  <Route path="ConciliacionTarjetas"  />
                  <Route path="ReportePersonalizadoOp"  />
                  <Route path="ExcelDatosOperaciones"  />
                  <Route path="BuscarOpPreSolDNI"  />
                  <Route path="Importaciones"  />
                  <Route path="ControlSolicitudes"  />
                  <Route path="ControlRecibos"  />
                  <Route path="ControlTransferencias"  />
                  <Route path="ImpresionRecibosX"  />
                  <Route path="Reclamos"  />
                  <Route path="Licitaciones"  />
                  <Route path="LlamadosPorOperacion"  />
                  <Route path="Reintegros"  />
                  <Route path="RepMicroEmprendedores"  />
                  <Route path="Reportes"  />
                </Route>

                <Route path="/mesadeplanes-" element={<MesaDePlanes />}>
                  <Route path="MesadePlanes"  />
                  <Route path="Scoring"  />
                  <Route path="StockParaVentas"  />
                  <Route path="AutorizadorClasificaciones"  />
                  <Route path="StockContable"  />
                  <Route path="GestiondeSenasAcumuladas"  />
                  <Route path="HaberesNetos"  />
                  </Route >

                  <Route path="mora-" element={<Mora />}>
                    <Route path="CuotasEncuadre"  />
                    <Route path="RecuperoCuotasEncuadre"  />
                    <Route path="ReportePagosyRecuperosEncuadre"  />
                    <Route path="CuadrodePerformance"  />
                    <Route path="AsignaciondeMora"  />
                    <Route path="MoraTecnica"  />
                    <Route path="GestionMoraTemprana"  />
                    <Route path="GestionMoraEspecializada"  />
                    <Route path="ColadeLlamadosdeMoraTemprana"  />
                    <Route path="ColadeLlamadosdeMoraEspecializada"  />
                  </Route>

                  <Route path="callcenter-" element={<CallCenter />}>
                    <Route path="DefinicionCampanaMails"  />
                    <Route path="DefinicionCampanaSMS"  />
                    <Route path="GeneracionBasesNeotel"  />
                    <Route path="EnvioyRecepciondeMails"  />
                    <Route path="EnvioyRecepciondeSMS"  />
                    <Route path="DefinicionVtoFechaAgendadoCampana"  />
                    <Route path="AdministracionMailsEnviadosyRecibidos"  />
                    <Route path="AdministracionSMSEnviadosyRecibidos"  />
                  </Route>

                    <Route path="/personal-" element={<Personal />}>
                      <Route path="Legajos"  />
                      <Route path="Reportes"  />
                      <Route path="ImportaciondeSueldos"  />
                      <Route path="GeneracionTXTAcreditacionHaberes"  />
                    </Route>

                    <Route path="/emprendedores-" element={<Emprendedores />}>
                        <Route path="Circulares"  />
                     </Route>

                    <Route path="/configuracion-" element={<ConfigDatos />}>
                          <Route path="Vendedores"  />
                          <Route path="TeamLeader"  />
                          <Route path="Supervisores"  />
                          <Route path="Gerentes"  />
                          <Route path="EstructuraComercial"  />
                          <Route path="Modelos"  />
                          <Route path="CambiodeModelo"  />
                          <Route path="ListasdePrecios"  />
                          <Route path="PuntosdeVenta"  />
                          <Route path="Sucursales"  />
                          <Route path="ObjetivosporMarca"  />
                          <Route path="ObjetivosMora"  />
                          <Route path="ObjGrupoMora"  />
                          <Route path="ObjAltasBajasMesadePlanes"  />
                          <Route path="Oficiales"  />
                          <Route path="Intereses"  />
                          <Route path="Usuarios"  />
                          <Route path="CambiodeContrasena"  />
                          <Route path="CambiodeContrasenadeSueldos"  />
                          <Route path="Parametros"  />
                          <Route path="EntregaAsegurada"  />
                    </Route>

                    <Route path="/contabilidad-" element={<Contabilidad />}>
                            <Route path="Tesoreria" />
                            <Route path="Ventas" />
                            <Route path="Bancos" />
                            <Route path="ContabilidadGeneral" />
                            <Route path="Compras" />
                            <Route path="CentrodeCostos" />
                            <Route path="Proveedores" />
                            <Route path="Presupuestos" />
                            <Route path="PatentamientosPlandeAhorro" />
                    </Route>

                    <Route path="/reportes" element={<Reportes />} />
                    
                    <Route path="/plansubite-" element={<PlanSubite />}>
                              <Route path="Oficiales" />
                              <Route path="ReportedeCompras" />
                              <Route path="ImportaciondeDatos" />
                              <Route path="GestiondeDatos" />
                              <Route path="AsignaciondeDatos" />
                              <Route path="EstadodelaGestion" />
                              <Route path="ReportedeAsignacionesporPeriodo" />
                              <Route path="ImportaciondeHN" />
                    </Route>

                    <Route path="/entregas-" element={<EntregasConvencionales />}>
                                <Route path="AltayModificaciondeConvencionales" />
                                <Route path="Turnos" />
                                <Route path="SeguimientoService" />
                    </Route>

                    <Route path="/compra-" element={<CompraRescindidos />}>
                                  <Route path="Oficiales" />
                                  <Route path="EstadodelaGestion" />
                                  <Route path="GestiondeDatos" />
                                  <Route path="AsignaciondeDatos" />
                                  <Route path="ImportaciondeDatos" />
                    </Route>
                    
                    <Route path="/usados-" element={<Usados />}>
                                    <Route path="Cotizaciones" />
                                    <Route path="CotizacionesGenerales" />
                                    <Route path="UnidadesAprobadasPlandeAhorroaRecibir" />
                                    <Route path="UnidadesAprobadasConvencionalaRecibir" />
                                    <Route path="ResumenUsadosInterempresas" />
                                    <Route path="CargaTasaporTenencia" />
                                    <Route path="AnalisisIngresoEgreso" />
                                    <Route path="Stock" />
                                    <Route path="StockInterempresa" />
                                    <Route path="EgresodeUnidadesyVentas" />
                                    <Route path="VentasInterempresa" />
                                    <Route path="ListadoparaVentas" />
                                    <Route path="ListadoparaVentasInterempresa" />
                                    <Route path="VendedoresUsados" />
                                    <Route path="ControlPrecioToma" />
                                    <Route path="CapitalVehiculosUsados" />
                    </Route>
                    
                    <Route path="/stockvehiculos" element={<StockVehiculos />} />
                    <Route path="/seguros" element={<Seguros />} />
                    
                 </Route>
                                  {/*catch all*/}
                                  <Route path="*" element={<Missing />} />
                                </Routes>





                              </div>
                            </BrowserRouter>
                          </GlobalState>

                        </div>


                      </div>
                      );
  
};


                      export default App;


