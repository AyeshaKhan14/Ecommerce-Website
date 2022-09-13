import { Routes, Route } from "react-router-dom";
import {About} from "./About.jsx"
import {Login} from "./Login.jsx"
import {Cart} from "./Cart.jsx"
import {Contact} from "./Contact us.jsx"
import { FQA } from "./FAQ";
import { Home } from "./Home.jsx";
import { Product } from "./Product.jsx";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useEffect, useState } from "react";
import PrivateRoute from "./PrivateRoutes.jsx";


export const AllRoutes=()=>{
 const {cartData} =useContext(AuthContext)
    return (
        <div>
          <Routes>
          <Route path="/" element={<PrivateRoute> <Home/></PrivateRoute>} />
          <Route path="/product" element={<PrivateRoute><Product/></PrivateRoute> } />
          <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>  } />
          <Route path="/FQA" element={<FQA/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
       
        
          </Routes>


        </div>
    )
}