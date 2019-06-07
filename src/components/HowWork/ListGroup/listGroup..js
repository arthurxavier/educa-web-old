import React from "react";

function ListGroup() {
  return (
    <div className="list-group">
      <div className="list-group-item list-group-item-action active">
        <div className="body">
          <h3 className="mt-0">Curso</h3>
          <p>
            Cada curso é como um livro interativo, com vídeos, questionários e
            projetos pré-gravados.
          </p>
        </div>
      </div>

      <div className="list-group-item list-group-item-action">
        <div className="body">
          <h3 className="mt-0">Ajuda & Suporte</h3>
          <p>
            Conecte-se com milhares de outros alunos e debata ideias, discuta
            material do curso e obter ajuda para dominar os conceitos.
          </p>
        </div>
      </div>

      <div className="list-group-item list-group-item-action">
        <div className="body">
          <h3 className="mt-0">Certificados</h3>
          <p>
            Ganhe reconhecimento oficial pelo seu trabalho e compartilhe seu
            sucesso com amigos, colegas e empregadores.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ListGroup;
