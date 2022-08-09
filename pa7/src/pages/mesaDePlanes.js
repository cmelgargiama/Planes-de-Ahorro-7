import React from 'react'
import {  Route , Routes} from 'react-router-dom';
import MesaDePlanesPage from './mesaDePlanes/mesaDePlanes.js'
import HaberesNetos from './mesaDePlanes/haberesNetos.js'
import Scoring from './mesaDePlanes/scoring.js'
import StockContable from './mesaDePlanes/stockContable.js'
import StockParaVentas from './mesaDePlanes/stockParaVentas.js'
import GestiondeSenasAcumuladas from './mesaDePlanes/gestionDeSenasAcumuladas.js'
import AutorizadorClasificaciones from './mesaDePlanes/autorizadorClasificaciones.js'
import Missing from "../pages/missing";

function MesaDePlanes() {

    return (
        <div>
                <Routes>
                  <Route path="MesadePlanes" element={<MesaDePlanesPage/>} />
                  <Route path="Scoring" element={<Scoring/>} />
                  <Route path="StockParaVentas" element={<StockParaVentas/>} />
                  <Route path="AutorizadorClasificaciones" element={<AutorizadorClasificaciones/>}  />
                  <Route path="StockContable" element={<StockContable/>} />
                  <Route path="GestiondeSenasAcumuladas" element={<GestiondeSenasAcumuladas/>} />
                  <Route path="HaberesNetos"  element={<HaberesNetos/>}/>
                  <Route path="*" element={<Missing />} />
                </Routes>
        </div>
    )

}

export default MesaDePlanes;