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
import { UserContext } from '../context/UserContext';
import LoginPage from './loginPage';



function InicioPage(props){

 

    return(
   
   
   
      <UserContext.Provider>
        {!props.userLogin &&
        <LoginPage/> }
              
        {props.userLogin &&
      <div>
    <Sidenav>
   <HomePage/>
   

    </Sidenav>
    </div>}
    </UserContext.Provider>
    


   
   )




        
       
    

}

export default InicioPage;