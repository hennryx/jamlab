import React from 'react'
import Logo from '../../assets/logo.png'
import './style.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <header>
                <figure className="logo">
                    <img src={Logo} alt="Logo" />
                </figure>
                <nav className="main-nav">
                    <ul>
                        <li className='nav-item'>
                            <NavLink
                                to={"/"}
                            >
                                <span className='active'>Products</span>
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to={"/contact-us"}
                            >
                                <span>Contact us</span>
                            </NavLink></li>
                    </ul>
                </nav>

                <nav className='sub-nav'>
                    <ul>
                        <li className='nav-item'>
                            <span>Account</span>
                        </li>
                        <li className='nav-item'>
                            <span>notification</span>
                        </li>
                    </ul>
                </nav>
            </header>

            <section>
                <div className="container">
                section
                </div>
            </section>
        </div>
    )
}

export default Home