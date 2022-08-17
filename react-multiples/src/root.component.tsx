import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


const Root = () => (
  <BrowserRouter basename="react-multiples">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
)

export default Root