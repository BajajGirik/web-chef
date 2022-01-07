import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../constants";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import { Avatar } from "@mui/material";
import { connect } from "react-redux";
import { logout } from "../../state/user/userActions";

function Navbar(props) {
  const [isMobNavOpen, setIsMovNavOpen] = useState(false);
  const { isLoggedIn, displayName, photoURL, dispatch } = props;

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
              ? "Navbar-list-container flex al-center side-nav-open"
              : "Navbar-list-container flex al-center"
          }
        >
          {NAV_ITEMS.map(({ to, displayText }) => (
            <li key={displayText} className="Navbar-list-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link nav-active" : "link"
                }
                to={to}
                onClick={() => setIsMovNavOpen(false)}
              >
                {displayText}
              </NavLink>
            </li>
          ))}

          <li className="Navbar-list-item">
            {isLoggedIn ? (
              <Avatar
                src={photoURL}
                alt={displayName[0]}
                onClick={() => dispatch(logout())}
              />
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link nav-active" : "link"
                }
                to="/auth/log-in"
                onClick={() => setIsMovNavOpen(false)}
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    isLoggedIn: state?.isLoggedIn,
    displayName: state?.data?.displayName,
    photoURL: state?.data?.photoURL,
  };
}

export default connect(mapStateToProps)(Navbar);
