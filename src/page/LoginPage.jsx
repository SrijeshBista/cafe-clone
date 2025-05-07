// src/LoginPage.jsx
import React, { useState ,useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { data, Link } from "react-router-dom";
const  LoginPage =()=> {
  const [formData, setFormData] = useState({ user: "", pass: "" });
  const [message, setMessage] = useState("");
  const [users,setusers]=useState([]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/React/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("Error connecting to server.");
    }
  };

  useEffect(()=>{
    fetch("http://localhost/React/getuser.php").then(Response=>Response.json()).then(data=>setusers(data)).catch(error=>console.log("error fetching data.".error));
  },
  []);

  return (
    <>
    <Header/>
    <div className="container  main">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="user" placeholder="Username" onChange={handleChange} required /> <br />
        <input name="pass" type="password" placeholder="Password" onChange={handleChange} required /><br />
        <button type="submit">Login</button>
      <Link to="SignUp">   <button>SignUp</button></Link>
      </form>
      <p>{message}</p>

    </div>
    <table>
        <tr>
            <th>Id</th>
            <th>User</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
        
            <tbody>{users.map(users=>(
                <tr>
                <td>{users.id}</td>
                <td>{users.user}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
                </tr>
            ))}</tbody>
        
    </table>

    <Footer/>
    </>
  );
}

export default LoginPage;
