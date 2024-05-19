// LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Snackbar from "../../Components/Snackbar/Snackbar.jsx";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "harsh72" && password === "123456") {
      navigate("/dashboard");
    } else {
      setErrorMessage("Username and password are incorrect");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <Snackbar message={errorMessage} />
    </div>
  );
};

export default LoginPage;
