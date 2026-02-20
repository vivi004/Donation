import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import loginImg from "../../../Assets/Images/hero.png";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const redirect = queryParams.get("redirect");
  const redirectPath = redirect === "need" ? "/need" :
    (redirect === "fundraisers" ? "/#fundraisers" :
      (redirect || "/need"));

  const Signin = (e) => {
    e.preventDefault();
    let a = document.getElementById("email").value;
    let b = document.getElementById("password").value;

    if (a !== "vivin@gmail.com" && b !== "vivin") {
      alert("Email and Password are Wrong");
    } else if (a !== "vivin@gmail.com") {
      alert("Email is Wrong");
    } else if (b !== "vivin") {
      alert("Password is Wrong");
    } else if (a === "vivin@gmail.com" && b === "vivin") {
      localStorage.setItem("isLoggedIn", "true");
      navigate(redirectPath);
    }
  };

  return (
    <div className="login-container">
      <Link to="/" className="back-home">
        <ion-icon name="arrow-back-outline"></ion-icon>
        <span>Back to Home</span>
      </Link>
      <div className="login-wrapper">
        <div className="login-side-image">
          <img src={loginImg} alt="Donation" />
          <div className="image-overlay">
            <h2>Your Contribution Matters</h2>
            <p>Join us in making a difference in the lives of those who need it most.</p>
          </div>
        </div>
        <div className="login-form-side">
          <form onSubmit={Signin} className="glass">
            <h1>Login</h1>
            <p className="subtitle">Welcome back! Please enter your details.</p>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" id="email" required placeholder=" " />
              <label>Email</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" id="password" required placeholder=" " />
              <label>Password</label>
            </div>
            <div className="forget">
              <label>
                <input type="checkbox" />
                <span>Remember Me</span>
              </label>
              <Link to="/login">Forgot Password?</Link>
            </div>
            <button type="submit">Log in</button>
            <div className="register">
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
