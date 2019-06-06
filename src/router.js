import React from "react";

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

/*
  BrowRouter: Define as rotas atravez do browser.
  Switch: Permite que apenas uma rota seja chamada num mesmo tempo.
  Route: Define a rota e o componente que sera acessado.      

  OBS: No react-router-dom é possivel mostrar mais de um compoente
  apos acessar uma unica rota. Exemplo, catálogo de cursos e Projetos.

*/