import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import LoginPage from './pages/loginPage.js';
import Sidenav from './components/sidenav';
import InicioPage from './pages/inicioPage.js';
import {BrowserRouter, Routes, Route,  NavLink, Switch} from 'react-router-dom';
import Operaciones from './pages/operaciones';
import MesaDePlanes from './pages/mesaDePlanes';
import Mora from './pages/mora';
import CallCenter from './pages/callCenter';
import Personal from './pages/personal';
import Emprendedores from './pages/emprendedores';
import ConfigDatos from './pages/configDatos';
import Contabilidad from './pages/contabilidad';
import Reportes from './pages/reportes';
import PlanSubite from './pages/planSubite';
import EntregasConvencionales from './pages/entregasConvencionales';
import CompraRescindidos from './pages/compraRescindidos';
import Usados from './pages/usados';
import StockVehiculos from './pages/stockVehiculos';
import Seguros from './pages/seguros';
import HomePage from './pages/homePage';
import PrivateRoute  from './utils/PrivateRoute'
import PublicRoute  from './utils/PublicRoute'
import { Container } from 'react-bootstrap';
import { UserContext } from './context/UserContext';
import { useState } from 'react';
import GlobalState from './context/globalState.js'


const App = (props) => {
  const [userLogin, setUserLogin] = useState(false)



  return ( <div className="App">
  
    <div>
    <GlobalState>
    <BrowserRouter>
      <div className="content"  >
           
   <Routes>
   <Route path="/" element={<InicioPage/>}/>  
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
          
        
         
        
        
      </div>
      </BrowserRouter>
      </GlobalState>
      
    </div>
    
 
</div>
  );
  
};


export default App;


  