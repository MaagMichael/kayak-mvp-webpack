
// npm i react-router-dom

import React from "react";
// import react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Mission from "./components/Mission";
// import Tours from "./components/Tours";
// import Faq from "./components/Faq";
// import Contact from "./components/Contact";

import './App.css';

function App() {
  return (
    <div>
      
      
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route element={<Home />} path="/" exact />
            {/* <Route path="/mission" element={<Mission />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />   */}
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
