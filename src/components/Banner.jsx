import { useEffect, useState } from "react";
import { CiCoffeeCup } from "react-icons/ci";
import { SiBuymeacoffee } from "react-icons/si";
import { BsCup } from "react-icons/bs";
import { GiCupcake } from "react-icons/gi";
import { PiBreadFill } from "react-icons/pi";
import { LiaCookieSolid } from "react-icons/lia";
const images =[
        "https://www.vittoriacoffee.com/cdn/shop/articles/australian-coffee-types_1x.svg?v=1725341955",
        "https://imgs.search.brave.com/V1UJz6t7GKiyF3xvXzVw7l36OuW8ul4mWGSI72y6dd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg2/ODM1NTk5L3Bob3Rv/L2ljZS1jb2ZmZWUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVF3UFhzU0JsR2F4/WGNxZDgxczZXcWZL/bmdWZnN1RWh4SlJZ/MW02S3Rya0U9",
        "https://imgs.search.brave.com/ES0SDiKjdc53ZzCxBCB2ydRnG5IQ8c9EIRFI8oWxuGw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c291dGhlcm5saXZp/bmcuY29tL3RobWIv/b1c3VXNGLUJ4Yko5/UEJqbEJSZE5TdU1P/ZzlFPS8xNTAweDAv/ZmlsdGVyczpub191/cHNjYWxlKCk6bWF4/X2J5dGVzKDE1MDAw/MCk6c3RyaXBfaWNj/KCkvaGVpcmxvb21f/MDJfMDcwXzBfMF8w/LTIwMDAtYzYxOWZm/Y2I4YzMwNDg1Yzg1/NmZhODE4ZjhiY2Vi/Y2YuanBn",
        "https://imgs.search.brave.com/X5MQdiAh5lWxImb3MFDxtFvZN5icp4O8pv-BMjc6E0o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c291dGhlcm5saXZp/bmcuY29tL3RobWIv/M1RfUF8xdFJLX2Vq/cVk2dTFLWHp4UnZZ/Z0RjPS8xNTAweDAv/ZmlsdGVyczpub191/cHNjYWxlKCk6bWF4/X2J5dGVzKDE1MDAw/MCk6c3RyaXBfaWNj/KCkvSGVpcmxvb21f/MDJfMDU1XzAtMS1h/MmNhYTZiYmEzYjM0/MDc2YWEwNmFlMzVi/MzdhOGY1Mi5qcGc",
        "https://www.lifeloveandsugar.com/wp-content/uploads/2023/06/Chocolate-Cupcakes-Recipe3.jpg",
        
];
console.log(images);
const Banner =() =>{
    const [current ,setcurrent]=useState(0);
// function for next slide 
const nextslide =() =>{
    setcurrent(current === images.length -1 ? 0 : current +1 );
}
// function for prev slide 
const prevslide =() =>{
    setcurrent(current === 0 ? images.length -1  : current -1) ;
}
// navigation dot 
    const goToSlide = (index) => {
        setcurrent(index);
    };
// auto slide 
    useEffect(() => {
        const interval = setInterval(() => {
         nextslide();
        }, 3500); 
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [current]);




    return(
        <>
        <section id="banner">
                <div className="banner-title container">
                    <h1>Coffee Cup </h1>
                </div>
            <div className="banner-main container">
                <div className="banner-left">
                    <div className="title">
                        <h1>Welcome to Coffee Cup Cafe Where Every Sip Feels Like Home!!</h1>
                    </div>
                    <div className="des">
                        <p>Welcome to Coffee Cup Café, where every sip is crafted with passion and warmth. Nestled in the heart of town, our café is more than just a place to grab a cup of coffee—it’s a cozy retreat for those who appreciate quality, comfort, and connection. </p>
                        <div className="insidebtn">
                            <button>Order Now <CiCoffeeCup/></button>
                        </div>
                    </div>
                    <div className="right-side">
                                <div className="detail">
                                    <icon> <BsCup /></icon>
                                   
                                    <div className="icon-des">
                                        <h1>Coffee</h1>
                                        <p>Enjoy Our special Coffee</p>
                                    </div>
                                </div>
                                <div className="detail details">
                                    <div className="icon-des">
                                        <h1>Cold Coffee</h1>
                                        <p>Have  Best Cold Coffee </p>
                                    </div>
                                    <icon> <SiBuymeacoffee/></icon>
                                </div>
                                <div className="detail">
                                    <icon> <PiBreadFill /></icon>
                                    <div className="icon-des">
                                        <h1>Bread</h1>
                                        <p>Have Our Fresh Bread</p>
                                    </div>
                                </div>
                                <div className="detail details">
                                    <div className="icon-des">
                                        <h1>Cookies</h1>
                                        <p>Have Our Fresh cookies</p>
                                    </div>
                                    <icon> <LiaCookieSolid /></icon>
                                </div>
                               
                                
                                
                               
                            </div>
                </div>
                <div className="banner-right">
                        <div className="img">
                            {images.map((item,index) => current ===index &&(
                            <img key={index} src={item} alt="img"/>
                            )
                            )}
                            
                        </div>
                      
                        {/* Navigation Dots */}
                        <div className="dots-container">
                            {images.map((_, index) => (
                                <span
                                key={index}
                                className={`dot ${current === index ? "active" : ""}`}
                                onClick={() => goToSlide(index)}
                                ></span>
                            ))}
                        </div>
                       
                            
                </div>
                            
            </div>
                    
        </section>
        </>
    )
}
export default Banner ;