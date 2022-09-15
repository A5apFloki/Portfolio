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
         <header className="para">Hello! 👋
         <p className="para">Am Gouaidia Seif Eddine a front end developer, Designer, Student and a Freelancer located in      Annaba Algeria .</p></header>
         
       </div>


      
    </div>
  
  );
}

export default About;