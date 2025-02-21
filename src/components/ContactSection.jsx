import {useEffect,useState} from "react"
import cafapic from "../assets/conatact.png";
const ContactSection =()=>{
    return(
        <>
        <section id="contact-section">
            <div className="container">
                <div className="banner-title">
                    <h1>Contact Us</h1>
                </div>
                <div className="contact-main">
                    <div className="contact-left">
                        <img src={cafapic} alt="Contact" />    
                    </div>  
                    <div className="contact-right">
                        <h1>Fill The Form</h1>
                        <form action="">
                            <input type="text" placeholder="FullName" />
                            <input type="email" placeholder="Email" />
                            <input type="tel" placeholder="Phone Number" min={1} max={10}/>
                            <textarea name="" id=""  placeholder="Feedback"></textarea>
                            <div className="button">
                                <button type="submit">Submit</button>
                            </div>
                        </form>    
                    </div>    
                </div>
            </div>
        </section>
        </>
    )
}
export default  ContactSection ;