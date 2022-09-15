import React from "react";
import "./movtxt.css";
import "./navbar.css";
function About() {
  return (
    <div>


        <div className="movtxt" >
        <div className="static-txts">A </div>
        <ul className="dynamic-txts" >
        <li><span>Devoloper</span></li>
        <li><span>Designer</span></li>
        <li><span>College Student</span></li>
        <li><span>FreeLancer</span></li>
        </ul>
        </div>
        <div className="paracontainer">
        <div class="flex flex-col space-y-4 ...">
         <header className="para1">
         <span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
         Hello! 
         </span>
         <p className="para">Am Gouaidia Seif Eddine  </p> 
         <p className="para">a front end developer ,Designer , college student </p> 
         <p className="para">and a Freelancer located in Annaba Algeria.</p></header>
         
       </div>
       </div>


      
    </div>
  
  );
}

export default About;