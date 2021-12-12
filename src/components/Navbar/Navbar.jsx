import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavItems } from "./";
import "./Navbar.css";

function Navbar() {
  const [isMobNavOpen, setIsMovNavOpen] = useState(false);
  const [path, setPath] = useState(window.location.pathname)

  const handleLinkClick = (path) => {
    setIsMovNavOpen(false);
    setPath(path);
  }
  
  return (
    <nav className="Navbar-container flex al-center j-between">
      <div className="Navbar-logo-container">HOMECHEF</div>
      <div className="Navbar-menu-container">
        {/* Add Hamburger and cancel img/svg  */}
        <div
          className="Navbar-hamburger-icon"
          onClick={() => setIsMovNavOpen(!isMobNavOpen)}
        >
          XXX
        </div>

        <ul
          className={
            isMobNavOpen
              ? "Navbar-list-container side-nav-open"
              : "Navbar-list-container"
          }
        >
          {NavItems.map(({ to, displayText }) => (
            <li className="Navbar-list-item">
              <Link
                className={path === to ? "link nav-active" : "link"}
                to={to}
                onClick={() => handleLinkClick(to)}
              >
                {displayText}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
