import React from "react";
import UFU from "../../assets/img/institutions/ufu.png";
import "./institutions.css";

function Institutions() {
  return (
    <div className="container rs-institutions">
      <div className="pt-5 pb-5">
        <img src={UFU} className="rounded mx-auto d-block image-ufu" alt="..."/>
      </div>
    </div>
  );
}

export default Institutions;
