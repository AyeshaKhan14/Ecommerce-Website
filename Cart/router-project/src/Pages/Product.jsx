import React from "react"
import { useEffect, useState } from "react";
import {useParams, Link} from "react-router-dom"
import Style from "./Product.module.css"
import CartProduct from "./CartAdd";
import axios from "axios";
import Footer from "./Footer";

// const getProduct=()=>{
//     return fetch("https://akcart.herokuapp.com/products").then((res)=>res.json())
// }


export const Product=()=>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("https://akcart.herokuapp.com/products").then((res)=>{
           
            setData(res.data)
        })
      },[])
    
        return (
            <>
             <h1>Welcome to Product Store</h1>
            
            <div className={Style.grid}>
              
              {data.map((el)=>(
             <CartProduct key={el.id} id={el.id} title={el.title} thumbnail={el.thumbnail} 
             price={el.price} description={el.description} />
              ))}
    
    
          </div>
          <Footer/>
            </>
           
        )
   





}





