import './App.css';
import Layout from "./Components/Layout";
import Home from './Pages/Home';
import About from "./Pages/About"
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import Education from './Pages/Education';
import Contact from './Pages/Contact';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
