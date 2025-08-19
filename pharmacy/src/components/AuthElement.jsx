import { Navigate, useLocation } from "react-router-dom"

export const AuthElement = ({isLoggedIn, element}) => {
    //to get the previous page
    //when click to anauthorized page & redirected to login page
    const location = useLocation()
    
    return(
        isLoggedIn ? 
        element : 
        <Navigate to="/login" 
            state={{from: location}} 
            replace
        />
    )
}