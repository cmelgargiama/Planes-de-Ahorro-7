import React from 'react'
import Sidenav from '../components/sidenav';
import {  Route , Routes} from 'react-router-dom';
import Scoring from './operaciones/scoring';
import AltaDeCartera from './operaciones/altaDeCartera';
import ActualizacionPre_Solicitudes from './operaciones/actualizacionPre-Solicitudes.js';
import Agrup_adj_pedidos_entregas from './operaciones/agrup-adj-pedidos-entregas.js';
import AltaPre_Solicitudes from './operaciones/altaPre-Solicitudes';
import ConciliacionTarjetas from './operaciones/conciliacionTarjetas';
import ExcelDatosOperaciones from './operaciones/excelDatosOperaciones';
import ControlRecibos from './operaciones/controlRecibos';
import BuscarOpPreSolDNI from './operaciones/buscarOpPreSolDNI';
import ActualizacionOperaciones from './operaciones/actualizacionOperaciones';
import ImpresionRecibosX from './operaciones/impresionRecibosX';
import Licitaciones from './operaciones/licitaciones';
import Importaciones from './operaciones/importaciones';
import ControlSolicitudes from './operaciones/controlSolicitudes';
import ControlTransferencias from './operaciones/controlTransferencias';
import ReportePersonalizadoOp from './operaciones/reportePersonalizadoOp';
import Reclamos from './operaciones/reclamos';
import LlamadosPorOperacion from './operaciones/llamadosPorOperacion';
import Reintegros from './operaciones/reintegros';
import Reportes from './operaciones/reportes';
import RepMicroEmprendedores from './operaciones/repMicroEmprendedores';
import Missing from "../pages/missing";

function Operaciones() {

    return(
        <div>
            <Routes>
                 <Route path="AltaPre-Solicitudes" element={<AltaPre_Solicitudes/>} />
                  <Route path="ActualizacionPre-Solicitudes" element={<ActualizacionPre_Solicitudes/>}  />
                  <Route path="ActualizacionOperaciones" element={<ActualizacionOperaciones/>} />
                  <Route path="AltadeCartera" element={<AltaDeCartera/>} />
                  <Route path="Agrup-adj-pedidos-entregas" element={<Agrup_adj_pedidos_entregas/>} />
                  <Route exact path="Scoring" element={<Scoring/>}  />
                  <Route path="ConciliacionTarjetas" element={<ConciliacionTarjetas/>} />
                  <Route path="ReportePersonalizadoOp" element={<ReportePersonalizadoOp/>} />
                  <Route path="ExcelDatosOperaciones" element={<ExcelDatosOperaciones/>} />
                  <Route path="BuscarOpPreSolDNI" element={<BuscarOpPreSolDNI/>} />
                  <Route path="Importaciones" element={<Importaciones/>} />
                  <Route path="ControlSolicitudes" element={<ControlSolicitudes/>} />
                  <Route path="ControlRecibos" element={<ControlRecibos/>} />
                  <Route path="ControlTransferencias" element={<ControlTransferencias/>} />
                  <Route path="ImpresionRecibosX" element={<ImpresionRecibosX/>} />
                  <Route path="Reclamos" element={<Reclamos/>} />
                  <Route path="Licitaciones" element={<Licitaciones/>} />
                  <Route path="LlamadosPorOperacion" element={<LlamadosPorOperacion/>} />
                  <Route path="Reintegros" element={<Reintegros/>} />
                  <Route path="RepMicroEmprendedores" element={<RepMicroEmprendedores/>} />
                  <Route path="Reportes" element={<Reportes/>} />
                  <Route path="*" element={<Missing />} />
                  </Routes>
        </div>
    )

}

export default Operaciones;