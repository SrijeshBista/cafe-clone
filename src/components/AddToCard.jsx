// import React from 'react'
import { CiCreditCard1 } from "react-icons/ci";
import { useState } from 'react'
import { Link } from "react-router-dom";
import Product from "./Menu";
const AddToCard =({name , price , imageSrc}) => {
  return (
    <>

    <div className="menu-main">

    <Link to="Product">  <div className="menu-card">
        <img src={imageSrc} alt={name} />                          
            <div className="bottom-part">
                <div className="bottom-title">
                    <h1>{name} <span>Rs: {price}</span></h1>
                </div>  
                <div className="insidebtn">
                  <Link to="Product"><button>Order Now</button></Link>
                </div>
            </div>
        </div>
        </Link>
      </div>
   
    </>
  )
}

export default AddToCard
