import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Work" element={<Work />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
