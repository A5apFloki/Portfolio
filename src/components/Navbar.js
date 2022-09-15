import {Link } from "react-router-dom";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa"
import { VscChromeClose } from "react-icons/vsc"
import "./navbar.css";

function Navbar(){
    const [ Mobile , setMobile ] = useState ( false )

    return(
       <nav className='navbarrr'>
       <div className='container'>
       <svg className="logooo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
       <ul className={Mobile? "nav-links-mobile":"nav-links"} onClick={() =>setMobile(false)}>
     
          <Link to='/' >
            <li>About Me</li>
          </Link>
          <Link to='/projects' >
            <li>Projects</li>
          </Link>
          <Link to='/skills' >
            <li>Skills</li>
          </Link>
          <Link to='/contact' onClick={() => window.open("https://linktr.ee/a5apfloki")}>
            <li>contact</li>
          </Link>
        </ul>
        </div>
        <button className="mobile-menu-icon" onClick ={( ) => setMobile (!Mobile)}> 
        { Mobile ? <VscChromeClose/> :<FaBars/>}
            
        </button>
       </nav>
    );
}

export default Navbar;