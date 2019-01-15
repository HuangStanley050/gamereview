import React from "react";
import { toggle_modal } from "../../store/actions/modalActions";
import { connect } from "react-redux";
import "./navbar.css";

const NavBar = props => {
  return (
    <nav className="z-depth-0 blue lighten-2">
      <div className="nav-wrapper container">
        <a className="brand-logo">
          <h5>Game Review</h5>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className="logged-in">
            <button
              onClick={() => props.toggle("account")}
              className="white-text btn "
              data-target="modal-account"
            >
              Account
            </button>
          </li>
          <li className="logged-in">
            <button
              onClick={() => props.toggle("logout")}
              className="white-text btn"
              id="logout"
            >
              Logout
            </button>
          </li>
          <li className="logged-in">
            <button
              onClick={() => props.toggle("create")}
              className="white-text btn"
              data-target="modal-create"
            >
              Create Review
            </button>
          </li>
          <li className="logged-out">
            <button
              onClick={() => props.toggle("login")}
              className="white-text btn"
              data-target="modal-login"
            >
              Login
            </button>
          </li>
          <li className="logged-out">
            <button
              onClick={() => props.toggle("sign up")}
              className="white-text btn"
              data-target="modal-signup"
            >
              Sign up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggle: mType => dispatch(toggle_modal(mType))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(NavBar);
