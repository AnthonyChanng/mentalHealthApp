import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar-outer">
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="navbar-left">
            <span className="navbar-title">Mindful</span>
            <ul className="navbar-links">
              <li className={location.pathname === "/" ? "active" : ""}>
                <Link to="/">Home</Link>
              </li>
              <li className={location.pathname === "/about" ? "active" : ""}>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <Link to="/login" className="login-btn-link">
              <button className="login-btn">Log In</button>
            </Link>
            <Link to="/signUp" className="signUp-btn-link">
              <button className="get-started-btn">Get Started</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
