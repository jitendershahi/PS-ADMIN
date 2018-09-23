import React, { Component } from 'react'

import Home from '../Components/Home/home'
import About from '../Components/About/about'
import Authors from '../Components/Authors/authors'

import { Route } from 'react-router-dom'

export class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/authors" component={Authors}/>

                {/* <Redirect exact path="/" to="/home" /> */}
            </div>
        )
    }
}

export default Routes;