import React, { useState } from "react";
import "./signup.css";
import { data } from "../../data";

const SignUp = () => {
  const [users, setUsers] = useState(data);
  const [hide, setHide] = useState(false);
  const [newUser, setNewUser] = useState({
    username: "",
    email:"",
    password:""
  })
  const { username, email, password } = newUser;
  console.log(data);
  // Toggle Password visibility
  const HidePassword = () => {
    setHide(!hide);
  };
  // Fill the inputs
  const onInputChange = (e) => {
    setNewUser({...newUser, [e.target.name] : e.target.value})
  };
  //submission
  function handleSubmit(e) {
    e.preventDefault();
    setUsers([...users, newUser]);
    setNewUser({ username:"", email:"",password:"" })
    data.push(newUser);
    console.log("submitted");
    console.log(data);
  }

  return (
    <div className="SignUp">
      <div className="form-container">
        <h2 className="form-title">Formulaire d'inscription</h2>
        <form className="signup-form" onSubmit={(e)=>handleSubmit(e)}>
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
              value={email}
              name="email"
              id="email"
              required
              type="email"
              placeholder="Adresse e-mail"
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
              type={hide ? "text" : "password"}
              placeholder="Nouveau mot de passe"
              onChange={onInputChange}
            />
            <span className="password-toggle" onClick={HidePassword}>
              {hide ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye-slash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
              )}
            </span>
          </div>
          <div className="form-group">
            <button className="form-button" type="submit">
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
