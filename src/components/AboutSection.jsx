import { useEffect, useState } from "react";
import aboutimg from "../assets/CoffeeCup.png"
import { Link } from "react-router-dom";
const AboutSection = () =>{
    return(
        <>
        <section id="about">
            <div className="about-main container">
                <div className="about-left">
                    <img src={aboutimg} alt="Cafe pic" />
                </div>
                <div className="about-right">
                    <div className="about-title banner-title ">
                        <h1>About US</h1>
                    </div>
                    <div className="about-us-des">
                        <p>Welcome to Coffee Cup Café, where every cup tells a story! Nestled in the heart of town, our café is more than just a coffee shop—it’s a cozy retreat for coffee lovers, friends, and families looking for a warm and inviting atmosphere. <br />
                         At Coffee Cup Café, we believe in the magic of a perfectly brewed cup. Whether you're here for your morning espresso, an afternoon pick-me-up, or a peaceful evening with a book, our handcrafted coffee and delightful treats make every moment special.  <br />
                           Our passion for quality is reflected in every sip. We source only the finest coffee beans, roast them to perfection, and prepare each drink with love and expertise. Pair your favorite coffee with our delicious homemade pastries, cakes, and snacks—all made fresh daily.</p>
                    </div>
                    <div className="insidebtn abt-btn">
                    <Link to="About"><button>See More</button></Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default AboutSection ;