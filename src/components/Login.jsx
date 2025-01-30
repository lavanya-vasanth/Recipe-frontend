import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [users, setUsers] = useState([]); 
  const PERMANENT_EMAIL = "admin@example.com"; 
  const PERMANENT_PASSWORD = "password123"; 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (isSignUp) {
      const userExists = users.find((user) => user.email === email);
      if (userExists) {
        setError("An account with this email already exists.");
      } else {
        setUsers([...users, { email, password }]);
        setError("");
        alert("Account created successfully! You can now log in.");
        setIsSignUp(false);
      }
    } else {
      
      if (email === PERMANENT_EMAIL && password === PERMANENT_PASSWORD) {
        setError("");
        alert("Logged in successfully!");
        navigate("/toviewcreate"); 
      } else {
       
        const validUser = users.find(
          (user) => user.email === email && user.password === password
        );

        if (validUser) {
          setError("");
          alert("Logged in successfully!");
          navigate("/toviewcreate");
        } else {
          setError("Invalid email or password.");
        }
      }
    }
  };

  const handleChange = (e) => {
    setError("");
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="login-signup-page">
      <div className="login-signup-container" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-signup-btn">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="toggle-mode">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button
            type="button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError("");
            }}
            className="toggle-btn"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
