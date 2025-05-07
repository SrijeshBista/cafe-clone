import React from 'react'
import BlogCard from '../components/BlogCard'
import traningimg from '../assets/traning.png';
import chefimg from '../assets/professionalchef.png';
import machineimg from '../assets/machine.png';
import kitchenimg from '../assets/kitchen.png';
import sitingareaimg from '../assets/siting.png';
import snaks from '../assets/snaks.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
function Blog(props) {
  return (
    <>
    <Header />
    <section id="blog">
      <div className="blog-main container">
        <BlogCard Imagesrc={traningimg} title=" A high-level coffee-making training program delves deeply into every aspect of coffee preparation, offering both theoretical knowledge and hands-on experience."/>
        <BlogCard Imagesrc={chefimg} title="A high-level coffee-making chef masters bean selection, roasting, grinding, and advanced brewing techniques, delivering exceptional coffee with precision, skill."/>
        <BlogCard Imagesrc={machineimg} title="A high-tech coffee-making machine uses advanced automation, precision temperature control, and smart features to deliver consistent, high-quality coffee ."/>
        <BlogCard Imagesrc={kitchenimg} title="A clean cafe involves organizing seating, wiping down tables and counters, cleaning coffee machines, washing dishes, sweeping floors, sanitizing restrooms, and disposing of trash."/>
        <BlogCard Imagesrc={sitingareaimg} title="An open seating area in a coffee shop features comfortable seating arrangements, natural light, cozy décor, plants, free Wi-Fi, and power outlets, creating a relaxed, inviting atmosphere for customers ."/>
        <BlogCard Imagesrc={snaks} title="A variety of bakery items includes croissants, muffins, scones, cakes, cookies, and bread, while coffee offerings feature espresso, cappuccinos, lattes, mochas, cold brew, and iced coffee."/>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Blog
