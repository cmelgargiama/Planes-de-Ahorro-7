import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AsignacionDeDatos from './compraRescindidos/asignacionDeDatos';
import EstadoDeLaGestion from './compraRescindidos/estadoDeLaGestion';
import GestionDeDatos from './compraRescindidos/gestionDeDatos';
import ImportacionDeDatos from './compraRescindidos/importacionDeDatos';
import Oficiales from './compraRescindidos/oficiales';
import Missing from './missing';

function CompraRescindidos() {

    return (
        <div>
            <Routes>
                <Route path="Oficiales" element={<Oficiales/>} />
                <Route path="EstadoDeLaGestion" element={<EstadoDeLaGestion/>} />
                <Route path="GestionDeDatos" element={<GestionDeDatos/>} />
                <Route path="AsignacionDeDatos" element={<AsignacionDeDatos/>} />
                <Route path="ImportacionDeDatos" element={<ImportacionDeDatos/>}  />
                <Route path="*" element={<Missing />} />       
            </Routes>
        </div>
    )

}

export default CompraRescindidos;