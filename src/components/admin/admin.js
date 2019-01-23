import React from "react";
import { connect } from "react-redux";
import { create_admin } from "../../store/actions/authActions";

class Admin extends React.Component {
  state = {
    email: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    //alert("email is " + this.state.email);
    this.props.make_admin(this.state.email);
    this.setState({ email: "" });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="center-align admin-actions"
        style={{ margin: "40px auto", maxWidth: "300px" }}
      >
        <input
          onChange={this.handleInput}
          name="email"
          type="email"
          placeholder="User email"
          id="admin-email"
          value={this.state.email}
          required
        />
        <button className="btn-small yellow darken-2 z-depth-0">
          Make admin
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    make_admin: email => dispatch(create_admin(email))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Admin);
