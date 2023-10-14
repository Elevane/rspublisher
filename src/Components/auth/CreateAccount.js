import React, { useState } from "react";
import api from "../../Utils/Api";
import { useNavigate } from "react-router-dom";
import LoadingSpinnerButton from "../UI/LoadingSpinnerButton";
export default function CreateAccount() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [username, setUserName] = React.useState();
  const [formError, setFormError] = useState(null)
  let navigate = useNavigate();
  const handleSubmit = async () => {
    setLoading(true);
    let result = await api.register({
      Email: email,
      Password: password,
      username: username,
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
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="text"
          id="username"
          onChange={(e) => setUserName(e.target.value)}
          name="username"
          placeholder="username"
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
      {formError === null?? <p style={{color:"red"}}>{formError}</p>}
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
