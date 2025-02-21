import {useEffect,useState} from "react";
import Coffeeimg from "../assets/coffee.png";
import Cortadoimg from "../assets/cortado.png";
import panaimg from "../assets/panna.png";
import Latte from "../assets/Latte.png"
import crossants from "../assets/croissants.png"
import brownbread from "../assets/brownbread.png"
import FrenchBaguette from "../assets/french-baguette.png"
import cupcake from "../assets/cupcake.png"
import { IoBagHandle } from "react-icons/io5";
const Menu = ()=>{
    return(
        <>
            <section id="menu">
                <div className="container">
                <div className="banner-title">
                    <h1>Special Items</h1>
                </div>
                    <div className="menu-main">
                        <div className="menu-card">                   
                                <img src={Coffeeimg}  />                          
                            <div className="bottom-part">
                                <div className="bottom-title">
                                    <h1>Cappuccino <span>Rs:300</span></h1>
                                </div>
                                <div className="detail">
                                    <div className="cup-size">
                                        <p>Cup-Size : </p>
                                        <form action="">
                                            <label >S</label>
                                            <input type="radio" />
                                            /
                                            <label >M</label>
                                            <input type="radio" />
                                            /
                                            <label >L</label>
                                            <input type="radio" />
                                        </form>
                                    </div>
                                    <div className="quantity">
                                        <form>
                                            <label htmlFor="">Quantity : </label>
                                            <input type="number"  min="1" max="15"/>
                                        </form>
                                    </div>
                                    <div className="insidebtn menu-btn">
                                        <button>Order Now <IoBagHandle /></button>
                                    </div>
                                </div>
                                   
                            </div>
                        </div>
                        <div className="menu-card">                   
                                <img src={Cortadoimg}  />                          
                            <div className="bottom-part">
                                <div className="bottom-title">
                                    <h1>Cortado <span>Rs:300</span></h1>
                                </div>
                                <div className="detail">
                                    <div className="cup-size">
                                        <p>Cup-Size : </p>
                                        <form action="">
                                            <label >S</label>
                                            <input type="radio" />
                                            /
                                            <label >M</label>
                                            <input type="radio" />
                                            /
                                            <label >L</label>
                                            <input type="radio" />
                                        </form>
                                    </div>
                                    <div className="quantity">
                                        <form>
                                            <label htmlFor="">Quantity : </label>
                                            <input type="number"  min="1" max="15"/>
                                        </form>
                                    </div>
                                    <div className="insidebtn menu-btn">
                                        <button>Order Now <IoBagHandle /></button>
                                    </div>
                                </div>
                                   
                            </div>
                        </div>
                        <div className="menu-card">                   
                                <img src={panaimg}  />                          
                            <div className="bottom-part">
                                <div className="bottom-title">
                                    <h1>Espresso <span>Rs:300</span></h1>
                                </div>
                                <div className="detail">
                                    <div className="cup-size">
                                        <p>Cup-Size : </p>
                                        <form action="">
                                            <label >S</label>
                                            <input type="radio" />
                                            /
                                            <label >M</label>
                                            <input type="radio" />
                                            /
                                            <label >L</label>
                                            <input type="radio" />
                                        </form>
                                    </div>
                                    <div className="quantity">
                                        <form>
                                            <label htmlFor="">Quantity : </label>
                                            <input type="number"  min="1" max="15"/>
                                        </form>
                                    </div>
                                    <div className="insidebtn menu-btn">
                                        <button>Order Now <IoBagHandle /></button>
                                    </div>
                                </div>
                                   
                            </div>
                        </div>
                        <div className="menu-card">                   
                                <img src={Latte}  />                          
                            <div className="bottom-part">
                                <div className="bottom-title">
                                    <h1>American latte <span>Rs:300</span></h1>
                                </div>
                                <div className="detail">
                                    <div className="cup-size">
                                        <p>Cup-Size : </p>
                                        <form action="">
                                            <label >S</label>
                                            <input type="radio" />
                                            /
                                            <label >M</label>
                                            <input type="radio" />
                                            /
                                            <label >L</label>
                                            <input type="radio" />
                                        </form>
                                    </div>
                                    <div className="quantity">
                                        <form>
                                            <label htmlFor="">Quantity : </label>
                                            <input type="number"  min="1" max="15"/>
                                        </form>
                                    </div>
                                    <div className="insidebtn menu-btn">
                                        <button>Order Now <IoBagHandle /></button>
                                    </div>
                                </div>
                                   
                            </div>
                        </div>
                        <div className="menu-card">                   
                                <img src={crossants}  />                          
                            <div className="bottom-part">
                                <div className="bottom-title">
                                    <h1>Coissants <span>Rs:150</span></h1>
                                </div>
                                <div className="detail">
                                    <div className="quantity">
                                        <form>
                                            <label htmlFor="">Quantity : </label>
                                            <input type="number"  min="1" max="15"/>
                                        </form>
                                    </div>
                                    <div className="insidebtn menu-btn">
                                        <button>Order Now <IoBagHandle /></button>
                                    </div>
                                </div>
                                   
                            </div>
                        </div>
                        <div className="menu-card">                   
                                <img src={brownbread}  />                          
                            <div className="bottom-part">
                                <div className="bottom-title">
                                    <h1>Brown Bread <span>Rs:120</span></h1>
                                </div>
                                <div className="detail">
                                    <div className="quantity">
                                        <form>
                                            <label htmlFor="">Quantity : </label>
                                            <input type="number"  min="1" max="15"/>
                                        </form>
                                    </div>
                                    <div className="insidebtn menu-btn">
                                        <button>Order Now <IoBagHandle /></button>
                                    </div>
                                </div>
                                   
                            </div>
                        </div>
                        <div className="menu-card">                   
                                <img src={cupcake}  />                          
                            <div className="bottom-part">
                                <div className="bottom-title">
                                    <h1>Cup Cake <span>Rs:50</span></h1>
                                </div>
                                <div className="detail">
                                    <div className="quantity">
                                        <form>
                                            <label htmlFor="">Quantity : </label>
                                            <input type="number"  min="1" max="15"/>
                                        </form>
                                    </div>
                                    <div className="insidebtn menu-btn">
                                        <button>Order Now <IoBagHandle /></button>
                                    </div>
                                </div>
                                   
                            </div>
                        </div>
                        <div className="menu-card">                   
                                <img src={FrenchBaguette}  />                          
                            <div className="bottom-part">
                                <div className="bottom-title">
                                    <h1>French Bread<span>Rs:200</span></h1>
                                </div>
                                <div className="detail">
                                    <div className="quantity">
                                        <form>
                                            <label htmlFor="">Quantity : </label>
                                            <input type="number"  min="1" max="15"/>
                                        </form>
                                    </div>
                                    <div className="insidebtn menu-btn">
                                        <button>Order Now <IoBagHandle /></button>
                                    </div>
                                </div>
                                   
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Menu ;