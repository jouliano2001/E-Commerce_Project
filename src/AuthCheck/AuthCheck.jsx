import { Navigate, useLocation } from "react-router-dom";

const AuthCheck = ({children}) => {
  
    const isAuthenticate = true;
    const location = useLocation();

    if (!isAuthenticate){
        return <Navigate to='/Auth/Login' state={
            {
                from: location
            }
        }/>
    }
    return children;    
}

export default AuthCheck