import {  useLocation , Navigate} from "react-router-dom";
import React from "react";
import useLocalStorage from "./Hooks/useLocalStorage";




export default function RequireAuth({ children}) {
    const user = useLocalStorage.GetUser();
    let location = useLocation();
    if(user === false) {
        localStorage.clear();
        return <Navigate to="/login" state={{ from: location}} replace />
    }

    return children;
}