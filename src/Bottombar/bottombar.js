import React from "react";
import { Link } from "react-router-dom";
import "./bottombar.css";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { TfiLinkedin } from "react-icons/tfi";

const Bottombar = () => {
  return (
    <footer className="bottombar">
      <div className="bottombar-content">
        <div className="bottombar-links">
          <div className="bottombar-col">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="bottombar-social">
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            className="bottombar-icon"
          >
            <FaInstagram size={22} color="#2351c6" />
          </a>
          <a href="https://x.com/" aria-label="X" className="bottombar-icon">
            <RiTwitterXFill size={22} color="#2351c6" />
          </a>
          <a
            href="https://www.linkedin.com/"
            aria-label="LinkedIn"
            className="bottombar-icon"
          >
            <TfiLinkedin size={22} color="#2351c6" />
          </a>
        </div>
      </div>
      <div className="bottombar-bottom">
        <span className="bottombar-copyright">
          Copyright © 2025 Mindful. All Rights Reserved.
        </span>
        <div className="bottombar-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
