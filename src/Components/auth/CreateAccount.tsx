import React, { ChangeEvent, useState } from "react";
import api from "../../Utils/Api";
import { useNavigate } from "react-router-dom";
import LoadingSpinnerButton from "../UI/LoadingSpinnerButton";


export default function CreateAccount() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [formError, setFormError] = useState<string>('d')
  let navigate = useNavigate();


  const handleSubmit = async () => { 
    setLoading(true);
    let result = await api.register({
      email: email,
      password: password
    });
    if (result.failure) setFormError("Erreur lors de l'appel de l'api");
    setLoading(false);
    if (!result.failure) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: "qzdqz",
          token: "qzdzqdqz",
          id: "qzdqz",
        })
      );
      navigate("/");
    }
  };

  return (
    <div id="login-form-wrap">
      <h2 className="pb-2"> Create account </h2>
      <form id="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="email"
          onChange={(e : ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="Password"
          required
        />
        {!loading ? (
          <button type="button" onClick={() => handleSubmit()}>
            Connexion
          </button>
        ) : (
          <LoadingSpinnerButton></LoadingSpinnerButton>
        )}
      </form>
      {formError !== '' ?? <p style={{color:"red"}}>{formError}</p>}
      <div id="create-account-wrap">
        <p>
          Already a member,
          <a href="/login">
           
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
