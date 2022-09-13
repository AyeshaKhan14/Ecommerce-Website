import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute=({children})=>{
    const {isState} = useContext(AuthContext)

    if(!isState.isAuth)
    {
        return <Navigate to="/login"/>
    }
    return (
        children
    )
}
export default PrivateRoute;