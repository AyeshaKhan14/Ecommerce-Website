import React from "react"
import style from "./Home.module.css"
import Style from "./Product.module.css"
import CartProduct from "./CartAdd";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer";

export const Home=()=>{
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
      setLoading(true)
        axios.get("https://akcart.herokuapp.com/products").then((res)=>{
           
            setData(res.data)
            setLoading(false)
        })
      },[])
    
   
    return (
        <div>
             <div className={style.homesrc} >
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/June/ACC_Cat_Page/D48997761_Low_ASP_Store_Banner_Header_PC.jpg"/>
           </div>
              
              <div>
                <img className={style.imgestl} src="https://cdn.shopify.com/s/files/1/0590/3830/2392/files/Mobile_Accessories_55624d5e-edcd-4435-a8cf-3ee4e831f875.jpg?v=1637249456" />

              </div>
              {loading ? <h1>Loading!!</h1> :
              <div>
                  <div className={style.h2}> <h1>New Collection</h1></div>
                 <div className={Style.grid}>
              
              {data.map((el)=>(
             <CartProduct key={el.id} id={el.id} title={el.title} thumbnail={el.thumbnail} 
             price={el.price} description={el.description} />
              ))}
    
    
          </div>
              </div>

          }
              
           
            
          <Footer/>
        </div>
       
    )

}