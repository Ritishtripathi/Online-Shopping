import {Route, Navigate } from "react-router-dom";


const ProtectedRoute=({element})=>{



    const isAuthenticated= !! localStorage.getItem("token");

    return isAuthenticated?(
        <Route element={element}/>

    ):(
        <Navigate to="/Login" replace/>
    )

}

export default ProtectedRoute;