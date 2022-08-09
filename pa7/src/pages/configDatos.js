import React from 'react'
import { Route,Routes } from 'react-router-dom';
import CambioDeContrasena from './configuracionDatos/cambioDeContrasena';
import CambioDeContrasenaDeSueldo from './configuracionDatos/cambioDeContrasenaDeSueldo';
import CambioDeModelo from './configuracionDatos/cambioDeModelo';
import EntregaAsegurada from './configuracionDatos/entregaAsegurada';
import EstructuraComercial from './configuracionDatos/estructuraComercial';
import Intereses from './configuracionDatos/intereses';
import ListasDePrecio from './configuracionDatos/listasDePrecio';
import Modelos from './configuracionDatos/modelos';
import ObjAltasBajasMesaDePlanes from './configuracionDatos/objAltasBajasMesaDePlanes';
import ObjGrupoMora from './configuracionDatos/objetivosGrupoMora';
import ObjetivosMora from './configuracionDatos/objetivosMora';
import ObjetivosPorMarca from './configuracionDatos/objetivosPorMarca';
import Oficiales from './configuracionDatos/oficiales';
import Parametros from './configuracionDatos/parametros';
import PuntosDeVenta from './configuracionDatos/puntosDeVenta';
import Sucursales from './configuracionDatos/sucursales';
import Supervisores from './configuracionDatos/supervisores';
import TeamLeader from './configuracionDatos/teamLeader';
import Usuarios from './configuracionDatos/usuarios';
import Vendedores from './configuracionDatos/vendedores';

function ConfigDatos() {

    return (
        <div>
             <Routes>
                <Route path="Vendedores" element={<Vendedores/>} />
                <Route path="CambioDeModelo" element={<CambioDeModelo/>} />
                <Route path="ObjAltasBajasMesaDePlanes" element={<ObjAltasBajasMesaDePlanes/>} />
                <Route path="Parametros" element={<Parametros/>} />
                <Route path="Modelos" element={<Modelos/>} />
                <Route path="ObjetivosMora" element={<ObjetivosMora/>} />
                <Route path="ObjGrupoMora" element={<ObjGrupoMora/>} />
                <Route path="CambioDeContrasenaDeSueldo" element={<CambioDeContrasenaDeSueldo/>} />
                <Route path="EstructuraComercial" element={<EstructuraComercial/>} />
                <Route path="ObjetivosPorMarca" element={<ObjetivosPorMarca/>} />
                <Route path="CambioDeContrasena" element={<CambioDeContrasena/>} />
                <Route path="Gerentes" element={<Gerentes/>} />
                <Route path="Sucursales" element={<Sucursales/>} />
                <Route path="Usuarios" element={<Usuarios/>} />
                <Route path="Supervisores" element={<Supervisores/>} />
                <Route path="PuntosDeVenta" element={<PuntosDeVenta/>} />
                <Route path="Intereses" element={<Intereses/>} />
                <Route path="TeamLeader" element={<TeamLeader/>} />
                <Route path="ListasDePrecio" element={<ListasDePrecio/>} />
                <Route path="Oficiales" element={<Oficiales/>} />
                <Route path="EntregaAsegurada" element={<EntregaAsegurada/>} />
                <Route path="*" element={<Missing />} />       
            </Routes>
        </div>
    )

}

export default ConfigDatos;