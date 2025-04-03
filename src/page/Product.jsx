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
const Product = (props) => {
  return (
    <section id="product-page">
      <div className="container">
        <div className="banner-title">
          <h1>Menu</h1>
        </div>
        <div className="order-main">
            <h1>HOT Drinks</h1>
          <div className="order-top">
            <Card name="Cappuccino" price={300} imageSrc={Coffeeimg} />
            <Card name="Latte" price={350} imageSrc= {latteimg}/>
            <Card name="Cortado" price={300} imageSrc={cortadoimg} />
            <Card name="Espresso" price={250} imageSrc={espressoimg} />
          </div>
          <h1>Bakery Item</h1>
          <div className="order-middle" >
              <Card name="Coissants" price={150} imageSrc={crossants}/>
              <Card name="Brown Bread" price={120} imageSrc={brownbread}/>
              <Card name="Cup Cake" price={50} imageSrc={cupcake}/>
              <Card name="French Bread " price={200} imageSrc={FrenchBaguette}/>
          </div>
          <h1>Cold Drinks</h1>
          <div className="order-bottom">
              <Card name="Classic Coffee"  price={60} imageSrc={ClassicColdCoffee}/>
              <Card name="Iced Americano"  price={150} imageSrc={Americano}/>
              <Card name="Cold Brew"  price={160} imageSrc={coldbrew}/>
              <Card name="Affogato"  price={180} imageSrc={Affogato}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
