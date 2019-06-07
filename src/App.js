import React from "react";
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Routes from './routes';

const App = () => (
  <div className="App">
    <Header/>
    <Routes/>
    <Footer/>
  </div>
  );

export default App;
