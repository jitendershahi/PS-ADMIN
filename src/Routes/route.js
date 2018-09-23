import React, { Component } from 'react'

import Home from '../Components/Home/home'
import About from '../Components/About/about'
import Authors from '../Components/Authors/authors'

import CreateAuthor from '../Components/CreateAuthor/CreateAuthor'

import { Route, Redirect,Switch  } from 'react-router-dom'

export class Routes extends Component {
    render() {
        return (
            <div>
                <Switch >
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/authors" component={Authors}/>
                    <Route exact path="/author/create" component={CreateAuthor} />
                    {/* <Redirect from="/authors/*" to="/authors" /> */}
                    {/* <Route component={NotFound}/> */} 
                    <Redirect from="/" to="/home" />
                
                </Switch >
            </div>
        )
    }
}

export default Routes;