
import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Offer from "./pages/Offer/Offer";
import Contact from "./pages/Contact/Contact";
import Pricelist from "./pages/Pricelist/Pricelist"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/pricelist" element={<Pricelist />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;