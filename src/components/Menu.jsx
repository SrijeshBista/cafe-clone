import React, { useState } from 'react';
import Card from '../components/Card';
import Coffeeimg from "../assets/coffee.png";
import latteimg from "../assets/latte.png";
import espressoimg from "../assets/panna.png";
import cortadoimg from "../assets/cortado.png";
import FrenchBaguette from "../assets/french-baguette.png"
import crossants from "../assets/croissants.png"
import brownbread from "../assets/brownbread.png"
import cupcake from "../assets/cupcake.png"
import ClassicColdCoffee from "../assets/Classic Cold Coffee.png"
import Affogato from "../assets/Affogato.png";
import coldbrew from "../assets/Cold-Brew.png";
import Americano from "../assets/Americano.png";
import AddToCard from './AddToCard';

const Product = (props) => {
  return (
    <section id="product-page">
      <div className="container">
        <div className="banner-title">
          <h1>Menu</h1>
        </div>
        <div className="order-main">
          
          <div className="order-top">
              <AddToCard name="Cappuccino" price={300} imageSrc={Coffeeimg} />
              <AddToCard name="Espresso" price={250} imageSrc={espressoimg} />
              <AddToCard name="Cup Cake" price={50} imageSrc={cupcake}/>
              <AddToCard name="French Bread " price={200} imageSrc={FrenchBaguette}/>
          </div>   
        </div>
      </div>
    </section>
  );
};

export default Product;
