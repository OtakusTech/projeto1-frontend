import React from 'react';

import {Route, Navigate} from 'react-router';
import { isAuthenticated } from './../services/auth';

const PrivateRoute = ({ component: Component }) => {

    // const render = () => {
        return (
            isAuthenticated() ? (
                <Component />
              ) : (
                <Navigate to={{ pathname: '/'}} />
              )
        );
    // };

    // return render();
}
export default PrivateRoute;