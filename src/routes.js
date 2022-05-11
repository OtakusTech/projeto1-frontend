import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

import {Navigate} from 'react-router';

import Login from './pages/login';
import Home from './pages/home';
import Profile from './pages/profile';
import ProfileEditing from "./pages/profile/edit";
import NewAnime from "./pages/anime";
import Anime from "./pages/profile-anime";
import { isAuthenticated } from './services/auth';
import Tags from "./pages/tags";
import AnimesByTag from "./pages/tags/list";
import MainNavbar from "./components/MainNavbar";
import Register from "./pages/register";


const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home />},
    { path: "/tags", element: <Tags />},
    { path: "/tags/:id", element: <AnimesByTag /> },
    { path: "/register", element: (
    !isAuthenticated() ? (
      <Register />
    ) : (
      <Navigate to={{ pathname: '/'}} />
    )
    )},
    { path: "/login", element: (
      !isAuthenticated() ? (
        <Login />
      ) : (
        <Navigate to={{ pathname: '/'}} />
      )
    )},
    { path: "/profile/:id", element: (
      isAuthenticated() ? (
        <Profile />
      ) : (
        <Navigate to={{ pathname: '/'}} />
      )
    )},
    { path: "/profile/:id/edit", element: (
      isAuthenticated() ? (
        <ProfileEditing />
      ) : (
        <Navigate to={{ pathname: '/'}} />
      )
    )},
    { path: "/anime/new", element: (
      isAuthenticated() ? (
        <NewAnime />
      ) : (
        <Navigate to={{ pathname: '/'}} />
      )
    )},
    { path: "/anime/:id", element: <Anime />},
    { path: "/anime/:id/edit", element: (
      isAuthenticated() ? (
        <NewAnime />
      ) : (
        <Navigate to={{ pathname: '/'}} />
      )
    )},
  ]);
  return routes;
};

const RoutesMain = () => {
  return (
    <Router>
      {isAuthenticated() ? <MainNavbar /> : <></>}
      <Routes />
    </Router>
  );
};

export default RoutesMain;