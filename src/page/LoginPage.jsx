import React, { useState ,useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { data, Link } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
const  LoginPage =()=> {
  const [formData, setFormData] = useState({ user: "", pass: "" });
  const [message, setMessage] = useState("");
  const [users,setusers]=useState([]);
  const [editUser,setEditUser]=useState(null);
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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

  const fetchUser =()=>{
    fetch("//http:/localhost/React/getuser.php")
    .then((res) =>res.json())
    .then((data) => setusers(data))
    .catch((err) => console.error("Error fetching users:", err));
  };

  useEffect(()=>{
    fetch("http://localhost/React/getuser.php").then(Response=>Response.json()).then(data=>setusers(data)).catch(error=>console.log("error fetching data.".error));
  },
  []);

  const handleUpdate = async(e)=>{
    try{
      const res =await fetch("http://localhost/React/update.php",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editUser),
      });
      const result = await res.json();
      alert(result.message);
      setEditUser(null);
      fetchUser();
    }catch(err){
      alert("Error Update User.");

    }
  };

  const handleDelete= async (id) =>{
    try{
      const res = await fetch("http://localhost/React/delete.php",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const result = await res.json();
      alert(result.message);
      fetchUser();
    }catch(err){
      alert("Error Deleting User.");
    }
  };





  return (
    <>
    <Header/>
    <section id="login">   <div className="container  main">
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
            <th>Delete Button</th>
            <th>Edit Button</th>
        </tr>
        
            <tbody>{users.map(users=>(
                <tr>
                <td>{users.id}</td>
                <td>{users.user}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td><button onClick={()=> handleDelete(users.id)}> Delete<BiTrash/></button></td>
                <td><span><Link to='Update'><button>Update</button></Link></span></td>
                </tr>
            ))}</tbody>
        
    </table>
   
    </section>
 
    <Footer/>
    </>
  );
}

export default LoginPage;
