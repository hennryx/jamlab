import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import './style.css'
import './animations.css'
import { NavLink } from 'react-router-dom'
import image1 from "../../assets/strawberryJam.png"
import image2 from "../../assets/orangeJam.png"
import image3 from "../../assets/mulberryJam.png"
import image4 from "../../assets/guavaJam.png"
import icon1 from "../../assets/strawberryIcon.png"
import icon2 from "../../assets/orangeIcon.png"
import icon3 from "../../assets/mulberryIcon.png"
import icon4 from "../../assets/guavaIcon.png"

import leaf from "../../assets/leaf1.png"

import strawDecor1 from "../../assets/wholeStraberry.png"
import strawDecor2 from "../../assets/halfStrawberry.png"
import strawDecor3 from "../../assets/smallStrawberry.png"
import strawDecor4 from "../../assets/wholeStraberryWtrunk.png"


import orangeDecor1 from "../../assets/wholeOrange.png"
import orangeDecor2 from "../../assets/halfOrange.png"
import orangeDecor3 from "../../assets/orangeHalf2.png"

import guavaDecor1 from "../../assets/wholeGuava.png"
import guavaDecor2 from "../../assets/halfGuava.png"
import { VscAccount } from "react-icons/vsc";
import { IoNotifications } from "react-icons/io5";
import { useEffect } from 'react'

const products = [
    {
        id: 0,
        name: 'strawberry jam',
        image: image1,
        price: 100,
        flavor: 'strawberry',
        icon: icon1,
        description: "Ruby-red and lusciously sweet, this strawberry jam is a fresh and tangy homemade treat to spread over buttery toast, biscuits or warm croissants!",
        baseColor: "#DE1E1E",
        backColor: "#FF8979",
        decorations: [
            {
                img: strawDecor1,
                design: {
                    "width": "250px",
                    'position': "absolute",
                    'transform': "translate(25rem, -9rem) rotateY(180deg)",
                }
            },
            {
                img: strawDecor2,
                design: {
                    'width': "150px",
                    'position': "absolute",
                    'transform': "translate(-20rem, 1rem)",
                }
            },
            {
                img: strawDecor3,
                design: {
                    'width': "200px",
                    'position': "absolute",
                    'transform': "translate(10rem, 15rem)",
                }
            },
            {
                img: strawDecor4,
                design: {
                    'width': "250px",
                    'position': "absolute",
                    'transform': "translate(17rem, 1rem)",
                }
            },
            {
                img: strawDecor1,
                design: {
                    "width": "210px",
                    'position': "absolute",
                    'transform': "translate(-30rem, -7rem)",
                }
            },
            {
                img: leaf,
                design: {
                    'width': "170px",
                    'position': "absolute",
                    'transform': "translate(-15rem, 16rem)",
                }
            },
        ]
    },
    {
        id: 1,
        name: 'orange jam',
        image: image2,
        price: 120,
        flavor: 'orange',
        icon: icon2,
        description: "juicy-yellow and lusciously sweet, this orange jam is a fresh and tangy homemade treat to spread over buttery toast, biscuits or warm croissants!",
        baseColor: "#E06900",
        backColor: "#F49D51",
        decorations: [
            {
                img: orangeDecor2,
                design: {
                    "width": "250px",
                    'position': "absolute",
                    'transform': "translate(25rem, -9rem) rotateY(180deg)",
                }
            },
            {
                img: orangeDecor2,
                design: {
                    'width': "150px",
                    'position': "absolute",
                    'transform': "translate(-20rem, 1rem)",
                }
            },
            {
                img: orangeDecor1,
                design: {
                    'width': "500px",
                    'position': "absolute",
                    'transform': "translate(10rem, 15rem)",
                }
            },
            {
                img: orangeDecor3,
                design: {
                    "width": "210px",
                    'position': "absolute",
                    'transform': "translate(-30rem, -7rem)",
                }
            },
            {
                img: leaf,
                design: {
                    'width': "170px",
                    'position': "absolute",
                    'transform': "translate(-15rem, 16rem)",
                }
            },
        ]
    },
    {
        id: 2,
        name: 'mulberry jam',
        image: image3,
        price: 150,
        flavor: 'mulberry',
        icon: icon3,
        description: "Ruby-red and lusciously sweet, this mulberry jam is a fresh and tangy homemade treat to spread over buttery toast, biscuits or warm croissants!",
        baseColor: "#4A1A1A",
        backColor: "#2A1B4D",
        decorations: [
            {
                img: leaf,
                design: {
                    'width': "170px",
                    'position': "absolute",
                    'transform': "translate(-15rem, 16rem)",
                }
            },
        ]
    },
    {
        id: 3,
        name: 'guava jam',
        image: image4,
        price: 90,
        flavor: 'guava',
        icon: icon4,
        description: "Ruby-red and lusciously sweet, this guava jam is a fresh and tangy homemade treat to spread over buttery toast, biscuits or warm croissants!",
        baseColor: "#FF6565",
        backColor: "#FF8979",
        decorations: [
            {
                img: guavaDecor1,
                design: {
                    "width": "230px",
                    'position': "absolute",
                    'transform': "translate(25rem, -5rem)",
                }
            },
            {
                img: guavaDecor1,
                design: {
                    'width': "300px",
                    'position': "absolute",
                    'transform': "translate(-15rem, 12rem) rotateY(180deg)",
                }
            },
            {
                img: guavaDecor2,
                design: {
                    'width': "300px",
                    'position': "absolute",
                    'transform': "translate(10rem, 15rem)",
                }
            }
        ]
    },
]

