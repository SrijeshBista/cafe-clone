import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const ContactUs = () => {


  const [contactData, setcontactData]=useState({
    FirstName:"",
    LastName:"",
    number:"",
    email:"",
    message:"",
  });
  const[messages ,setMessages]=useState("");
  const handleChange = (e) =>{
    setcontactData({...contactData,[e.target.name]:e.target.value});
  };
   const handleSubmit = async e =>{
        e.preventDefault();
        try{
            const res = await fetch("http://localhost/React/contact.php",{
                method :"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(contactData),
            });
            const data = await res.json();
            setMessages(data.message);
        }catch (err){
            setMessages("Error Connecting TO Server");
        }
    };



  return (
    <>
    <Header/>
      <section id="contact-page">
        <div className="contact-page-main container">
          {/* Left side */}
          <div className="conatact-form-left">
            <div className="contact-title"><h1>Get In Touch</h1></div>
            <ul className="con-detail">
              <li><FaLocationDot /> Lakeside, Pokhara, Nepal</li>
              <li><IoMail /> Coffeecup356@gmail.com</li>
              <li><FaPhoneAlt /> 01-4434452</li>
            </ul>
            <div className="social-media">
              <h1>Follow Me</h1>
              <div className="instra">
                <div className="icons"><Link to="https://www.facebook.com/"><FaFacebook /></Link></div>
                <div className="icons"><Link to="https://www.instagram.com/"><FaInstagram /></Link></div>
                <div className="icons"><Link to="https://www.linkedin.com/"><FaLinkedin /></Link></div>
                <div className="icons"><Link to="https://x.com/?lang=en"><FaTwitter /></Link></div>
              </div>
            </div>
          </div>

          {/* Right side (Form) */}
          <div className="contact-form-right">
            <div className="banner-title"><h1>Contact Us</h1></div>
            <form action="" onSubmit={handleSubmit}>

              {/* First + Last Name */}
              <div className="conatctandemail">
                <input type="text" name="FirstName" placeholder="First Name" onChange={handleChange} />
                <input type="text" name="LastName" placeholder="Last Name" onChange={handleChange} />
              </div>
             

              {/* Phone + Email */}
              <div className="conatctandemail">
                <input
                  type="text"
                  placeholder="Enter Number"
                  onChange={handleChange} 
                  name="number"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  onChange={handleChange} 
                  
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Feedback"
                onChange={handleChange} 
              />

              <button type="submit">Submit</button>
            </form>
            <p>{messages}</p>
          </div>
        </div>
      </section>

     <Footer/>
    </>
  );
};

export default ContactUs;
