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
                        <div className="social-media">
                                <FaFacebook/>
                                <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer ;