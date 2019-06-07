import React, { Component } from "react";

import Home from './../Home/home';
import Login from './../login/login';
import Register from './../register/register';

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Home/>
        <Login/>
        <Register/>
      </div>
    );
  }
}
