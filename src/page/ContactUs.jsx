import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    message: ""
  });

  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Nepal phone number pattern (starts with 98/97/96 and 10 digits total)
  const nepaliPattern = /^(98|97|96)\d{8}$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangenumber = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // Only digits
    if (input.length <= 10) {
      setNumber(input);
      setError("");
    }
  };

  const validateForm = () => {
    let tempErrors = {};

    if (!form.FirstName.trim()) {
      tempErrors.FirstName = "First Name is required!";
    }
    if (!form.LastName.trim()) {
      tempErrors.LastName = "Last Name is required!";
    }
    if (!number.trim()) {
      setError("Phone number is required!");
    } else if (!nepaliPattern.test(number)) {
      setError("Invalid number (must be 10 digits and start with 98, 97, or 96)");
    }
    if (!form.email.trim()) {
      tempErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Invalid email format!";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0 && nepaliPattern.test(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsPopupOpen(true);
      setForm({ FirstName: "", LastName: "", email: "", message: "" });
      setNumber("");
      setErrors({});
      setError("");
    }
  };

  return (
    <>
      <section id="contact-page">
        <div className="contact-page-main container">
          {/* Left side */}
          <div className="conatact-form-left">
            <div className="contact-title"><h1>Get In Touch</h1></div>
            <ul className="contact-detail">
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
            <form onSubmit={handleSubmit}>

              {/* First + Last Name */}
              <div className="conatctandemail">
                <input type="text" name="FirstName" placeholder="First Name" value={form.FirstName} onChange={handleChange} />
                <input type="text" name="LastName" placeholder="Last Name" value={form.LastName} onChange={handleChange} />
              </div>
              <div className="Errors">
                {errors.FirstName && <p className="error">{errors.FirstName}</p>}
                {errors.LastName && <p className="error">{errors.LastName}</p>}
              </div>

              {/* Phone + Email */}
              <div className="conatctandemail">
                <input
                  type="text"
                  placeholder="Enter Number"
                  value={number}
                  onChange={handleChangenumber}
                  inputMode="numeric"
                  pattern="\d*"
                  maxLength="10"
                  style={{ appearance: "none" }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="Errors">
                {error && <p className="error">{error}</p>}
                {errors.email && <p className="error">{errors.email}</p>}
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Feedback"
                value={form.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {isPopupOpen && (
        <div className="popup">
          <p>✅ Form submitted successfully!</p>
          <button onClick={() => setIsPopupOpen(false)}>Close</button>
        </div>
      )}
    </>
  );
};

export default ContactUs;
