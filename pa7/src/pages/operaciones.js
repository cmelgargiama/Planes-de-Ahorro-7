import React from 'react'
import Sidenav from '../components/sidenav';
import {  Route } from 'react-router-dom';

function Operaciones() {

    return(
        <div>
             <Route path="AltaPre-Solicitudes"  />
                  <Route path="ActualizacionPre-Solicitudes"  />
                  <Route path="ActualizacionOperaciones"  />
                  <Route path="AltadeCartera"  />
                  <Route path="Agrup-adj-pedidos-entregas"  />
                  <Route exact path="Scoring" element={<Scoring/>}  />
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
                  <Route path="*" element={<Missing />} />
        </div>
    )

}

export default Operaciones;