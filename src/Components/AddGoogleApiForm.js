import React, { useState } from "react";
import LoadingSpinnerButton from "./LoadingSpinnerButton";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import api from "../Utils/Api"


export default function AddGoogleApiForm({ loading, setLoading}) {
const [GoogleAdded, setGoogleAdded] = useState(false)
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
        <>
        <GoogleLogin
        onClick={() => setLoading(true)}
          onSuccess={(credentialResponse) => {
            //console.log(credentialResponse);
            //console.log(jwtDecode(credentialResponse.credential))
            SaveApiKey()
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
         {GoogleAdded === true? <p style={{"color" : "green"}}>V</p> : <p style={{"color" : "red"}}>X</p>}
        </>
      ) : (
        <button disabled>
          <LoadingSpinnerButton></LoadingSpinnerButton>
        </button>
      )}

   
    </GoogleOAuthProvider>
  );
}
