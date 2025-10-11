import React,{useState,useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const SignUp =()=>{
    const [formData, setFormData]=useState({
        user:"",
        name:"",
        number:"",
        email:"",
        password:"",
    });
    const [users,setusers]=useState([]);
    const [message , setMessage]=useState("");
    const handleChange = e =>{
        setFormData ({...formData,[e.target.name]:e.target.value});
    };
    const handleSubmit = async e =>{
        e.preventDefault();
        try{
            const res = await fetch("http://localhost/React/signup.php",{
                method :"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(formData),
            });
            const data = await res.json();
            setMessage(data.message);
        }catch (err){
            setMessage("Error Connecting TO Server");
        }
    };
    useEffect(()=>{
        fetch("http://localhost/React/getuser.php").then(Response=>Response.json()).then(data=>setusers(data)).catch(error=>console.log("error fetching data.".error));
    },
    []);
 return(
    <>
    <Header/>
    <section id="signup">
    <div className="main secondary container">
        <h2>SignUp</h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="user" onChange={handleChange} placeholder="User"/> <br />
            <input type="text" name="name" onChange={handleChange} placeholder="Name"/><br />
            <input type="password" name="password" onChange={handleChange} placeholder="password"/><br />
            <input type="email" name="email" onChange={handleChange} placeholder="Email" /> <br/>
            <input type="number" name="number" onChange={handleChange} placeholder="Number" /> <br/>
            <button type="submit">Sign Up</button>
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
    </section>
  <Footer/>
    </>
 );
}
export default SignUp;