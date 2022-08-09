import React from 'react'
import {Route, Routes } from 'react-router-dom';
import Missing from './missing';
import GeneracionTXTAcreditacionHaberes from './personal/GeneracionTXTAcreditacionHaberes';
import ImportacionDeSueldos from './personal/importacionDeSueldos';
import Legajos from './personal/legajos';
import Reportes from './personal/reportes';

function Personal() {

    return (
        <div>
            <Routes>
                <Route path="Legajos" element={<Legajos/>}  />
                <Route path="Reportes" element={<Reportes/>}  />
                <Route path="ImportaciondeSueldos" element={<ImportacionDeSueldos/>} />
                <Route path="GeneracionTXTAcreditacionHaberes" element={<GeneracionTXTAcreditacionHaberes/>} />
                <Route path="*" element={<Missing/>}  />           
            </Routes>        
        </div>
    )

}

export default Personal;