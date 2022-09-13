import React from "react"
import { useEffect, useState } from "react"
import style from "./Login.module.css"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate, useNavigate } from "react-router-dom"
import Footer from "./Footer"

const userLogin=(userData)=>{
   return fetch("https://reqres.in/api/login", {
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
      })
}



export const Login=()=>{
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const {loginUser,logoutUser,isState,}= useContext(AuthContext)
     
    const navigate= useNavigate()


     const userData={
        email:email, 
        password:password
     }

     console.log(userData)
    const handleLogin=(e)=>{
        e.preventDefault()
      



        userLogin(userData)
        .then((res)=>res.json()
        )
        .then((res)=>{
            console.log(res, "login")
            
         
            if(res.error==="user not found")
            {
                alert("Invalid Credential")
            }
            else if(res.error==="Missing email or username" )
            {
                alert("Email or Password is missing")
            }
            else if(res.error==="Missing password")
            {
                alert("Plz provide password")
            }
            else{
                loginUser(res.token)
                navigate("/")
            }
        })
        .catch((err)=>{
            console.log(err)
          
        })
    }


  
   


    return (
        <div>
          
            <form onSubmit={handleLogin} className={style.form} >
            <h2>Login</h2>
               <input placeholder="Enter eve.holt@reqres.in" type="email"   onChange={(e) => setEmail(e.target.value)} />
               <input  placeholder="Enter cityslicka" type="password"  onChange={(e) => setPassword(e.target.value)} />
               <div className={style.submit} >
               <input  type="Submit"/>
               </div>
              
            </form>
            <div className={style.footdiv}>
            <Footer/>
            </div>
        
        </div>
    )

}