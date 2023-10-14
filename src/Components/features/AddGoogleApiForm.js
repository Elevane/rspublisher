import React, { useState } from "react";
import LoadingSpinnerButton from "../UI/LoadingSpinnerButton";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import api from "../../Utils/Api"
import {userState} from "../../state/user"
import { useRecoilState } from "recoil";

export default function AddGoogleApiForm({ loading, setLoading}) {
const [googleAdded, setGoogleAdded] = useRecoilState(userState)

  const SaveApiKey = async (key) => {
    setLoading(true);
    let result = await api.saveGoogleSecrets({ApiKey : key});
    console.log(result)
    if(result.failure)
      console.log("Erreur lors de l'appel de l'api")
    else
      setGoogleAdded(true)
    setLoading(false);
  };


  return (
    <GoogleOAuthProvider clientId="108775869780-nevv54odcguhku7ipi8g0rhck7s9qevr.apps.googleusercontent.com">   
      {!loading ? (
        <div style={{"display" : "flex", "width" : "300px", "justifyContent" : "spaceBetween"}}>
        <GoogleLogin
        onClick={() => setLoading(true)}
          onSuccess={(credentialResponse) => {
            
            SaveApiKey()
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
         {googleAdded === true? <p style={{"color" : "green"}}>V</p> : <p style={{"color" : "red"}}>X</p>}
        </div>
      ) : (
        <button disabled>
          <LoadingSpinnerButton></LoadingSpinnerButton>
        </button>
      )}

   
    </GoogleOAuthProvider>
  );
}
