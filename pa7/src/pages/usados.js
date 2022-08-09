import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Missing from './missing';
import AnalisisIngresoEgreso from './usados/analisisIngresoEgreso';
import CapitalVehiculosUsados from './usados/capitalVehiculosUsados';
import CargaTasaPorTenencia from './usados/cargaTasaPorTenencia';
import ControlPrecioToma from './usados/controlPrecioToma';
import Cotizaciones from './usados/cotizaciones';
import CotizacionesGenerales from './usados/cotizacionesGenerales';
import EgresoDeUnidadesYVentas from './usados/egresoDeUnidadesYVentas';
import ListadoParaVentas from './usados/listadoParaVentas';
import ListadoParaVentasInterempresa from './usados/listadoParaVentasInterempresa';
import ResumenUsadosInterempresa from './usados/resumenUsadosInterempresa';
import StockInterempresa from './usados/stockInterempresa';
import UnidadesAprobadasConvencionalARecibir from './usados/unidadesAprobadasConvencionalARecibir';
import UnidadesAprobadasPlanDeAhorroARecibir from './usados/unidadesAprobadasConvencionalARecibir';
import VendedoresUsados from './usados/vendedoresUsados';
import VentasInterempresa from './usados/ventasInterempresa';

function Usados() {

    return (
        <div>
            <Routes>
                <Route path="Cotizaciones" element={<Cotizaciones/>} />
                <Route path="CotizacionesGenerales" element={<CotizacionesGenerales/>} />
                <Route path="UnidadesAprobadasPlanDeAhorroARecibir" element={<UnidadesAprobadasPlanDeAhorroARecibir/>} />
                <Route path="UnidadesAprobadasConvencionalARecibir" element={<UnidadesAprobadasConvencionalARecibir/>} />
                <Route path="ResumenUsadosInterempresa" element={<ResumenUsadosInterempresa/>} />
                <Route path="CargaTasaPorTenencia" element={<CargaTasaPorTenencia/>} />
                <Route path="AnalisisIngresoEgreso" element={<AnalisisIngresoEgreso/>} />
                <Route path="Stock" element={<Stock/>} />
                <Route path="StockInterempresa" element={<StockInterempresa/>} />
                <Route path="EgresoDeUnidadesYVentas" element={<EgresoDeUnidadesYVentas/>} />
                <Route path="VentasInterempresa" element={<VentasInterempresa/>} />
                <Route path="ListadoParaVentas" element={<ListadoParaVentas/>} />
                <Route path="ListadoParaVentasInterempresa" element={<ListadoParaVentasInterempresa/>} />
                <Route path="VendedoresUsados" element={<VendedoresUsados/>} />
                <Route path="ControlPrecioToma" element={<ControlPrecioToma/>} />
                <Route path="CapitalVehiculosUsados" element={<CapitalVehiculosUsados/>} />
                <Route path="*" element={<Missing />} />       
            </Routes>
        </div>
    )

}

export default Usados;