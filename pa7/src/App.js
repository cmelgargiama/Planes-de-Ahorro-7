import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InicioPage from './pages/inicioPage.js';
import { BrowserRouter, Routes, Route, NavLink, Switch } from 'react-router-dom';
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
import { UserContext } from './context/UserContext';
import { useState, useContext } from 'react';
import GlobalState from './context/globalState.js'
import RequireAuth from './utils/RequireAuth';
import Missing from "./pages/missing";

const App = (props) => {
  const [userLogin, setUserLogin] = useState(false)
  const context = useContext(UserContext)

  return (<div className="App">

    <div>
      <GlobalState>
        <BrowserRouter>
          <div className="content"  >

            <Routes>
              <Route path="/" element={<InicioPage />} />
              <Route path="/home" element={<HomePage />} />

            <Route element={<RequireAuth allowedRoles={[2]} />}>
              <Route exact path="/operaciones/" element={<Operaciones />}>
              <Route path="*" element={<Missing />} />
            </Route>

            <Route path="/mesadeplanes/" element={<MesaDePlanes />}>
              <Route path="*" element={<Missing />} />
            </Route >

            <Route path="/mora/" element={<Mora />}>
              <Route path="*" element={<Missing />} />
            </Route>

            <Route path="/callcenter/" element={<CallCenter />}>
              <Route path="*" element={<Missing />} />
            </Route>

            <Route path="/personal/" element={<Personal />}>
              <Route path="*" element={<Missing />} />
            </Route>

            <Route path="/emprendedores/" element={<Emprendedores />}>
              <Route path="*" element={<Missing />} />
            </Route>

            <Route path="/configuracion/" element={<ConfigDatos />}>
              <Route path="*" element={<Missing />} />
            </Route>

            <Route path="/contabilidad/" element={<Contabilidad />}>
              <Route path="*" element={<Missing />} />
            </Route>

            <Route path="/reportes" element={<Reportes />} />
                    
            <Route path="/plansubite/" element={<PlanSubite />}>
              <Route path="*" element={<Missing />} />
            </Route>

            <Route path="/entregasConvencionales/" element={<EntregasConvencionales />}>
              <Route path="*" element={<Missing />} />
            </Route>

            <Route path="/compra/" element={<CompraRescindidos />}>
              <Route path="*" element={<Missing />} />
            </Route>
                    
            <Route path="/usados/" element={<Usados />}>
              <Route path="*" element={<Missing />} />
            </Route>
                    
            <Route path="/stockvehiculos" element={<StockVehiculos />} />

            <Route path="/seguros" element={<Seguros />} />
                    
            </Route>
            {/*catch all*/}
            <Route path="*" element={<Missing />} />
        </Routes>

        </div>
        </BrowserRouter>
      </GlobalState>

      </div>
      </div>
  );
  
};


export default App;