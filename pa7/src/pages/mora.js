import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AsignacionDeMora from './mora/asignacionDeMora';
import ColaDeLlamadosDeMoraEspecializada from './mora/colaDeLlamadosMoraEspecializada';
import ColaDeLlamadosDeMoraTemprana from './mora/colaDeLlamadosMoraTemprana';
import CuadroDePerformance from './mora/cuadroDePerformance';
import CuotasEncuadre from './mora/cuotasEncuadre';
import GestionMoraEspecializada from './mora/gestionMoraEspecializada';
import GestionMoraTemprana from './mora/gestionMoraTemprana';
import MoraTecnica from './mora/moraTecnica';
import RecuperoCuotasEncuadre from './mora/recuperoCuotasEncuadre';
import ReportePagosyRecuperosEncuadre from './mora/reportePagosyRecuperosEncuadre';
import Missing from './missing';

function Mora() {

    return (
        <Routes>
            <Route path="CuotasEncuadre" element={<CuotasEncuadre/>} />
            <Route path="RecuperoCuotasEncuadre" element={<RecuperoCuotasEncuadre/>} />
            <Route path="ReportePagosyRecuperosEncuadre" element={<ReportePagosyRecuperosEncuadre/>} />
            <Route path="CuadrodePerformance" element={<CuadroDePerformance/>} />
            <Route path="AsignaciondeMora" element={<AsignacionDeMora/>}  />
            <Route path="MoraTecnica" element={<MoraTecnica/>} />
            <Route path="GestionMoraTemprana" element={<GestionMoraTemprana/>} />
            <Route path="GestionMoraEspecializada" element={<GestionMoraEspecializada/>} />
            <Route path="ColadeLlamadosdeMoraTemprana" element={<ColaDeLlamadosDeMoraTemprana/>} />
            <Route path="ColadeLlamadosdeMoraEspecializada" element={<ColaDeLlamadosDeMoraEspecializada/>} />
            <Route path="*" element={<Missing />} />       
        </Routes>
    )

}

export default Mora;