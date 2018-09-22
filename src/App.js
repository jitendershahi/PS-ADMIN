import React, { Component } from 'react';
// import logo from './logo.svg';

import './App.css';

import Header from './Components/Header/header'
import Home from './Components/Home/home'
import About from './Components/About/about'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <About />

      </div>
    );
  }
}

export default App;
