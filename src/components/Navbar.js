import {Link } from "react-router-dom";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa"
import { VscChromeClose } from "react-icons/vsc"
import "./navbar.css";

function Navbar(){
    const [ Mobile , setMobile ] = useState ( false )

    return(
       <nav className='navbar'>
       <div className='container'>
       <h1 className='logo'>Hello!</h1>
       <ul className={Mobile? "nav-links-mobile":"nav-links"} onClick={() =>setMobile(false)}>

          <Link to='/about' >
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