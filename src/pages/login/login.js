import React, { Component } from "react";
import Presenter from "../../components/Presenter/presenter";
import Institutions from "./../../components/Institutions/institutions";
import Highlights from "./../../components/Highlights/highlights";

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
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Já é nosso aluno?</h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label className="col-form-label">Login:</label>
                    <input type="text" className="form-control" id="recipient-name"/>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Password:</label>
                    <input type="text" className="form-control" id="recipient-password"/>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={this.login}>Send message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}