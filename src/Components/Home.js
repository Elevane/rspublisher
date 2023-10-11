
import React, { useContext, useState } from "react";
import useLocalStorage from "./auth/Hooks/useLocalStorage";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import AppContext from "./AppContext";

const googleLogin = () => {

} 
export default function Home(){
    const user = useLocalStorage.GetUser();
    const [saved , setSaved] = useState(false);
    const {googleLogged, setGoogleLogged} =  useContext(AppContext)
    const SaveToken = (token) => {
        const user = {
            googlleToken: token
          };
        
          return fetch("https://localhost:7167/Youtube" , {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Accept: "*/*",
            },
            body: JSON.stringify(user),
          }).then((data) => data.json());

     }
    return(
        <div>
        <h1>welcome <strong style={{color:"red"}}>{ user.username }</strong></h1>
        <GoogleOAuthProvider clientId="108775869780-nevv54odcguhku7ipi8g0rhck7s9qevr.apps.googleusercontent.com">
            {
                googleLogged  ?  saved ? <p>Google Ok</p>: <>en attente</>: <GoogleLogin
                onSuccess={credentialResponse => {
                    
                    console.log(jwt_decode(credentialResponse.credential));
                    console.log(credentialResponse)
                    SaveToken(jwt_decode(credentialResponse.credential).jti)
                }}
                onError={() => {
                    console.log('Login Failed');
                }} />
                
            } 
        </GoogleOAuthProvider>
        {/*<a href="/logout">logout</a>*/}
        </div>
        );
}