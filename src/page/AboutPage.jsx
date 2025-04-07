import React from 'react';
import aboutimg from "../assets/CoffeeCup.png"
const AboutPage =()=>{
  return  (
    <section id="about-page">
      <div className="about-page-main">
      
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
                                   Our passion for quality is reflected in every sip. We source only the finest coffee beans, roast them to perfection, and prepare each drink with love and expertise. Pair your favorite coffee with our delicious homemade pastries, cakes, and snacks—all made fresh daily. <br />
                                   At Coffee Cup, we understand the ritual of coffee. It's not just about the drink; it's about the experience. That’s why we've carefully crafted each of our cups with premium materials that maintain the perfect temperature, allowing your coffee to stay warm longer while preserving the flavors. <br />
                                   From sleek minimalist designs to vibrant, artistic styles, our collection is made to cater to all tastes and preferences. Every product we offer is a testament to our commitment to quality, functionality, and aesthetic beauty. <br />
                                   Our journey began with a simple goal: to bring together the best elements of design, sustainability, and functionality in a single product. <br />
                                   </p>
                            </div>
                           
                        </div>
                    
      </div>
    </section>
  )
}

export  default AboutPage ; 
