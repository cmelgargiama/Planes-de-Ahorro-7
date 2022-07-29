import React , {useState} from "react";
import { UserContext } from "./UserContext";

function GlobalState(props){
    const[userLogin, setUserLogin] = useState(false)
     const loginUser =() =>{
        setLoginUser(true)
    }
    const logoutUser =() =>{
        setUserLogin(false)
    }

    return(
        <UserContext.Provider value={{
            userLogin:userLogin,
            loginUser:loginUser,
            logoutUser:logoutUser, 
        }}>
            {props.children}

        </UserContext.Provider>
    )
}

export default GlobalState;