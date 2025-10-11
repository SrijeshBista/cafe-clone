import {useEffect,useState} from "react"
import cafapic from "../assets/conatact.png";
import { Link } from "react-router-dom";
const ContactSection =()=>{
  
    return(
        <>
        <section id="contact-section">
            <div className="container padding">
                <div className="contact-main">
                    <div className="contact-left">
                        <img src={cafapic} alt="Contact" />    
                    </div>  
                    <div className="contact-right">
             
                    <h1>Contact Us</h1>
                
                        <p>We’re here to serve you better. Whether you have questions about our menu, want to book a table, or simply share your thoughts—we’re always happy to hear from you. At Coffee Cup Cafe, your experience matters. Reach out to us today and let’s make your next visit even more special.</p>
                        <Link to="/Contactus"><button>Contact Now</button></Link>
                    </div>    
                </div>
            </div>
        </section>
        </>
    )
}
export default  ContactSection ;