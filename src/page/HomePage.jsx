import { useState } from "react"
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import Header from '../components/Header';
import Menu from "../components/Menu";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
const HomePage =()=>{
return(
    <>
    <Header />
    <Banner />
    <AboutSection />
    <Menu/>
    <ContactSection/>
    <Footer/>
    </>
)
}

export default HomePage ;