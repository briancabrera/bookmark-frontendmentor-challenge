import React from 'react'
import "./footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
        <div className="wrapper">
            <div className="content">
                <div className="primary">
                    <img src="../../images/logo-bookmark.svg" alt="" />
                    <ul className="menu">
                    <li>
                        <a href="#">Features</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="social">
                <a href="#" className="facebook"></a>
                <a href="#" className="twitter"></a>
            </div>
            </div>
        </div>
    </footer>
  )
}
