import {  useLocation , Navigate} from "react-router-dom";
import React from "react";
import {  useRecoilValue } from "recoil";
import { authState } from "../../state/auth"


export default function RequireAuth({ children}) {
    const userState = useRecoilValue(authState)
    let location = useLocation();
    if(!userState.isAuthenticated) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
    return children;
}