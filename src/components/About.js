import React from "react";
import "./movtxt.css";
import "./navbar.css";
function About() {
  return (
    <div>

        <div className="movtxt" >
        <div className="static-txts">I'm a </div>
        <ul className="dynamic-txts" >
        <li><span>Devoloper</span></li>
        <li><span>Designer</span></li>
        <li><span>College Student</span></li>
        <li><span>FreeLancer</span></li>
        </ul>
        </div>
       <div className="paracontainer">
         <header className="para1">Hello! 👋
         <p className="para">Am Gouaidia Seif Eddine afront end developer, Designer,</p>
         <p className="para">a college student and a Freelancer</p> 
         <p className="para">located in Annaba Algeria.</p></header>
         
       </div>


      
    </div>
  
  );
}

export default About;