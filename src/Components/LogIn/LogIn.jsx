import React, { useState } from "react";
import "./login.css";
import { data } from "../../data";

const LogIn = () => {
  const [auth, setAuth] = useState({
    username: "", password : ""
  });
  // const [users, setUsers] = useState(data)
  const [error, setError] = useState("")
  const { username, password } = auth;
  // Fill the inputs
  const onInputChange = (e) => {
    setAuth({...auth, [e.target.name] : e.target.value})
  };
  //Verification
  const users = data
  const Authentication =(e)=> {
    e.preventDefault();
    if((username === users.username) && ((password === users.password))) {
      alert("Welcome");
    } else {
      setError("account doesn't exist, please sign in")
    }
  };

  return (
    <div className="LogIn">
      <div className="form-container">
        <h2 className="form-title">Connection</h2>
        <form className="login-form" onSubmit={()=>Authentication()}>
          <div className="form-group">
            <input
              className="form-input"
              value={username}
              name="username"
              id="username"
              required
              type="text"
              placeholder="Nom d'utilisateur"
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-input"
              value={password}
              name="password"
              id="password"
              required
              type="password"
              placeholder="Nouveau mot de passe"
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <button className="form-button" type="submit">
              Se connecter
            </button>
          </div>
        </form>
        <p className="error-message">{error}</p>
      </div>
    </div>
  );
};

export default LogIn;
