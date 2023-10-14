import React from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { authState } from "../../state/auth";

    export default function Logout(){
        const location = useLocation();
        const resetList = useResetRecoilState(authState);
        resetList();
        return <Navigate to="/login" state={{ from: location }} replace />;
  }