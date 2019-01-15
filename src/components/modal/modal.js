import React, { Component } from "react";
import "./modal.css";
import { connect } from "react-redux";
import { toggle_modal } from "../../store/actions/modalActions";
import { auth_create_user, auth_login } from "../../store/actions/authActions";

class Modal extends Component {
  state = {
    email: "",
    password: ""
  };

  handleClick = e => {
    //const submit = document.getElementById("submit-button");

    if (!this.modal.contains(e.target)) {
      this.setState({ email: "", password: "" });
      return this.props.toggle(); //outside the modal
    }
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    //handle multiple different submit id
    switch (e.target.id) {
      case "login-form":
        alert("login form");
        break;
      case "signup-form":
        this.props.create(this.state.email, this.state.password);
        this.setState({ email: "", password: "" });
        break;
      default:
        break;
    }
  };

  render() {
    const createReview = (
      <div
        onClick={this.handleClick}
        id="modal-create"
        className="modal"
        style={this.props.show.showModal ? { display: "block" } : null}
      >
        <div ref={node => (this.modal = node)} className="modal-content">
          <h4>Create Review</h4>
          <br />
          <form id="create-form">
            <div className="input-field">
              <input type="text" id="title" required />
              <label for="title">Guide Title</label>
            </div>
            <div className="input-field">
              <textarea
                id="content"
                className="materialize-textarea"
                required
              />
              <label for="content">Guide Content</label>
            </div>
            <button className="btn yellow darken-2 z-depth-0">Create</button>
          </form>
        </div>
      </div>
    );
    const accountDetail = (
      <div
        onClick={this.handleClick}
        id="modal-account"
        className="modal"
        style={this.props.show.showModal ? { display: "block" } : null}
      >
        <div
          className="modal-content center-align"
          ref={node => (this.modal = node)}
        >
          <h4>Account details</h4>
          <br />
          <div className="account-details" />
          <div className="account-extras" />
        </div>
      </div>
    );
    const login = (
      <div
        onClick={this.handleClick}
        id="modal-login"
        className="modal"
        style={this.props.show.showModal ? { display: "block" } : null}
      >
        <div className="modal-content" ref={node => (this.modal = node)}>
          <h4>Login</h4>
          <br />
          <form onSubmit={this.handleSubmit} id="login-form">
            <div className="input-field">
              <input name="email" type="email" id="login-email" />
              <label for="login-email">Email address</label>
            </div>
            <div className="input-field">
              <input type="password" id="login-password" />
              <label for="login-password">Your password</label>
            </div>
            <button type="submit" className="btn yellow darken-2 z-depth-0">
              Login
            </button>
          </form>
        </div>
      </div>
    );
    const signUp = (
      <div
        onClick={this.handleClick}
        id="modal-signup"
        className="modal"
        style={this.props.show.showModal ? { display: "block" } : null}
      >
        <div className="modal-content" ref={node => (this.modal = node)}>
          <h4>Sign up</h4>
          <br />
          <form onSubmit={this.handleSubmit} id="signup-form">
            <div className="input-field">
              <input
                value={this.state.email}
                name="email"
                type="email"
                id="signup-email"
                onChange={this.handleInput}
              />
              <label htmlFor="signup-email">Email address</label>
            </div>
            <div className="input-field">
              <input
                value={this.state.password}
                name="password"
                type="password"
                id="signup-password"
                onChange={this.handleInput}
              />
              <label htmlFor="signup-password">Choose password</label>
            </div>
            <button
              id="submit-button"
              type="submit"
              className="btn yellow darken-2 z-depth-0"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    );

    let modal = null;

    switch (this.props.type) {
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
  }
}

const mapStateToProps = state => {
  return {
    show: state.modal,
    type: state.modal.type,
    isAuthenticated: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggle: () => dispatch(toggle_modal()),
    create: (email, password) => dispatch(auth_create_user(email, password)),
    login: (email, password) => dispatch(auth_login(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
