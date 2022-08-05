import React, {Component, useEffect, useState} from 'react';
import { UserContext } from '../context/UserContext';



function HomePage(props){

 

    return( <UserContext.Consumer>
        {context=><div className="iniciopage">

<div className="inicio_body">
<h1><b>{context.userInfo.empresa}</b></h1>
<h3>Bienvenido, {context.userInfo.login} a PA7!!!</h3>
<p>Sus roles son: {context.userInfo.roles}</p>
<p>Codigos de rol: {context.userInfo.rl_codigo.slice(0)}</p>

</div>
</div>    
}</UserContext.Consumer>
)








}

export default HomePage;