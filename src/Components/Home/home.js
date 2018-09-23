import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
            <h1>Pluralsight Adminstration</h1>
            <p>React, React Router, for web application </p>
            <Link to="/about" className="btn btn-primary">Learn More..</Link>
            </div>

        )
    }
}

export default Home;