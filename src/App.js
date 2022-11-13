import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About"
import Skills from "./components/Skills"
import Hire from "./components/Hire"
import Projects from "./components/Projects"
import { BrowserRouter , Route, Routes } from "react-router-dom";
import {AiFillGithub} from 'react-icons/ai'
import {IoLogoInstagram} from 'react-icons/io'
import {FaFacebookF} from 'react-icons/fa'
function App() {
  return (
    <>
    <div class="wrapper">
   <BrowserRouter>
   <Navbar />
      <Routes>
       <Route path="/" element={<About/>} />
       <Route path="hire/*" element={<Hire/>} />
        <Route path="projects/*" element={<Projects/>} />
        <Route path="skills/*" element={<Skills/>} />
        
      </Routes>
    </BrowserRouter>
    <div class="push"></div>
  </div>
  <footer style={{backgroundColor:'#ffffff30'}} class="footer">
     <FaFacebookF style={{cursor: 'pointer', marginTop: '0.7rem', marginRight:'2rem'}} onClick={() => window.open("https://www.instagram.com/lil__flopper/")} className="p-1 w-9 h-9 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"  />
      <IoLogoInstagram style={{cursor: 'pointer', marginTop: '0.7rem', marginRight:'2rem'}} onClick={() => window.open("https://www.instagram.com/lil__flopper/")} className="p-1 w-9 h-9 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"  />
     <AiFillGithub style={{cursor: 'pointer',marginTop: '0.7rem', marginRight:'2rem'}} onClick={() => window.open("https://github.com/A5apFloki")} className="p-1 w-9 h-9 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"  />
    </footer>
  </>
  );
}

export default App;
