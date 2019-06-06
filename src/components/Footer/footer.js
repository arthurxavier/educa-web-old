import React from "react";

import './footer.css'

const Footer = () =>(
  <div className=" container">
    <div className= "row d-flex justify-content-center">
      <div>
        <a className="educa-title text-primary mb-1 ml-5" href="/">Educa</a>
      </div>
      <ul className=" d-flex flex-direction-column flex-wrap align-content-center">
        <li>COURSERA</li>
        <li>COMMUNITY</li>
        <li>CONNECT</li>
        <li>MORE</li>
      </ul>
    </div>
  </div>
);

export default Footer;
