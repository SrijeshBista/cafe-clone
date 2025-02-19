import { useState } from "react";
import { CiCoffeeCup } from "react-icons/ci";
const Banner =() =>{
    return(
        <>
        <section id="banner">
            <div className="banenr-main">
                <div className="banner-left">
                    <div className="banner-title">
                        <h1>Best Coffee Shop In Town !!</h1>
                    </div>
                    <div className="banner-des">
                        <p>Coffee cup are not more than just a coffee shop; we are a community-driven space built for coffee lovers, creatives, and those who appreciate the perfect blend of passion and craftsmanship. Our journey started with a simple mission: to serve the finest coffee with warmth, love, and a touch of magic.</p>
                    </div>
                    <div className="banner-btn">
                        <button>Get Coffee <CiCoffeeCup/> </button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Banner ;