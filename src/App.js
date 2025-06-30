import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/home";
import About from "./About/about";
import Navbar from "./Navbar/navbar";
import Bottombar from "./Bottombar/bottombar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Bottombar />
    </Router>
  );
}

export default App;
