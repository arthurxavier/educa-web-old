import React from "react";
import ImagePresenter from "../../assets/img/Presenter1.jpg"
import "./presenter.css";

function Presenter() {
  return (
    <div id="presenter">
      <img src={ImagePresenter} className="d-block w-100 image-presenter" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-presenter">
        <h1 className="font-title text-center">Aprendendo de forma inteligente</h1>
        <p className="font-body text-center">Adquira novas habilidades totalmente online com tutoria de um assistente inteligente na plataforma Educa.</p>
        <button className="btn btn-primary pl-4 pr-4 pt-2 pb-2" type="submit">Cadastrar</button>
      </div>
    </div>
  );
}

export default Presenter;
