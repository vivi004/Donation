import React from "react";
import { Link } from "react-router-dom";
import "../Css/Login.css";

const Reg = () => {
  return (
    <section>
      <form>
        <h1>Register</h1>
        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="email" required />
          <label>Email</label>
        </div>
        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" required />
          <label>Password</label>
        </div>
        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" required />
          <label>Confirm Password</label>
        </div>
        <div className="forget">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          Forget Password
        </div>
        <button>Register</button>
        <div className="register">
          <p>
            Already have an account! <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Reg;
