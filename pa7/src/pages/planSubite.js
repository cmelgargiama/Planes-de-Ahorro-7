import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Missing from './missing';
import AsignacionDeDatos from './planSubite/asignacionDeDatos';
import EstadoDeLaGestion from './planSubite/estadoDeLaGestion';
import GestionDeDatos from './planSubite/gestionDeDatos';
import ImportacionDeDatos from './planSubite/importacionDeDatos';
import ImportacionDeHN from './planSubite/importacionDeHN';
import Oficiales from './planSubite/oficiales';
import ReporteDeAsignacionesPorPeriodo from './planSubite/reporteDeAsignacionesPorPeriodo';
import ReporteDeCompras from './planSubite/reporteDeCompras';

function PlanSubite() {

    return (
        <Routes>    
            <Route path="Oficiales" element={<Oficiales/>} />
            <Route path="ReporteDeCompras" element={<ReporteDeCompras/>} />
            <Route path="ImportacionDeDatos" element={<ImportacionDeDatos/>} />
            <Route path="GestionDeDatos" element={<GestionDeDatos/>} />
            <Route path="AsignacionDeDatos" element={<AsignacionDeDatos/>} />
            <Route path="EstadoDeLaGestion" element={<EstadoDeLaGestion/>} />
            <Route path="ReporteDeAsignacionesPorPeriodo" element={<ReporteDeAsignacionesPorPeriodo/>} />
            <Route path="ImportacionDeHN" element={<ImportacionDeHN/>} />
            <Route path="*" element={<Missing/>}  />           
        </Routes>
    )

}

export default PlanSubite;