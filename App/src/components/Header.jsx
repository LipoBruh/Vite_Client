
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useState } from "react";
//import { useContext } from 'react';
import { useContext } from "react";


//import {HamburgerContext} from '../App'
//import {PageContext} from '../App'

export default function Header() {

  //const hamburgerToggle = useContext(HamburgerContext)
  //const page = useContext(PageContext)
  
  console.log(window.location.pathname)

  return (

    <Navbar fluid className="" >


      <NavbarBrand  href="https://flowbite-react.com">
        <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white px-2">D&D UDEM</span>
      </NavbarBrand>


      <NavbarToggle  />

      <NavbarCollapse>
        <NavbarLink href="/App/"  className={window.location.pathname=="/App/"?"!text-white !underline font-bold":""} >Home</NavbarLink>
        <NavbarLink href="/App/About" className={window.location.pathname=="/App/About"?"!text-white !underline font-bold":""} >About</NavbarLink>
        <NavbarLink href="/App/Events" className={window.location.pathname=="/App/Events"?"!text-white !underline font-bold":""}  >Events</NavbarLink>
        <NavbarLink href="/App/Discord" className={window.location.pathname=="/App/Discord"?"!text-white !underline font-bold":""}  >Discord</NavbarLink>
      </NavbarCollapse>

    </Navbar>
  );
}
