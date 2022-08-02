import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({allowedRoles}) => {
    const {auth} = useAuth();
    const location = useLocation();

    return(
        auth?.roles?
         <Outlet />
        : auth?.user
            ?<Navigate to="/" state={{from:location}} replace/>
            :<Navigate to="/" state={{from:location}} replace />
         );


}

export default RequireAuth;

/*auth?.roles?.find(roles => allowedRoles?.includes(roles))
? <Outlet />
: auth?.user
    ?<Navigate to="/" state={{from:location}} replace/>
    :<Navigate to="/" state={{from:location}} replace />*/