import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => getToken() ? <Component {...props} /> : <Navigate to={{ pathname: '/', state: { from: props.location } }} />}
      />
    )
  }
   
  export default PrivateRoute;