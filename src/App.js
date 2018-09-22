import React, { Component } from 'react';

import './App.css';
// import { Route } from 'react-router-dom'

import Header from './Components/Header/header'
// import Home from './Components/Home/home'
// import About from './Components/About/about'

import Authors from './Components/Authors/authors'

class App extends Component {
  render() {

    // let routes = (
    //   <div>
    //     <Route exact path="/home" Component={Home}/>
    //     <Route exact path="/about" Component={About}/>
    //   </div>
    // )

    return (
      <div>
        <Header />
        <Authors />
        {/* <Home />
        <About /> */}
      </div>
    );
  }
}

export default App;
