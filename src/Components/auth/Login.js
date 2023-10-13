import React, { useState } from "react";
import api from "../../Utils/Api";
import LoadingSpinnerButton from "../LoadingSpinnerButton";
import { useNavigate } from "react-router-dom";





export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [formError, setFormError] = useState(null);
  const [loading, setLoading] =  useState(false)
  let navigate = useNavigate();
  const handleSubmit = async () => { 
    setLoading(true)
    let result = await api.login({Email : email, Password : password});
    if(result.failure)
      setFormError("Erreur lors de l'appel de l'api")
    setLoading(false)
    if(!result.failure){
      localStorage.setItem("user" , JSON.stringify({
        username : "qzdqz",
        token : "qzdzqdqz",
        id : "qzdqz"
      }))
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
          {!loading ? <button type="button" onClick={() => handleSubmit()}>Connexion</button>  : <LoadingSpinnerButton></LoadingSpinnerButton>}
      </form>
      {formError === null?? <p style={{color:"red"}}>{formError}</p>}
      <div id="create-account-wrap">  
          Not a member ?
          <a href="/createAccount">    
            Create Account
          </a>
      </div>
    </div>
  );
}
