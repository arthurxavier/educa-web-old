import React, { Component } from "react";

import './header.css'

function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="educa-title navbar-brand text-primary mb-1 ml-5" href="/">Educa</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-start" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active mr-4" href="#">Cursos <span className="sr-only">(current)</span></a>
            <form className="form-inline">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className="collapse navbar-collapse justify-content-end mr-5" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link mr-3" href="/">Cadastar</a>
            <button type="button" className="btn btn-outline-primary pl-4 pr-4" data-toggle="modal" data-target="#loginModal">Login</button>
          </div>
        </div>
      </nav>
    );
  }

export default Header;
