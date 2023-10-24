import React from "react";
import api from "../../Utils/Api";

import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { loadingState } from "../../state/loading";
import { authState } from "../../state/auth";
import LoadingSpinnerButton from "../UI/LoadingSpinnerButton";


export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] =  useRecoilState(loadingState)
  const [, setAuth] = useRecoilState(authState)
  let navigate = useNavigate();



  const handleSubmit = async () => { 
    setLoading(true)
    let result = await api.login({"email" : email, "password" : password});
    if(result.failure)
      console.log("Erreur lors de l'appel de l'api")
    setLoading(false)
    if(!result.failure){
      setAuth({isAuthenticated : true, username : result.result.email})
      navigate("/");
    }      
  };

  
  return (
    <div id="login-form-wrap">
      <h2> Login </h2>
      <form id="login-form">
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="email"
            value={email}
            required
          />
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="password"
            value={password}
            required
          />   
          {!loading ? <button type="button" onClick={() => handleSubmit()}>Connexion</button>  : <LoadingSpinnerButton />}
      </form>
      <div id="create-account-wrap">  
          Not a member ?
          <a href="/createAccount">    
            Create Account
          </a>
      </div>
    </div>
  );
}
