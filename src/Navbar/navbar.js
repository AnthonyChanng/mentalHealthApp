import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-outer">
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="navbar-left">
            <span className="navbar-title">Mindful</span>
            <ul className="navbar-links">
              <li className="active">Home</li>
              <li>About</li>
              <li>Community</li>
            </ul>
          </div>
          <div className="navbar-right">
            <button className="login-btn">Log In</button>
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
