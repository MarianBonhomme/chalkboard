import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import School from "./pages/School";
import Pro from "./pages/Pro";
import Hobbie from "./pages/Hobbie";
import Contact from "./pages/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/school" element={<School />}></Route>
        <Route path="/pro" element={<Pro />}></Route>
        <Route path="/hobbie" element={<Hobbie />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
