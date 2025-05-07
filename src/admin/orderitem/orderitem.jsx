import React from 'react'
import SIdeNav from '../Sidenav/SIdeNav';
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
const orderitem = () => {
    return (
        <div className='admin-main container'>
         <div className="left-side">
         <SIdeNav/> 
        </div>   
         <div className="right-side dash-right">
         <sectoin id="order-item">
          <div className="order-item-main container">
            <h1>Order Item</h1>
            <table>
                <tr>
                    <th>S.N</th>
                    <th>Item Image</th>
                    <th>Item Name</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>1 . </td>
                    <td><img src={Coffeeimg} alt="" /></td>
                    <td>Coffee</td>
                    <td>Rs: 200</td>
                </tr>
                <tr>
                    <td>2 . </td>
                    <td><img src={latteimg} alt="" /></td>
                    <td>Latte</td>
                    <td>Rs: 200</td>
                </tr>
                <tr>
                    <td>3 . </td>
                    <td><img src={espressoimg} alt="" /></td>
                    <td>Espresso</td>
                    <td>Rs: 200</td>
                </tr>
                <tr>
                    <td>4 . </td>
                    <td><img src={cortadoimg} alt="" /></td>
                    <td>Cortado</td>
                    <td>Rs: 200</td>
                </tr>
                <tr>
                    <td>5 . </td>
                    <td><img src={FrenchBaguette} alt="" /></td>
                    <td>French Baguette</td>
                    <td>Rs: 200</td>
                </tr>
                <tr>
                    <td>6 . </td>
                    <td><img src={crossants} alt="" /></td>
                    <td>Crossants</td>
                    <td>Rs: 200</td>
                </tr>
                <tr>
                    <td>7 . </td>
                    <td><img src={brownbread} alt="" /></td>
                    <td>Brown Bread</td>
                    <td>Rs: 200</td>
                </tr>
                <tr>
                    <td>8 . </td>
                    <td><img src={cupcake} alt="" /></td>
                    <td>Cup Cake</td>
                    <td>Rs: 200</td>
                </tr>
                <tr>
                    <td>9 . </td>
                    <td><img src={ClassicColdCoffee} alt="" /></td>
                    <td>Classic Cold Coffee</td>
                    <td>Rs: 200</td>
                </tr>
                <tr>
                    <td>10 . </td>
                    <td><img src={Affogato} alt="" /></td>
                    <td>Affogato</td>
                    <td>Rs: 200</td>
                </tr>
                <tr>
                    <td>11 . </td>
                    <td><img src={coldbrew} alt="" /></td>
                    <td>Cold Brew</td>
                    <td>Rs: 200</td>
                </tr>
                <tr>
                    <td>12 . </td>
                    <td><img src={Americano} alt="" /></td>
                    <td>Americano</td>
                    <td>Rs: 200</td>
                </tr>
            </table>
          </div>
        </sectoin>
         </div>
        </div>
      )
}

export default orderitem;
