import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AltaYModificacionDeConvencionales from './entregasConvencionales/altaYModificacionDeConvencionales';
import SeguimientoService from './entregasConvencionales/seguimientoService';
import Turnos from './entregasConvencionales/turnos';
import Missing from './missing';

function EntregasConvencionales() {

    return (
        <div>
            <Routes>
                <Route path="AltaYModificacionDeConvencionales" element={<AltaYModificacionDeConvencionales/>} />
                <Route path="Turnos" element={<Turnos/>} />
                <Route path="SeguimientoService" element={<SeguimientoService/>} />
                <Route path="*" element={<Missing />} />       
            </Routes>
        </div>
    )

}

export default EntregasConvencionales;