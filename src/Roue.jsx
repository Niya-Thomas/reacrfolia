import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home'; // Assuming you have these components
import About from './About'; 
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import Page from './Page';


const Roue = () => {
  return (
    <BrowserRouter>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />



        
      </Routes>
     
    </BrowserRouter>
  );
};

export default Roue;
