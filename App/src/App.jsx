import { Outlet } from "react-router-dom";
import React from 'react';
import './index.css'; 
import 'flowbite'
import {Button} from "flowbite-react"
import Header from "./components/Header";
import { useContext, createContext } from "react";
import { useState } from "react";
import Footer from "./components/Footer";



export const HamburgerContext = createContext();
export const PageContext = createContext();

function App() {


  return (
  <>

    <Header/>



    <div className="min-h-screen flex flex-col items-stretch items-center justify-between bg-gradient-to-t from-indigo-500 to-slate-100 ">


      <div className=" flex-grow  justify-around flex flex-col" >
            <Outlet />
      </div>
    </div>

    <Footer/>
  </>
  );
}

export default App;


