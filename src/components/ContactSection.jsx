import {useEffect,useState} from "react"
import cafapic from "../assets/conatact.png";
const ContactSection =()=>{
   // State for form fields
   const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State for error
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log();
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Validate form
  const validateForm = () => {
    let errors = {};

    if (!form.name.trim()) {
      errors.name = "Name is required !";
    }

    if (!form.email) {
      errors.email = "Email is required ! ";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Invalid email !";
    }

    if (!form.password) {
      errors.password = "Password is required ! ";
    } else if (form.password.length < 10) {
      errors.password = "Password must be at least 10 characters !";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
       setIsPopupOpen(true);
    }
  };
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
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}

                {/* Email */}
                <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                {/* Password */}
                <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
                <textarea placeholder="Feedback"></textarea>
                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
             {/* Popup Modal */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Form Submitted Successfull</h2>
            <p><strong>Name:</strong> {form.name}</p>
            <p><strong>Email:</strong> {form.email}</p>
            <p><strong>Password:</strong> {form.password}</p>
            <button onClick={() => setIsPopupOpen(false)}>X</button>
          </div>
        </div>
      )}
                    </div>    
                </div>
            </div>
        </section>
        </>
    )
}
export default  ContactSection ;