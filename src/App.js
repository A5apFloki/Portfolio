import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import { BrowserRouter , Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Navbar />
      <Routes>
       <Route path="about/*" element={<About/>} />
        <Route path="projects/*" element={<Projects/>} />
        <Route path="contact/*" element={<Contact/>} />
        <Route path="skills/*" element={<Skills/>} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
