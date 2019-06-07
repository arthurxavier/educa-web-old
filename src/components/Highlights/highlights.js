import React from "react";
import Card from "./../Card/card";

import "./higlights.css";

const Highlights = () => (
  <div className="container rs-highlights">
    <h2 id="teste" className="text-center mb-4">
      Cursos Mais Populares
    </h2>
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
      <button
        className="btn btn-primary button-explore mt-4 mb-5"
        type="submit"
      >
        Explore todos os cursos
      </button>
    </div>
  </div>
);

/* TODO: Adicionar o card de destaque, equivalente a
tamnho de dois cards normais */
export default Highlights;
