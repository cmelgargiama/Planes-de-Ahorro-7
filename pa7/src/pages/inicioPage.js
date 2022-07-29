import React, {Component, useEffect, useState} from 'react';
import Sidenav from '../components/sidenav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Operaciones from './operaciones';
import MesaDePlanes from './mesaDePlanes';
import Mora from './mora';
import CallCenter from './callCenter';
import Personal from './personal';
import Emprendedores from './emprendedores';
import ConfigDatos from './configDatos';
import Contabilidad from './contabilidad';
import Reportes from './reportes';
import PlanSubite from './planSubite';
import EntregasConvencionales from './entregasConvencionales';
import CompraRescindidos from './compraRescindidos';
import Usados from './usados';
import StockVehiculos from './stockVehiculos';
import Seguros from './seguros';
import HomePage from './homePage';



function InicioPage(){

 

    return(
   
   <BrowserRouter>
    <Sidenav>
    <Routes>
   <Route path="/home" element={<HomePage/>}/>  
  <Route path="/operaciones" element={<Operaciones/>}/>
  <Route path="/mesadeplanes" element={<MesaDePlanes/>}/>
  <Route path="/mora" element={<Mora/>}/>
  <Route path="/callcenter" element={<CallCenter/>}/>
  <Route path="/personal" element={<Personal/>}/>
  <Route path="/emprendedores" element={<Emprendedores/>}/>
  <Route path="/configuracion" element={<ConfigDatos/>}/>
  <Route path="/contabilidad" element={<Contabilidad/>}/>
  <Route path="/reportes" element={<Reportes/>}/>
  <Route path="/plansubite" element={<PlanSubite/>}/>
  <Route path="/entregas" element={<EntregasConvencionales/>}/>
  <Route path="/compra" element={<CompraRescindidos/>}/>
  <Route path="/usados" element={<Usados/>}/>
  <Route path="/stockvehiculos" element={<StockVehiculos/>}/>
  <Route path="/seguros" element={<Seguros/>}/>
  </Routes>

    </Sidenav>
    </BrowserRouter>
   )




        
       
    

}

export default InicioPage;