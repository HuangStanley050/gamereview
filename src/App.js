import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./components/navigation/navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
