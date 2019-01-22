import React, { Component } from "react";
import "./modal.css";
import { connect } from "react-redux";
import { toggle_modal } from "../../store/actions/modalActions";
import { auth_create_user, auth_login } from "../../store/actions/authActions";
import { createReview } from "../../store/actions/createActions";

class Modal extends Component {
  state = {
    email: "",
    password: "",
    title: "",
    content: "",
    bio: ""
  };

  handleClick = e => {
    //const submit = document.getElementById("submit-button");

    if (!this.modal.contains(e.target)) {
      this.setState({ email: "", password: "", title: "", content: "" });
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
        //console.log(this.state);
        this.props.login(this.state.email, this.state.password);
        this.setState({ email: "", password: "" });
        break;
      case "signup-form":
        this.props.create(
          this.state.email,
          this.state.password,
          this.state.bio
        );
        this.setState({ email: "", password: "", bio: "" });
        break;
      case "create-form":
        //alert("title is" + " " + this.state.title);
        this.props.create_review(this.state.title, this.state.content);
        this.setState({ title: "", content: "" });
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
          <form onSubmit={this.handleSubmit} id="create-form">
            <div className="input-field">
              <input
                value={this.state.title}
                onChange={this.handleInput}
                type="text"
                id="title"
                name="title"
                required
              />
              <label for="title">Guide Title</label>
            </div>
            <div className="input-field">
              <textarea
                value={this.state.content}
                name="content"
                id="content"
                onChange={this.handleInput}
                className="materialize-textarea"
                required
              />
              <label for="content">Guide Content</label>
            </div>
            <button type="submit" className="btn yellow darken-2 z-depth-0">
              Create
            </button>
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
          <div className="account-details">
            <h3>
              Log in as{" "}
              <span style={{ color: "red" }}>
                {this.props.accountInfo.email}
              </span>
            </h3>
          </div>
          <div className="account-extras">
            <h3>{this.props.accountInfo.bio}</h3>
          </div>
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
              <input
                value={this.state.email}
                onChange={this.handleInput}
                name="email"
                type="email"
                id="login-email"
              />
              <label for="login-email">Email address</label>
            </div>
            <div className="input-field">
              <input
                value={this.state.password}
                onChange={this.handleInput}
                name="password"
                type="password"
                id="login-password"
              />
              <label for="login-password">Your password</label>
            </div>
            <button type="submit" className="btn yellow darken-2 z-depth-0">
              Login
            </button>
          </form>
          <br />
          <div>
            <h4 className="red-text center-align">{this.props.error.error}</h4>
          </div>
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
            <div className="input-field">
              <input
                value={this.state.bio}
                name="bio"
                type="text"
                id="bio"
                onChange={this.handleInput}
              />
              <label htmlFor="bio">One Line Bio</label>
            </div>
            <button
              id="submit-button"
              type="submit"
              className="btn yellow darken-2 z-depth-0"
            >
              Sign up
            </button>
          </form>
          <br />
          <div>
            <h4 className="red-text center-align">{this.props.error.error}</h4>
          </div>
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
    isAuthenticated: state.auth,
    accountInfo: state.auth.accountInfo,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggle: () => dispatch(toggle_modal()),
    create: (email, password, bio) =>
      dispatch(auth_create_user(email, password, bio)),
    login: (email, password) => dispatch(auth_login(email, password)),
    create_review: (title, content) => dispatch(createReview(title, content))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
