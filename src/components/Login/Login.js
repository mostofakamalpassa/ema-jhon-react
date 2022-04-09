import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-form">
      <div className="form-container">
        <h2 className="form-title">Login</h2>

        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className="input-group">
            <label htmlFor="Password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <input type="submit" value="Login" className="form-submit" />
        </form>
        <p>
            new to Ema-jhon ? <Link className="create-account" to='/signup'>Create an Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
