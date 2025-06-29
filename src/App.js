import React from "react";
import "./App.css";
import Home from "./Home/home";
import Navbar from "./Navbar/navbar";
import Bottombar from "./Bottombar/bottombar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Bottombar />
    </>
  );
}

export default App;