const Home = () => {
    const [activeProduct, setActiveProduct] = useState(products[0])
    const [isAnimating, setIsAnimating] = useState(false)

    const handleClick = (i) => {
        setIsAnimating(false)
        setTimeout(() => {
            setActiveProduct(products[i])
            setIsAnimating(true)
        }, 50)
    }

    useEffect(() => {
        setIsAnimating(true)
    }, [])

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
                            <span><VscAccount /></span>
                        </li>
                        <li className='nav-item'>
                            <span><IoNotifications /></span>
                        </li>
                    </ul>
                </nav>
            </header>

            <section>
                <div className="container">
                    {Object.keys(activeProduct).length > 0 ? (
                        <>
                            <div className="background" style={{ "--bg-primary": activeProduct.baseColor }}>
                                <div className="overlay-design"></div>
                                <div className="bg-text">
                                    <span>{activeProduct.flavor}</span>
                                </div>
                            </div>

                            <div className="about">
                                <div className="title">{activeProduct.name}</div>
                                <div className="description">{activeProduct.description}</div>
                                <div className="action-button">
                                    <button>Add to cart</button>
                                </div>
                            </div>

                            <div className="main-display">
                                <div className="backdrop-blur" style={{ "--backdropColor": activeProduct.backColor }}></div>
                                <figure className={`product-img ${isAnimating ? 'product-active' : ''}`}>
                                    <img src={activeProduct.image} alt="strawberry" />
                                </figure>
                                {activeProduct?.decorations && activeProduct.decorations.map((dec, i) => (
                                    <img
                                        src={dec.img}
                                        alt="img"
                                        key={i}
                                        className={`decoration ${isAnimating ? 'animate-in' : ''}`}
                                        style={{
                                            ...dec?.design,
                                            '--final-transform': dec?.design?.transform || 'translate(0, 0)',
                                            opacity: isAnimating ? 1 : 0,
                                        }} 
                                    />
                                ))}
                                <div className="price">₱ {activeProduct.price}</div>
                            </div>

                            <div className="flavors-navigation">
                                <div className="flavor-navigation-container">
                                    {products.map((item, i) => (
                                        <div key={i} onClick={() => handleClick(i)} className={`item ${item.id === activeProduct.id ? "active-flavor" : ""}`}>
                                            <figure>
                                                <img src={item.icon} alt={item.flavor + " icon"} />
                                            </figure>
                                            {item.flavor}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div>No Product</div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Home