import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Register from '../pages/register';
import Login from '../pages/login';
import Home from '../pages/home';
import NotFound from '../components/NotFound';
import PrivateRoute from '../components/PrivateRoute';



const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/home", element: <Home /> }
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;