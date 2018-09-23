import React, { Component } from 'react'

import Home from '../Components/Home/home'
import About from '../Components/About/about'
import Authors from '../Components/Authors/authors'

import { Route, Redirect,Switch  } from 'react-router-dom'

export class Routes extends Component {
    render() {
        return (
            <div>
                <Switch >
                <Route  path="/home" component={Home}/>
                <Route  path="/about" component={About}/>
                <Route  path="/authors" component={Authors}/>
                {/* <Route component={NotFound}/> */} 
                <Redirect from="/" to="/home" />
                
                </Switch >
            </div>
        )
    }
}

export default Routes;