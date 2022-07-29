import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {render} from "react-dom"
import LoginPage from './pages/loginPage.js';
import Sidenav from './components/sidenav';
import InicioPage from './pages/inicioPage.js';
import {BrowserRouter, Routes, Route, NavLink, Switch} from 'react-router-dom';
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


const App = () => {
  return ( <div className="App">
  <BrowserRouter>
    <div>
    
      <div className="content">
        <Routes>
          <Route  path="/" element={<LoginPage/>} />
          <Route path="/inicio" element={<InicioPage/>} />
          <Route path="/home" element={<HomePage/>} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
</div>
  );
  
};

/*<div className="header">
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
        <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
      </div>*/

export default App;


  