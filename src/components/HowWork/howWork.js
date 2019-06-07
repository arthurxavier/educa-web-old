import React from "react";

import HowWorksImage from "../../assets/img/Presenter2.jpg";

import './howWork.css'
import ListGroup from './ListGroup/listGroup.';

function HowWork() {
  return (
    <div className="container mb-5">
      <h2 id='teste' className="text-center mb-4"> Como Funciona</h2>
      <div className="row">
        <div className="col-12 col-lg-5 list-group">
          <ListGroup/>
        </div>
        <div className="col-12 col-lg-7">
          <img
            src={HowWorksImage}
            className="img-how-work"
            alt="Imagem descritiva how"
          />
        </div>
      </div>
    </div>
  );
}

export default HowWork;
