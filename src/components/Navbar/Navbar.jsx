import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../constants";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import { connect } from "react-redux";
import { logout } from "../../state/user/userActions";

function Navbar(props) {
  const [isMobNavOpen, setIsMovNavOpen] = useState(false);
  const { isLoggedIn, dispatch } = props;

  return (
    <nav className="Navbar-container flex al-center j-between">
      <div
        className={
          isMobNavOpen ? "Navbar-box-shadow bg-shadow" : "Navbar-box-shadow"
        }
      ></div>
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
        </ul>
      </div>
      <button
        className="Navbar-CTA-btn"
        to="/auth/log-in"
        onClick={() => {
          isLoggedIn && dispatch(logout());
          setIsMovNavOpen(false);
        }}
      >
        {isLoggedIn ? "Profile" : "Login"}
      </button>
    </nav>
  );
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state?.user?.isLoggedIn,
    email: state?.user?.data?.email,
    photoURL: state?.user?.data?.photoURL,
  };
}

export default connect(mapStateToProps)(Navbar);
