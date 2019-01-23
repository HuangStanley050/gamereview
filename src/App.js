import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./components/navigation/navbar";
import Modal from "./components/modal/modal";
import Reviews from "./components/reviews/reviews";
import Admin from "./components/admin/admin";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Modal />
        <Admin />
        <Reviews />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginStatus: state.auth
  };
};

export default connect(mapStateToProps)(App);
