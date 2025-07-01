import React from "react";
import { NavLink } from "react-router-dom";
import "./sideNavbar.css";

const navSections = [
  { label: "Home", to: "/userHome" },
  { label: "Bulletin Board", to: "/bulletinBoard" },
  { label: "Quotes", to: "/quotes" },
  { label: "Journal", to: "/journal" },
  { label: "Account", to: "/account" },
];

export default function SideNavbar() {
  return (
    <nav className="side-navbar">
      <ul>
        {navSections.map((section) => (
          <li key={section.to}>
            <NavLink
              to={section.to}
              className={({ isActive }) =>
                isActive ? "side-navbar-link active" : "side-navbar-link"
              }
            >
              {section.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
