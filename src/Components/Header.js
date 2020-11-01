import React from 'react'
import {NavLink} from 'react-router-dom';
import Logo from '../logo.png'
function Header() {
    return (
        <div>
            
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark danger-color">      
            <div className="container">
                <NavLink exact to="/" className="navbar-brand">
                    <img src={Logo} className="pb-1" height="50" alt="mdb logo" />
                    Covid Tracker
                </NavLink>        
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>            
                <div className="collapse navbar-collapse" id="basicExampleNav">                
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-2">
                            <NavLink activeClassName="currentRoute" to="/" exact className="nav-link" >Home
                                <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="currentRoute" exact to="/about" className="nav-link" >About</NavLink>
                        </li>
                    </ul>
                </div>
                
            </div>

            </nav>

        </div>
    )
}

export default Header
