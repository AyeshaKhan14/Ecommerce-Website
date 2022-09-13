import  React from "react";
import axios from "axios"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import CartProduct from "./CartAdd";
import Style from "./Cart.module.css"


export const Cart =()=>{
    const {cartData,handleDelete ,handleAddQty,handleDecrease}= useContext(AuthContext)
    // console.log(cartData,"hi")

    const total=cartData.reduce((acc,el)=>acc + el.price * el.quantity,0)


   return(
    <div>
      {cartData.map((el)=>
    
        <div className={Style.cart}>
        <img  height="50px"  width="100px" src={el.image} alt={el.image} className={Style.img}  />
         <h3>{el.title}</h3>
         <p className={Style.pricepara}>Price $:{el.price} </p>
         <div className={Style.threebtn} >
          <button onClick={()=>handleAddQty(el.id)} >+</button>
          <button>{el.quantity}</button>
          <button disabled={el.quantity===1} onClick={()=>handleDecrease(el.id)}>-</button>
         </div>
         
         <div>
         <button className={Style.remove} onClick={()=>handleDelete(el.id)}>Remove</button>
         </div>
         
       </div>
    )}
    <div className={Style.total}>Total $ {total.toFixed(2)}</div>
    </div>

   )
}
   


