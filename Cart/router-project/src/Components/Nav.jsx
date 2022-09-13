import React from "react"
import { Link, NavLink } from "react-router-dom"
import Style from "./Nav.module.css"
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";



export const Navbar = () => {
  const [data, setData] = useState([])
  const {cartData ,logoutUser, isState}= useContext(AuthContext)
 


  return (
    <div
       className={Style.nav}
    >
      <div  className={Style.myNext}>
        <div className={Style.logo}>
          <img src="https://www.aabhishek.com/wp-content/uploads/2016/05/Real-Estate-Construction-Logo-Design.png"/>
        </div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/product">Product</NavLink>

        <div className={Style.catdata}>
        <NavLink to="/cart">
            <FaShoppingCart className={Style.Shppgcart} />
         </NavLink>
         <div className={Style.busket}> {cartData.length}</div>
          </div>
      </div>
     
       {/* one more div */}
       <div className={Style.travel} >
       {isState.isAuth ? (<button onClick={logoutUser} >Logout</button>) :
         (<NavLink to="/login">Login</NavLink>)
           }

         <NavLink to="/FQA">FQA</NavLink>
         <NavLink to="/Contact">Contact</NavLink>
         <NavLink to="/about">About</NavLink>
       </div>
                   
    </div>
  );
};
