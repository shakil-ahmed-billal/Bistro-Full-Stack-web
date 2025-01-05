import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AuthenticationRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    // const [user , setUser] = useState(false)
    // const loading = false
    const location = useLocation()
    console.log(user)

    if(loading){
        return <p>loading..</p>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
}

export default AuthenticationRoute
