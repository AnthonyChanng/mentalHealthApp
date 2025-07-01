import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./Home/home";
import About from "./About/about";
import Navbar from "./Navbar/navbar";
import Bottombar from "./Bottombar/bottombar";
import Login from "./Login/login";
import SignUp from "./SignUp/signUp";
import UserHome from "./UserHome/userHome";
function AppContent() {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const isSignUp = location.pathname === "/signUp";
  const isUserHome = location.pathname === "/userHome";
  return (
    <>
      {!isLogin && !isSignUp && !isUserHome && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/userHome" element={<UserHome />} />
      </Routes>
      {!isLogin && !isSignUp && !isUserHome && <Bottombar />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
