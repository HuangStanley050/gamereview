import React from "react";
import logo from "../../img/logo.svg";
const NavBar = () => {
  return (
    <nav className="z-depth-0 blue lighten-4">
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo">
          <h5>Game Review</h5>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li classNameclassName="logged-in">
            <a
              href="#"
              className="grey-text modal-trigger"
              data-target="modal-account"
            >
              Account
            </a>
          </li>
          <li className="logged-in">
            <a href="#" className="grey-text" id="logout">
              Logout
            </a>
          </li>
          <li className="logged-in">
            <a
              href="#"
              className="grey-text modal-trigger"
              data-target="modal-create"
            >
              Create Guide
            </a>
          </li>
          <li className="logged-out">
            <a
              href="#"
              className="grey-text modal-trigger"
              data-target="modal-login"
            >
              Login
            </a>
          </li>
          <li className="logged-out">
            <a
              href="#"
              className="grey-text modal-trigger"
              data-target="modal-signup"
            >
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
