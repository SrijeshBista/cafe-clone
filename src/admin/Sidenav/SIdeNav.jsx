import { useState ,useEffect } from "react"
import Logo from "../../assets/cafe.png"
import { Link, NavLink } from "react-router-dom"
const SIdeNav =() => {
  return (
    <sidenav>
        <header>
        <div className="sidenav-main container">
            <div className="logo">
                <img src={Logo} alt="Coffee Cup" />
            </div>
            <div className="nav-bar">
                <ul>
                <li>
                <NavLink
                  to="/DashBoard"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  DashBoard
                </NavLink>
                  </li>
                  <li>
                  <NavLink
                  to="/ProductItem"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Product Item
                </NavLink>
                </li>
                <li>
                <NavLink
                  to="/OrderItem"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Order Item
                </NavLink>
                </li>
                </ul>
            </div>
            <div className="logout-btn">
                <Link to="/"><button>Logout</button></Link>
            </div>
        </div>   
        </header>
    </sidenav>
  )
}

export default SIdeNav;
