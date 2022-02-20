import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/profile';
import ProfileEditing from "./pages/profile/edit";

const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <></>},
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/home", element: <Home /> },
    { path: "/profile/:id", element: <Profile />},
    { path: "/profile/:id/edit", element: <ProfileEditing />}
    // { path: "/user/:id", element: <PrivateRoute component={<Profile />}/>}
  ]);
  return routes;
};

const RoutesMain = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default RoutesMain;