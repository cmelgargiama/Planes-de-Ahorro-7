import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AdministracionMailsEnviadosYRecibidos from './callcenter/administracionMailsEnviadosYRecibidos';
import AdministracionSMSEnviadosYRecibidos from './callcenter/administracionSMSEnviadosYRecibidos';
import DefinicionCampanaMails from './callcenter/definicionCampanaMails';
import DefinicionCampanaSMS from './callcenter/definicionCampanaSMS';
import DefinicionVtoFechaAgendadoCampana from './callcenter/definicionVtoFecha';
import EnvioYRecepcionDeMails from './callcenter/envioYRecepcionDeMails';
import EnvioYRecepcionDeSMS from './callcenter/envioYRecepcionDeSMS';
import GeneracionBasesNeotel from './callcenter/generacionBasesNeotel';
import Missing from './missing';

function CallCenter() {

    return (
        <div>
            <Routes>
                <Route path="DefinicionCampanaMails" element={<DefinicionCampanaMails/>} />
                <Route path="DefinicionCampanaSMS" element={<DefinicionCampanaSMS/>} />
                <Route path="GeneracionBasesNeotel" element={<GeneracionBasesNeotel/>} />
                <Route path="EnvioyRecepcionDeMails" element={<EnvioYRecepcionDeMails/>} />
                <Route path="EnvioyRecepcionDeSMS" element={<EnvioYRecepcionDeSMS/>}  />
                <Route path="DefinicionVtoFechaAgendadoCampana" element={<DefinicionVtoFechaAgendadoCampana/>} />
                <Route path="AdministracionMailsEnviadosYRecibidos" element={<AdministracionMailsEnviadosYRecibidos/>} />
                <Route path="AdministracionSMSEnviadosYRecibidos" element={<AdministracionSMSEnviadosYRecibidos/>} />
                <Route path="*" element={<Missing />} />       
            </Routes>
        </div>
    )

}

export default CallCenter;