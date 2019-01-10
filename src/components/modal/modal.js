import React from "react";
import "./modal.css";
import { connect } from "react-redux";

const Modal = props => {
  //console.log(props);
  const createReview = (
    <div
      id="modal-create"
      className="modal"
      style={props.show.showModal ? { display: "block" } : null}
    >
      <div className="modal-content">
        <h4>Create Review</h4>
        <br />
        <form id="create-form">
          <div className="input-field">
            <input type="text" id="title" required />
            <label for="title">Guide Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" required />
            <label for="content">Guide Content</label>
          </div>
          <button className="btn yellow darken-2 z-depth-0">Create</button>
        </form>
      </div>
    </div>
  );
  const accountDetail = (
    <div
      id="modal-account"
      className="modal"
      style={props.show.showModal ? { display: "block" } : null}
    >
      <div className="modal-content center-align">
        <h4>Account details</h4>
        <br />
        <div className="account-details" />
        <div className="account-extras" />
      </div>
    </div>
  );
  const login = (
    <div
      id="modal-login"
      className="modal"
      style={props.show.showModal ? { display: "block" } : null}
    >
      <div className="modal-content">
        <h4>Login</h4>
        <br />
        <form id="login-form">
          <div className="input-field">
            <input type="email" id="login-email" required />
            <label for="login-email">Email address</label>
          </div>
          <div className="input-field">
            <input type="password" id="login-password" required />
            <label for="login-password">Your password</label>
          </div>
          <button className="btn yellow darken-2 z-depth-0">Login</button>
        </form>
      </div>
    </div>
  );
  const signUp = (
    <div
      id="modal-signup"
      className="modal"
      style={props.show.showModal ? { display: "block" } : null}
    >
      <div className="modal-content">
        <h4>Sign up</h4>
        <br />
        <form id="signup-form">
          <div className="input-field">
            <input type="email" id="signup-email" required />
            <label for="signup-email">Email address</label>
          </div>
          <div className="input-field">
            <input type="password" id="signup-password" required />
            <label for="signup-password">Choose password</label>
          </div>
          <button className="btn yellow darken-2 z-depth-0">Sign up</button>
        </form>
      </div>
    </div>
  );
  let modal = null;
  switch (props.type) {
    case "login":
      modal = login;
      break;
    case "account":
      modal = accountDetail;
      break;
    case "sign up":
      modal = signUp;
      break;
    case "create":
      modal = createReview;
      break;
    default:
      break;
  }
  return modal;
};

const mapStateToProps = state => {
  return {
    show: state.modal,
    type: state.modal.type
  };
};

export default connect(mapStateToProps)(Modal);
