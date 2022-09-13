import axios from "axios"
import { Children, useEffect, useState } from "react"
import { createContext } from "react"
import { Navigate } from "react-router-dom"

export const AuthContext= createContext()

const AuthContextProvider=({children})=>{

    const [isState, setIsState] =useState({})

    const [token, setToken]= useState(null)

    const loginUser=(token) =>{
        
        setIsState({
        isAuth:true,
         token:token
       })
        alert("Login Success")
       
    }

    const logoutUser=(email,token) =>{
       
        setToken(null)
        setIsState(false)
    }

    const [cartData, setCart] = useState([])
   
    const [quantity, setQuantity]= useState(0)

    const showCartData=()=>{
        try{
            
            axios.get("https://akcart.herokuapp.com/cart")
            .then((res)=>{
                // console.log(res, "carakk")
                setCart(res.data)
            })
        }catch(err)
        {
            console.log("err:",err)
        }
    }
    useEffect(() => {
        showCartData()
    }, [quantity])

//prodct add
 const handleAddQty=(id)=>{
  axios.get(`https://akcart.herokuapp.com/cart/${id}`)
  .then((res)=>{
    res.data.quantity += 1;
    axios.patch(`https://akcart.herokuapp.com/cart/${id}`, { quantity: res.data.quantity }).then((res) => {
        setQuantity(quantity + 1)

    })

  })
 }

 const handleDecrease= (id) => {
    axios.get(`https://akcart.herokuapp.com/cart/${id}`).then((res) => {
        res.data.quantity -= 1;
        axios.patch(`https://akcart.herokuapp.com/cart/${id}`, { quantity: res.data.quantity }).then((res) => {
            setQuantity(quantity - 1)

        })
    })

}

const handleDelete = (id) => {
    axios.delete(`https://akcart.herokuapp.com/cart/${id}`).then((res) => {
        setQuantity(quantity + 1)

    })
}


    return(
        <AuthContext.Provider value={{cartData,handleAddQty,showCartData,handleDecrease, handleAddQty, 
           loginUser, isState,  logoutUser,handleDelete}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;