import React, { useState } from "react";
import { Link, Navigate,useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
    const navigate = useNavigate();
  
  const handleBlurEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleBlurPassword = (event) => {
    setPassword(event.target.value);
  };
  const handleBlurConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const createuserHandle = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Password two dose not match");
      return;
    } else {
      setError("");
    }

    if(password <= 6){
        setError('password must be 6 more length');

        return;
    }

    createUserWithEmailAndPassword(email, password);
  
   
  };
  if(user){
    navigate('/')
}

  return (
    <div className="login-form">
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>

        <form onSubmit={createuserHandle}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleBlurEmail}
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="Password">Password</label>
            <input
              onBlur={handleBlurPassword}
              type="password"
              name="password"
              id="Password"
            />
          </div>

          <div className="input-group">
            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <input
              onBlur={handleBlurConfirmPassword}
              type="password"
              name="ConfirmPassword"
              id="ConfirmPassword"
            />
            {error !== "" && <p style={{ color: "red" }}>{error}</p>}
          </div>

          <input type="submit" value="Sign Up" className="form-submit" />
        </form>
        <p>
          All ready Account ?{" "}
          <Link className="create-account" to="/login">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
