import React from "react";
import { Link } from "react-router-dom";
import "../Css/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const Signin = () => {
    let a = document.getElementById("email").value;
    let b = document.getElementById("password").value;

    if (a !== "vivin@gmail.com" && b !== "vivin") {
      alert("Email and Password are Wrong");
    } else if (a !== "vivin@gmail.com") {
      alert("Email is Wrong");
    } else if (b !== "vivin") {
      alert("Password is Wrong");
    } else if (a === "vivin@gmail.com" && b === "vivin") {
      navigate("/Home");
    }
  };

  return (
    <div>
      <section>
        <form onSubmit={Signin}>
          <h1>
            <b>Login</b>
          </h1>
          <div className="inputbox">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" id="email" required />
            <label>Email</label>
          </div>
          <div className="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password" id="password" required />
            <label>Password</label>
          </div>
          <div className="forget">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            Forget Password
          </div>
          <button><Link to="/need"> Log in </Link></button>
          <div className="register">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
