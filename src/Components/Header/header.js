import React,{ Component } from 'react'

import PsLogo from '../../assests/images/PS_logo_F-11.png'
import './header.css'

import { Link } from 'react-router-dom'


export class Header extends Component {
    
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand header">
                    <img className="image" src={PsLogo}  alt="logo"/>
                </a>
                <Link to="/home" className="nav-item nav-link">Home</Link>

                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/authors" className="nav-item nav-link">Authors</Link>
               
            </nav>
        )
    }
}

export default Header;