import React, { Component } from "react";
import './login.css'

export default class Login extends Component{

  login = () => {
    console.log('teste');
    // recipient-password == 123456 && recipiente-name === arthur
    //   router to courses
    // senao
    //   modal falha login
    // end
  }

  render(){
    return (
      <div className="Login">
        <div className="modal fade" id="loginModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header" id="modalLabel">
                <h4 className="modal-title">Já é nosso aluno?</h4>
                <p className="modal-title">Faça seu login e boa aula!</p>
              </div>
              <div className="modal-body">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nome@exemplo.com"/>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Insira sua senha"/>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={this.login}>Entrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}