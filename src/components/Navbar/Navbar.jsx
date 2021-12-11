import React from "react";
import "./Navbar.css";
import { Link, useMatch } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="Navbar-container flex al-center j-between">
      <div className="Navbar-logo-container">HOMECHEF</div>
      <div className="Navbar-list-container">
        <ul className="flex">
          <li className="Navbar-list-item">
            <Link
              className={
                useMatch({ path: "/home", end: true })
                  ? "link nav-active"
                  : "link"
              }
              to="/home"
            >
              Home
            </Link>
          </li>
          <li className="Navbar-list-item">
            <Link
              className={
                useMatch({ path: "/about", end: true })
                  ? "link nav-active"
                  : "link"
              }
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li className="Navbar-list-item">
            <Link
              className={
                useMatch({ path: "/cakes", end: true })
                  ? "link nav-active"
                  : "link"
              }
              to="/cakes"
            >
              Cakes
            </Link>
          </li>
          <li className="Navbar-list-item">
            <Link
              className={
                useMatch({ path: "/ladoos", end: true })
                  ? "link nav-active"
                  : "link"
              }
              to="/ladoos"
            >
              Ladoos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
