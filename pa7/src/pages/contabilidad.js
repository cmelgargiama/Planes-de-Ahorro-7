import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Bancos from './contabilidad/bancos';
import CentroDeCostos from './contabilidad/centroDeCostos';
import Compras from './contabilidad/compras';
import ContabilidadGeneral from './contabilidad/contabilidadGeneral';
import PatentamientoPlanDeAhorro from './contabilidad/patentamientoPlanDeAhorro';
import Presupuestos from './contabilidad/presupuestos';
import Proveedores from './contabilidad/proveedores';
import Tesoreria from './contabilidad/tesoreria';
import Ventas from './contabilidad/ventas';
import Missing from './missing';

function Contabilidad() {

    return (
        <div>
            <Routes>
                <Route path="Tesoreria" element={<Tesoreria/>} />
                <Route path="Ventas" element={<Ventas/>} />
                <Route path="Bancos" element={<Bancos/>} />
                <Route path="ContabilidadGeneral" element={<ContabilidadGeneral/>} />
                <Route path="Compras" element={<Compras/>} />
                <Route path="CentroDeCostos" element={<CentroDeCostos/>} />
                <Route path="Proveedores" element={<Proveedores/>} />
                <Route path="Presupuestos" element={<Presupuestos/>} />
                <Route path="PatentamientoPlanDeAhorro" element={<PatentamientoPlanDeAhorro/>} />
                <Route path="*" element={<Missing />} />       
            </Routes>
        </div>
    )

}

export default Contabilidad;