import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export class NotFound extends Component {
    render() {
        return (
            <div >
            <h1>Page Not Found</h1>
            <p>Whoops ! Soory, there is nothing to see here...</p>
            <Link to="/home" className="btn btn-primary">Back To Home..</Link>
            </div>

        )
    }
}

export default NotFound;