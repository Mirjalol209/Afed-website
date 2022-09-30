
import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Offer from "./pages/Offer/Offer";
import Contact from "./pages/Contact/Contact";
import Primelist from "./pages/Primelist/Primelist"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/primelist" element={<Primelist />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
