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
import { UserContext } from '../context/UserContext';



function HomePage(props){

 

    return( <UserContext.Consumer>
        {context=><div className="iniciopage">

<div className="inicio_body">
<h3>Bienvenido, {context.userInfo.login} a PA7!!!</h3>
<p>Sus roles son: {context.userInfo.roles}</p>

</div>
</div>    
}</UserContext.Consumer>
)








}

export default HomePage;