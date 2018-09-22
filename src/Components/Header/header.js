import React,{ Component } from 'react'

import PsLogo from '../../assests/images/PS_logo_F-11.png'
import './header.css'


export class Header extends Component {
    
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand header">
                    <img className="image" src={PsLogo}  alt="logo"/>
                </a>
                <a className="nav-item nav-link">Home</a>   
                
                <a className="nav-item nav-link">About</a>
            </nav>
        )
    }
}

export default Header;