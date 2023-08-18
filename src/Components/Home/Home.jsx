import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <div className="content">
        <h1>Welcome</h1>
        <p>Log in if u have an account or sign in if u haven't</p>
        <div className="buttons">
          <button
            className="button-89"
            type="button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="button-89"
            type="button"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
