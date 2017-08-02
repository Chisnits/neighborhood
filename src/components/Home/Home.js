import React, { Component } from "react";
import Gallery from "./Gallery"
import Login from "./Login"
import "./Styles/Home.css"


class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
          <Gallery />
          <Login />
      </div>
    );
  }
}




export default Home;
