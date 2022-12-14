import React , {useState} from "react";
import { UserContext } from "./UserContext";

function GlobalState(props){
    const[userLogin, setUserLogin] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const [userRoles, setUserRoles] = useState({})
    const [auth, setAuth] = useState({});
    const loginRoles = (user) =>{
        setUserRoles(user)
    }
    
    
    const loginUser =(user) =>{
        setUserLogin(true)
        setUserInfo(user)
        
    }
    const logoutUser =() =>{
        setUserLogin(false)
        setUserInfo({})
    }

    return(
        <UserContext.Provider value={{
            userLogin:userLogin,
            userRoles:userRoles,
            userInfo:userInfo,
            auth, setAuth,
            loginUser:loginUser,
            logoutUser:logoutUser,
             
        }}>
            {props.children}

        </UserContext.Provider>
    )
}

export default GlobalState;