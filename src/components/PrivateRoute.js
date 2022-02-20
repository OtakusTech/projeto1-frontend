import React from 'react';

import {Route, Navigate} from 'react-router';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isLogged = !!localStorage.getItem('auth-token')

    return isLogged ? <Route {...rest} element={<Component />}/> : <Navigate to="/"/>

}

export default PrivateRoute;