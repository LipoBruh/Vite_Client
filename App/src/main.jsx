import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {  createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import "./index.css";
import { Navigate } from "react-router-dom";
import Discord from "./pages/Discord";
import ErrorPage from "./pages/ErrorPage";


//const routes = Object.values(BODY.routes).map((route,index) => ({element:<Page route={route} />, path:route.path, index:route.index, name:route.name}));
//const homepage = {element: <Navigate to="/3DModeling" replace />, path:BODY.homepage.path, index:BODY.homepage.index, name:BODY.homepage.name}
//const all = [...routes,homepage]

const routes = [
    {name : "About",path: "/App/About", element:<><div>About</div></>, index:false},
    {name : "Events",path: "/App/Events", element:<><div>Events</div></>, index:false},
    {name : "Discord",path: "/App/Discord", element:<Discord/>, index:false},
    {name : "Error",path: "*", element:<ErrorPage/>, index:false},
]

//Routes or pages that we would like to be managed by React router:
//
//About -> Where to find us, Founders and Members,
//Events -> Api call that displays the timeline of events
//Discord -> Fun way to interact with the chat
//Index

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<div>error</div>

    },
    {
      path:'/App',
      element : <App routes = {routes} />,
      children : routes,

    },
],{
  basename: '/',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)