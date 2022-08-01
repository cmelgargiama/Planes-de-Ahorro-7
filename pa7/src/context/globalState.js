import React , {useState} from "react";
import { UserContext } from "./UserContext";

function GlobalState(props){
    const[userLogin, setUserLogin] = useState(false)
    const [userInfo, setUserInfo] = useState({})
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
            userInfo:userInfo,
            loginUser:loginUser,
            logoutUser:logoutUser, 
        }}>
            {props.children}

        </UserContext.Provider>
    )
}

export default GlobalState;