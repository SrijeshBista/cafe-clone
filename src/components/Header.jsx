import { useState } from "react";
import logo from '../assets/cafe.png'
import AboutPage from "../page/AboutPage";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Product from "../page/Product";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
const Header =() =>{
    const[showhamburger, setshowhamburger] =useState(false);
    const[showsearch, setshowsearch] =useState(false);
    const[showcard, setshowcard] =useState (false);
    // function to open hamburger 
    const openhamburger =() =>{
        setshowhamburger(true);
    }
    // function to close hamburger 
    const closehamburger =() =>{
        setshowhamburger(false);
    }

    // search button 
    const openserach =() =>{
        setshowsearch(true)
    }
    // search button 
    const closeserach =() =>{
        setshowsearch(false)
    }


    // functioon to card sction 
        // function to open add to card
        const openaddtocard =() =>{
            setshowcard(true)
        }
        // function to close add to card
        const closeaddtocard =() =>{
            setshowcard(false)
        }
       

    return(
        <>
        <nav>
            <div className=" container">
                <div className="nav-main   ">
                    <div className="logo ">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="nav-item">
                        <ul>
                        <Link to="/"><li>Home</li></Link>
                            <Link to="/About"><li>About Us</li></Link> 
                            <Link to="/Blog"><li>Blog</li></Link>
                            <Link to="/Product"><li>Product</li></Link>
                            <Link to="/Contactus"><li>Contact Us</li></Link>
                           
                        </ul>
                    </div>
                    
                    <div className="search-area">
                    <div className="addtocard">
                        <button onClick={openaddtocard}><IoBagHandle/></button>
                        {showcard &&(
                            <>
                          
                            <div className="addtocard-main">
                                <div className="addTC">

                                    <div className="card-title">
                                    <button onClick={closeaddtocard}>X</button>
                                        <h1>Your Product</h1>
                                    </div>
                                    <div className="products">
                                        <table>
                                            <tr>srijiesh</tr>
                                        </table>
                                    </div>
                                </div>

                            </div>
                            </>
                        )}
                    </div>
                        <form>
                            <input type="search" placeholder="Search" />
                                <button><p><IoIosSearch/></p></button>
                        </form>
                    </div>
                    {showsearch &&(
                    <div className="search">
                        
                     <form>
                        <input type="search" placeholder="Search" />
                        
                        <div>
                            <button><IoIosSearch/></button>
                            <button onClick={closeserach}>X</button>
                        </div>
                    </form>
                   
                   
                    </div>
                   )}   
                            
                 {/* //hamburger // */}
                    {/* button to open  */}
                    <div className="hamburger-bar">
                    <button onClick={openaddtocard}><IoBagHandle/></button>
                    <button onClick={openserach}><IoIosSearch/></button>
                    <button onClick={openhamburger}><FaBars/></button>
                    </div>
                    {/* inside navs */}


                   {showhamburger &&(
                <>
                    <div className="navs-main non-container">
                        <div className="nav-items">
                            <ul>
                                <a href="/"><li>Home</li></a> 
                                <a href="/"><li>About Us</li></a> 
                                <a href="/"><li>Blog</li></a> 
                                <a href="/"><li>product</li></a> 
                                <a href="/"><li>Contact Us</li></a> 
                            </ul>
                        </div>
                        
                        {/* button for close  */}
                        <div className="closebtn">
                            <button onClick={closehamburger}>X</button>
                        </div>
                    </div>
                </>
                   )}
                  
                </div> 
                {/* addtocard  */}
                
               
            </div>
        </nav>
        </>
    )
}
export default Header;