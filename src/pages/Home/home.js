import React from "react";
import Presenter from '../../components/Presenter/presenter';
import Institutions from './../../components/Institutions/institutions';
import Highlights from './../../components/Highlights/highlights';

const Home = () => (
  <div className="Home">
    <Presenter/>
    <Institutions/>
    <Highlights/>  
  </div>
  );

export default Home;
