import axios from "axios"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import sTyle from "./CartAdd.module.css"
import Footer from "./Footer";

const CartProduct=(props)=>{
   const {thumbnail, title,description, price,id}=props
  
    const {showCartData, cartData}= useContext(AuthContext)
      
 

 const addtoCart=(id,title,thumbnail,price)=>{
        
    const cartItem={
        title:title,
        image:thumbnail,
        price:price,
        quantity:1,
        id:id
    }
    // console.log("cart:",cartItem)
  
    
     try{
        axios.post("https://akcart.herokuapp.com/cart",{...cartItem},{headers:{"Access-Control-Allow-Origin":"*","mode":"no-cors"}})
        .then((res)=>{
            showCartData()
            alert("Successfully added to cart")
        })
        .catch((err)=>{
            alert("Product already added to cart")
        })
        
       
    }
    catch(err){
        console.log("error:",err)
       
    }

   } 
    return (
        <div  className={sTyle.btn}>
            <img src={thumbnail} alt="thumbnail"/>
            <h3>{title}</h3>
           <p>{description}</p>
           <p className={sTyle.price} >price $: {price}</p>
            <button onClick={() => addtoCart(id,title,thumbnail,price)}>ADD TO CART</button>
            
        </div>
    )

}

export default CartProduct;

 