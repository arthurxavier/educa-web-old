import React, { Component } from "react";
import { Link } from "react-router-dom";

import Home from './../home/home';
import Header from './../../components/Header/header';
import Login from './../login/login';

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Home/>
        <Login/>
      </div>
    );
  }
}
