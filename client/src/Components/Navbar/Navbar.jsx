import React from 'react'
import "./navbar.scss"

export default function Navbar () {
  return (
    <header className="header">
        <div className="wrapper">
            <div className="header-content">
                <a href="#" className="header-logo"></a>
                <nav className="menu">
                    <div className="li-wrapper">
                        <ul>
                            <li>
                                <a href="#">Features</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#" id="login">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  )
}
