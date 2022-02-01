import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NAV_DROPDOWNS, NAV_ITEMS, ROUTES } from "../../utils/constants";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import { connect } from "react-redux";
import { Avatar } from "@mui/material";
import { logout } from "../../state/user/userActions";

function Navbar(props) {
  const [isMobNavOpen, setIsMovNavOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, email, dispatch } = props;

  return (
    <>
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
                  to={to}
                  className={({ isActive }) =>
                    isActive ? "link nav-active" : "link"
                  }
                  onClick={() => setIsMovNavOpen(false)}
                >
                  {displayText}
                </NavLink>
              </li>
            ))}

            <li className="Navbar-list-item Navbar-dropdown-container">
              <span className="link">
                <Avatar>{email && email[0]}</Avatar>
              </span>
              <div className="flex-c al-center">
                {NAV_DROPDOWNS.map(({ to, displayText }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      isActive ? "link dropdown-active" : "link"
                    }
                    onClick={() => setIsMovNavOpen(false)}
                  >
                    {displayText}
                  </NavLink>
                ))}
                <NavLink
                  to={ROUTES.LOGIN}
                  className="link"
                  onClick={() => {
                    setIsMovNavOpen(false);
                    isLoggedIn && dispatch(logout());
                  }}
                >
                  Logout
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
        {/* <button
          className="Navbar-CTA-btn"
          onClick={() => {
            setIsMovNavOpen(false);
            isLoggedIn ? dispatch(logout()) : navigate(ROUTES.LOGIN);
          }}
        >
          {isLoggedIn ? "Profile" : "Login"}
        </button> */}
      </nav>
      <div className="nav-height"></div>
    </>
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
