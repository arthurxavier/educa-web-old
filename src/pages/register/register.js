import React, { Component } from "react";
import './register.css';

export default class Register extends Component{


  Register = () => {
    console.log('teste');
    // recipient-password == 123456 && recipiente-name === arthur
    //   router to courses
    // senao
    //   modal falha login
    // end
  }

  render(){
    return (
      <div className="Register">
        <div className="modal fade" id="registerModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header" id="modalLabel">
                <h4 className="modal-title">Já é nosso aluno?</h4>
                <p className="modal-title" id="exampleModalLabel">Cadastre-se e boa aula!</p>
              </div>
              <div className="modal-body">
                <form>
                  <div class="form-group">
                    <label for="inputFullName">Nome Completo</label>
                    <input type="email" class="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Nome Completo"/>
                  </div>
                  <div class="form-group">
                    <label for="inputEmail1">Email</label>
                    <input type="email" class="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="nome@exemplo.com"/>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword1">Password</label>
                    <input type="password" class="form-control" id="inputPassword1" placeholder="Insira sua senha"/>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={this.register}>Cadastrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}