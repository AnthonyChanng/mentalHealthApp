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
import BulletinBoard from "./Bulletinboard/bulletinboard";
import Quotes from "./Quotes/quotes";
import Journal from "./Journal/journal";
function AppContent() {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const isSignUp = location.pathname === "/signUp";
  const isUserHome = location.pathname === "/userHome";
  const isBulletinBoard = location.pathname === "/bulletinBoard";
  const isQuote = location.pathname === "/quotes";
  const isJournal = location.pathname === "/journal";
  return (
    <>
      {!isLogin &&
        !isSignUp &&
        !isUserHome &&
        !isQuote &&
        !isJournal &&
        !isBulletinBoard && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/userHome" element={<UserHome />} />
        <Route path="/bulletinBoard" element={<BulletinBoard />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
      {!isLogin &&
        !isSignUp &&
        !isUserHome &&
        !isQuote &&
        !isJournal &&
        !isBulletinBoard && <Bottombar />}
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
