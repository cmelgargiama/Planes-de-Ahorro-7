import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Circulares from './emprendedores/circulares';

function Emprendedores() {

    return (
        <div>
            <Routes>
                <Route path="Circulares" element={<Circulares/>}/>
            </Routes>
        </div>
    )

}

export default Emprendedores;