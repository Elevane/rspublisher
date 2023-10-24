import {  useLocation , Navigate} from "react-router-dom";
import React from "react";
import {  useRecoilValue } from "recoil";
import { authState } from "../../state/auth"


interface RequireAuthProps {
    children: React.ReactNode;
  }
  
  const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
    const userState = useRecoilValue(authState);
    const location = useLocation();
  
    if (!userState.isAuthenticated) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return <>{children}</>;
  };
  
  export default RequireAuth;