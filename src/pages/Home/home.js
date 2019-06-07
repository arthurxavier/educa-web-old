import React from "react";
import Presenter from '../../components/Presenter/presenter';
import Institutions from './../../components/Institutions/institutions';
import Highlights from './../../components/Highlights/highlights';
import HowWork from "../../components/HowWork/howWork";

const Home = () => (
  <div className="Home">
    <Presenter/>
    <Institutions/>
    <Highlights/>
    <HowWork/>
  </div>
  );

export default Home;
