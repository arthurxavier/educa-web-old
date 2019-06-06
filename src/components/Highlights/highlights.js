import React from "react";
import Card from "./../Card/card";

import "./higlights.css";

const Highlights = () => (
  <div className="container">
    <div className="row d-flex justify-content-center">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <div className="d-flex justify-content-center ">
    <button class="btn btn-primary button-explore mt-3" type="submit">Explore todos os cursos</button>
    </div>
  </div>
);

/* TODO: Adicionar o card de destaque, equivalente a
tamnho de dois cards normais */
export default Highlights;
