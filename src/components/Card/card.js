import React from "react";
import imageCourse from "../../assets/img/Courses/javaScrip.png"
import './card.css'

const Card = () => (
  <div className="card card-bord card-weight m-1">
    <img src={imageCourse} className="card-image-position" alt="Curso JavaScript"></img>
    <div className="card-body">
      <h4 className="card-title">Java Script</h4>
      <p className="card-text">Programando na linguagem da web</p>
      <a href="login" className="btn card-button">Acessar</a>
    </div>
  </div>
);

export default Card;
