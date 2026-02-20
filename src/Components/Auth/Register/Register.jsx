import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import loginImg from "../../../Assets/Images/fst.jpg";

const Reg = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="login-container">
      <Link to="/" className="back-home">
        <ion-icon name="arrow-back-outline"></ion-icon>
        <span>Back to Home</span>
      </Link>
      <div className="login-wrapper">
        <div className="login-form-side">
          <form className="glass" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <p className="subtitle">Join our community and help save lives.</p>
            <div className="inputbox">
              <ion-icon name="person-outline"></ion-icon>
              <input type="text" id="name" required placeholder=" " />
              <label>Full Name</label>
            </div>
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
                <span>I agree to the Terms & Conditions</span>
              </label>
            </div>
            <button type="submit">Sign Up</button>
            <div className="register">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
        <div className="login-side-image">
          <img src={loginImg} alt="Register" />
          <div className="image-overlay">
            <h2>Start Your Journey</h2>
            <p>Your small contribution can bring a massive change in someone's life.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reg;
