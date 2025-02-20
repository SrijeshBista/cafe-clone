import { useState } from "react";
import logo from '../assets/cafe.png'
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
const Header =() =>{
    const[showhamburger, setshowhamburger] =useState(false);
    const[showsearch, setshowsearch] =useState(false);

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
                          <li>Home</li>
                          <li>About US</li>
                          <li>Blog</li>
                          <li>Shop</li>
                          <li>Contact</li>
                           
                        </ul>
                    </div>
                    <div className="search-area">
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
                                <a href="/"><li>Shop</li></a> 
                                <a href="/"><li>Contact</li></a> 
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
               
            </div>
        </nav>
        </>
    )
}
export default Header;