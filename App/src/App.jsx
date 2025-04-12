import { Outlet } from "react-router-dom";
import React from 'react';
import './index.css'; 
import 'flowbite'
import {Button} from "flowbite-react"
import Header from "./components/Header";
import { useContext, createContext } from "react";
import { useState } from "react";



export const HamburgerContext = createContext();
export const PageContext = createContext();

function App() {


  return (

    <div className="min-h-screen flex flex-col items-stretch items-center justify-between bg-gradient-to-t from-indigo-500 to-slate-100 ">

          <div className=" bg-red-200"> 
            <Header/>
          </div>


      <div className=" flex-grow  justify-around flex flex-col" >
            <Outlet />
      </div>

      <div className="bg-blue-900 h-1" > </div>


    </div>
  );
}

export default App;


