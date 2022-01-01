import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../constants";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";

function Navbar() {
  const [isMobNavOpen, setIsMovNavOpen] = useState(false);

  return (
    <nav className="Navbar-container flex al-center j-between">
      <div className="Navbar-logo-container">HOMECHEF</div>
      <div className="Navbar-menu-container">
        <div
          className="Navbar-hamburger-icon"
          onClick={() => setIsMovNavOpen(!isMobNavOpen)}
        >
          <MenuIcon />
        </div>

        <ul
          className={
            isMobNavOpen
              ? "Navbar-list-container side-nav-open"
              : "Navbar-list-container"
          }
        >
          {NAV_ITEMS.map(({ to, displayText }) => (
            <li key={displayText} className="Navbar-list-item">
              <NavLink
                className={(props) =>
                  props.isActive ? "link nav-active" : "link"
                }
                to={to}
                onClick={() => setIsMovNavOpen(false)}
              >
                {displayText}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
