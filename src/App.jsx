import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './page/HomePage'
import "./App.css";
import AboutPage from './page/AboutPage';
import Product from './page/Product';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './page/Blog';
import ContactUs from './page/ContactUs';
import LoginPage from './page/LoginPage';
import DashBoard from './admin/Dashboard/DashBoard';
import Productitem from './admin/Product/Product';
import OrderItem from './admin/orderitem/orderitem';
import SignUp from './page/SignUp';
import Update from './page/Update';
function App() {
  return (
      <>
      <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/LoginPage/SignUp" element={<SignUp/>}/>
        <Route path="/DashBoard" element={<DashBoard/>}/>
        <Route path="/ProductItem" element={<Productitem/>}/>
        <Route path="/OrderItem" element={<OrderItem/>}/>
        <Route path="/LoginPage/Update" element={<Update/>}/>
      </Routes>
      {/* <Footer /> */}
    </Router>
    
      </>
  )
}

export default App
