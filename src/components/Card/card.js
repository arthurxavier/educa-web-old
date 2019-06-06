import React from "react";
import imageCourse from "../../assets/img/Courses/javaScrip.png"
import './card.css'

const Card = () => (
  <div className="card card-bord card-weight">
    <a href="#">
      <img src={imageCourse} className="card-image-position" alt="Curso JavaScript"></img>
      <div className="card-body">
        <h4 className="card-title">Java Script</h4>
        <p className="card-text">Programando na linguagem da web</p>
      </div>
    </a>
  </div>
);

export default Card;
