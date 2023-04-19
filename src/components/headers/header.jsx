import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function header({ sticked }) {

    return (
        <header id="header" className={`header d-flex align-items-center fixed-top ${sticked ? "sticked" : null}`}>
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                <a href="index.html" className="logo d-flex align-items-center">
                    {/* <img src="assets/img/logo.png" alt="" /> */}
                    <h1>Plantify</h1>
                </a>

                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"about"}>About</NavLink></li>
                        <li><NavLink to={"services"}>Services</NavLink></li>
                        {/* <li><NavLink to={"pricing"}>Pricing</NavLink></li> */}
                        {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li> */}
                        <li><Link to={"/contact"}>Contact</Link></li>
                        {/* <li><a className="get-a-quote" href="get-a-quote.html">Get a Quote</a></li> */}
                    </ul>
                </nav>

            </div>
        </header>
    )
}

header.defaultProps = {
    sticked: false
}