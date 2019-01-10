import React from "react";
import { toggle_modal } from "../../store/actions/modalActions";
import { connect } from "react-redux";

const NavBar = props => {
  return (
    <nav className="z-depth-0 blue lighten-2">
      <div className="nav-wrapper container">
        <a className="brand-logo">
          <h5>Game Review</h5>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li classNameclassName="logged-in">
            <a
              onClick={() => props.toggle("account")}
              className="white-text modal-trigger"
              data-target="modal-account"
            >
              Account
            </a>
          </li>
          <li className="logged-in">
            <a
              onClick={() => props.toggle("logout")}
              className="white-text"
              id="logout"
            >
              Logout
            </a>
          </li>
          <li className="logged-in">
            <a
              onClick={() => props.toggle("create")}
              className="white-text modal-trigger"
              data-target="modal-create"
            >
              Create Review
            </a>
          </li>
          <li className="logged-out">
            <a
              onClick={() => props.toggle("login")}
              className="white-text modal-trigger"
              data-target="modal-login"
            >
              Login
            </a>
          </li>
          <li className="logged-out">
            <a
              onClick={() => props.toggle("sign up")}
              className="white-text modal-trigger"
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

const mapDispatchToProps = dispatch => {
  return {
    toggle: mType => dispatch(toggle_modal(mType))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(NavBar);
