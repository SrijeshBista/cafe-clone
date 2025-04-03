import { useState } from "react"
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import Header from '../components/Header';
import Menu from "../components/Menu";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { createBrowserRouter } from "react-router-dom";
const HomePage =()=>{
   

return(
    <>
   

    <Banner />
    <AboutSection />
    <Menu/>
    <ContactSection/>
    </>
)
}

export default HomePage ;