import { useEffect,useState } from "react";
import logos from "../assets/cafe.png"
import { FaFacebook , FaInstagram , FaLinkedin , FaTwitter  } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
const Footer =()=> {
    return(
        <>
        <footer>
            <div className="container">
                <div className="footer-main">
                    <div className="footer-left">
                        <div className="footer-logo">
                          <Link to="/"><img src={logos} alt="logo" /></Link>
                        </div>
                        <div className="footer-des">
                            <p>At Coffee Cup Café, we believe in the magic of a perfectly brewed cup.</p>
                        </div>
                        <div className="social-media">
                            <div className="icons"><Link to="https://www.facebook.com/"><FaFacebook /></Link></div>
                            <div className="icons"><Link to="https://www.instagram.com/"><FaInstagram /></Link></div>
                            <div className="icons"><Link to="https://www.linkedin.com/"><FaLinkedin /></Link></div>
                            <div className="icons"><Link to="https://x.com/?lang=en"><FaTwitter /></Link></div>
                        </div>
                    </div>
                    <div className="footer-right">
                            <div className="footer-nav nav-item">
                                <ul> 
                                    <h1>Quick Link</h1>
                                    <Link to="/"><li>Home</li></Link>
                                    <Link to="/About"><li>About Us</li></Link> 
                                    <Link to="/Blog"><li>Blog</li></Link>
                                    <Link to="/Product"><li>Product</li></Link>
                                    <Link to="/Contactus"><li>Contact Us</li></Link>
                           
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
                    <span>©Copyright 2025 , developed by BlueBug Software</span>
                </div>
        </>
    )
}
export default Footer ;