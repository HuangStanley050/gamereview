import React from "react";
import { toggle_modal } from "../../store/actions/modalActions";
import { connect } from "react-redux";
import { auth_logout } from "../../store/actions/authActions";
import "./navbar.css";

const NavBar = props => {
  return (
    <nav className="z-depth-0 blue lighten-2">
      <div className="nav-wrapper container">
        <a className="brand-logo">
          <h5>Game Review</h5>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {props.auth.isLogin ? (
            <li className="logged-in">
              <button
                onClick={() => props.toggle("account")}
                className="white-text btn "
                data-target="modal-account"
              >
                Account
              </button>
            </li>
          ) : null}
          {props.auth.isLogin ? (
            <li className="logged-in">
              <button
                onClick={() => props.logout()}
                className="white-text btn"
                id="logout"
              >
                Logout
              </button>
            </li>
          ) : null}
          {props.auth.isLogin ? (
            <li className="logged-in">
              <button
                onClick={() => props.toggle("create")}
                className="white-text btn"
                data-target="modal-create"
              >
                Create Review
              </button>
            </li>
          ) : null}
          {!props.auth.isLogin ? (
            <li className="logged-out">
              <button
                onClick={() => props.toggle("login")}
                className="white-text btn"
                data-target="modal-login"
              >
                Login
              </button>
            </li>
          ) : null}
          {!props.auth.isLogin ? (
            <li className="logged-out">
              <button
                onClick={() => props.toggle("sign up")}
                className="white-text btn"
                data-target="modal-signup"
              >
                Sign up
              </button>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggle: mType => dispatch(toggle_modal(mType)),
    logout: () => dispatch(auth_logout())
  };
};
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
