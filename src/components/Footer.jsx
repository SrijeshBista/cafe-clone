import { useEffect,useState } from "react";
import logos from "../assets/cafe.png"
import { FaFacebook , FaInstagram } from "react-icons/fa";
const Footer =()=> {
    return(
        <>
        <footer>
            <div className="container">
                <div className="footer-main">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <img src={logos} alt="logo" />
                        </div>
                        <div className="footer-des">
                            <p>At Coffee Cup Café, we believe in the magic of a perfectly brewed cup.</p>
                        </div>
                        <div className="social-media">
                                <FaFacebook/>
                                <FaInstagram />
                        </div>
                    </div>
                    <div className="footer-right">
                            <div className="footer-nav nav-item">
                                <ul> 
                                    <h1>Quick Link</h1>
                                    <li>Home</li>
                                    <li>About us</li>
                                    <li>Blog</li>
                                    <li>product</li>
                                    <li>contact us</li>
                                </ul>
                            </div>
                            <div className="footer-nav nav-item">
                                <ul> 
                                    <h1>Legal</h1>
                                    <li>Terms</li>
                                    <li>Privacy</li>
                                    <li>Licenses</li>
                                    
                                </ul>
                            </div>
                            <div className="footer-nav nav-item">
                                <ul> 
                                    <h1>Detail</h1>
                                    <p>Contact-no :  <span>01-4434452</span></p>
                                    <p> Email : <span> Coffeecup356@gmail.com</span></p>
                                    <p>Address :  <span> lakeside , Pokhara ,  Nepal</span></p>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </footer>
                <div className="copy-right container">
                    <span>©Copyright 2025 , developed by BlueBug software</span>
                </div>
        </>
    )
}
export default Footer ;