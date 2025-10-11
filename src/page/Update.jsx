import { useState,useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Update=()=> {
    const [formData,setFormData]=useState({
        id:"",
        user:"",
        name:"",
        email:"",
        
    });
    const[message,setMessage]=useState("");
    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const handleSubmit =async (e)=>{
        e.preventDefault();

        try{
            const res =await fetch("http://localhost/React/update.php",{
                method:"post",
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify(formData),
            });
            const result =await res.json();
            setMessage(result.message);
        }catch (err){
            setMessage("Error Updating User Data")
        }
    };

  return (
    <>
    <Header/>
    <section id="update" >
    <div className="container  main" >
    <h2>Update User </h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="id" onChange={handleChange} placeholder="User ID"/> <br />
            <input type="text" name="user" onChange={handleChange} placeholder="User "/> <br />
            <input type="text" name="name" onChange={handleChange} placeholder="Name"/><br />
            <input type="email" name="email" onChange={handleChange} placeholder="Email" /> <br/>
            <button type="submit">Update</button>
        </form>
      <p>{message}</p>

    </div>
    </section>
    <Footer/>         
    </>
  )
}

export default Update;
