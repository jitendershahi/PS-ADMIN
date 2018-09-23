import React, { Component } from 'react';

import './App.css';

import Header from './Components/Header/header'
import Routes from './Routes/route'

class App extends Component {
  render() {

    // let routes = (
    //   <div>
    //     <Route  path="/" component={Header} />
    //     <Route exact path="/home" component={Home}/>
    //     <Route exact path="/about" component={About}/>
    //     <Route exact path="/authors" component={Authors} />

    //   </div>
    // )

    return (
      <div>
        <Header />
        <div className="container-fluid" >
        <Routes />
        </div>
      </div>
    );
  }
}

export default App;
