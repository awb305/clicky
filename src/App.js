import React, { Component } from 'react';
import Scoreboard from "./componets/scoreboard";
import Header from "./componets/header";
import Container from './componets/container';
import Footer from './componets/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Scoreboard></Scoreboard>
        <Header></Header>
        <Container></Container>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
