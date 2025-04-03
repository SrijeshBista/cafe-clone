import React, { useState } from 'react';
import Coffeeimg from "../assets/coffee.png";
import { IoBagHandle } from "react-icons/io5";
import { Link} from 'react-router-dom';
const Card = ({ name, price, imageSrc })  => {
  const [count, setCount] = useState(0); 

  // Function to increase count and its upto 10
  const increaseCount = () => {
  if(count < 10){
    setCount(count +1)
  }
  };

  // Function to decrease count
  const decreaseCount = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="menu-main">
      <div className="menu-card">
      <img src={imageSrc} alt={name} />                          
        <div className="bottom-part">
          <div className="bottom-title">
          <h1>{name} <span>Rs: {price}</span></h1>
          </div>
          <div className="detail">
            <div className="cup-size">
              <p>Cup-Size: </p>
              <form>
                <label>S</label>
                <input type="radio" name="size" />
                
                /

                <label>M</label>
                <input type="radio" name="size" />

                /
                
                <label>L</label>
                <input type="radio" name="size" />
              </form>
            </div>
            <div className="quantity">
              <p>Quantity: </p>


             <button onClick={decreaseCount}>-</button>
              <span>{count}</span>
              <button onClick={increaseCount}>+</button>
              
            </div>
            <div className="insidebtn menu-btn">
            <Link to="Product">  <button>Order Now <IoBagHandle /></button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
