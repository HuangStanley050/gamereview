import React, { Component } from "react";
import "./modal.css";
import { connect } from "react-redux";
import { toggle_modal } from "../../store/actions/modalActions";

class Modal extends Component {
  handleClick = e => {
    if (this.modal.contains(e.target)) {
      alert("click on inside");
    } else {
      this.props.toggle();
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
        onClick={this.handleClick}
        id="modal-signup"
        className="modal"
        style={this.props.show.showModal ? { display: "block" } : null}
      >
        <div className="modal-content" ref={node => (this.modal = node)}>
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
    type: state.modal.type
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggle: () => dispatch(toggle_modal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
