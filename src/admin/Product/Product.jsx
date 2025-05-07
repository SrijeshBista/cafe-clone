import React, { useState } from 'react'
import SIdeNav from '../Sidenav/SIdeNav';
import ProductProp from './ProductProp';
import Coffeeimg from "../../assets/coffee.png";
import latteimg from "../../assets/latte.png";
import espressoimg from "../../assets/panna.png";
import cortadoimg from "../../assets/cortado.png";
import FrenchBaguette from "../../assets/french-baguette.png"
import crossants from "../../assets/croissants.png"
import brownbread from "../../assets/brownbread.png"
import cupcake from "../../assets/cupcake.png"
import ClassicColdCoffee from "../../assets/Classic Cold Coffee.png"
import Affogato from "../../assets/Affogato.png";
import coldbrew from "../../assets/Cold-Brew.png";
import Americano from "../../assets/Americano.png";
import { BiEdit } from 'react-icons/bi';
const Product =(props)=> {
 // function to open edit option 
 const[popup,setshowpopup] =useState(false)

 //  function to open popup
 const openpopup =()=>{
   setshowpopup(true)
 }
 const closepopup = ()=>{
  setshowpopup(false)
 }


  return (
    <div className='admin-main container'>
    <div className="left-side">
    <SIdeNav/> 
   </div>   
    <div className="right-side">
        <section id="Product-Item">
            <div className="product-item-main container">
              <div className="product-left">
                <div className="banner-title title"><h1>Product</h1></div>
              <ProductProp no="1." imagesrc={Coffeeimg} name="Coffee" price={100} btn="Edit" />
              <ProductProp no="2." imagesrc={latteimg} name="latte" price={100} btn="Edit" />
              <ProductProp no="3." imagesrc={espressoimg} name="espresso" price={100} btn="Edit" />
              <ProductProp no="4." imagesrc={cortadoimg} name="cortado" price={100} btn="Edit" />
              <ProductProp no="5." imagesrc={FrenchBaguette} name="Baguette" price={100} btn="Edit" />
              <ProductProp no="6." imagesrc={crossants} name="crossants" price={100} btn="Edit" />
              <ProductProp no="7." imagesrc={brownbread} name="brownbread" price={100} btn="Edit" />
              <ProductProp no="8." imagesrc={cupcake} name="cupcake" price={100} btn="Edit" />
              <ProductProp no="9." imagesrc={ClassicColdCoffee} name="ColdCoffee" price={100} btn="Edit" />
              <ProductProp no="10." imagesrc={Affogato} name="Affogato" price={100} btn="Edit" />
              <ProductProp no="11." imagesrc={coldbrew} name="coldbrew" price={100} btn="Edit" />
              <ProductProp no="12." imagesrc={Americano} name="Americano" price={100} btn="Edit" />
            
              </div>
              

              <div className="product-right">
                    <div className="detail-form">
                      <form action="">
                        <h1>Form</h1>
                        <input type="text" placeholder='Enter Product Name' min={0} max={10} /><br />
                        <input type="tel" placeholder='Enter Product Price'min={0} max={10} maxLength={2}/><br />
                        <input type="tel" placeholder='Enter Product Quantity' min={0} max={10} maxLength={2}/><br />
                        <input type="file" />
                        <div className="button-btn">
                          <button type='submit'>Submit</button>
                        </div>
                      </form>
                    </div>
              </div>


            </div>
        </section>
    </div>
   </div>
  )
}

export default Product;
