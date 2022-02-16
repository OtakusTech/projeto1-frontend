import React from 'react';

import {Routes, Route, Navigate} from 'react-router';

const PrivateRoute = props => {
    const isLogged = !!localStorage.getItem('auth-token')
    return isLogged ? <Route {... props}/> : <Navigate to="/"/>

}

export default PrivateRoute;