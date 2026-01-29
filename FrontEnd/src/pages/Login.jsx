import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleLogo from "../assets/Google.png";
import FacebookLogo from "../assets/Facebook.png";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "dhaksita38@gmail.com" && password === "12345") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin-dashboard");
      return;
    }

    if (email === "dhaksitarajendran@gmail.com" && password === "karpagam") {
      navigate("/employee-dashboard");
      return;
    }

    if (email && password) {
      navigate("/dashboard");
      return;
    }

    alert("Invalid credentials");
  };


  return (
    <>
      <div className="login-bg">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="subtitle">Sign in to access your account</p>

          <label>Email Address</label>
          <div className="input-box">
            <span className="icon"></span>
            <input
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label>Password</label>
          <div className="input-box">
            <span className="icon"></span>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="options">
            <label className="remember">
              <input type="checkbox" />
              Remember Me
            </label>

            <Link to="/forgot-password" className="forgot">
              Forgot password?
            </Link>
          </div>

          <button className="signin-btn" onClick={handleLogin}>
            Sign In
          </button>

          <p className="register-text">
            Don’t have an account? <Link to="/signup">Register now</Link>
          </p>

          <div className="divider" />

         <div className="social-buttons">
  <button className="social-btn">
    <img src={GoogleLogo} alt="Google" />
    Continue with Google
  </button>

  <button className="social-btn">
    <img src={FacebookLogo} alt="Facebook" />
    Continue with Facebook
  </button>
</div>

        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .login-bg {
          min-height: 100vh;
          background: #f7efdd;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-card {
          width: 420px;
          background: #f5ecd3;
          padding: 40px;
          border-radius: 22px;
          box-shadow: 0 18px 35px rgba(0,0,0,0.15);
        }

        h2 {
          text-align: center;
          color: #6b3b2a;
          margin-bottom: 6px;
        }

        .subtitle {
          text-align: center;
          font-size: 14px;
          color: #7b1e2b;
          margin-bottom: 28px;
        }

        label {
          font-size: 14px;
          color: #6b3b2a;
          margin-top: 16px;
          display: block;
        }

        .input-box {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #f7efdd;
          padding: 12px 14px;
          border-radius: 12px;
          margin-top: 6px;
        }

        .icon {
          font-size: 16px;
        }

        .input-box input {
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
          font-size: 14px;
        }

        .options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 18px;
        }

        .remember {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #6b3b2a;
        }

        .remember input {
          width: 16px;
          height: 16px;
          accent-color: #7b1e2b;
        }

        .forgot {
          font-size: 14px;
          color: #7b1e2b;
          text-decoration: none;
        }

        .forgot:hover {
          text-decoration: underline;
        }

        .signin-btn {
          width: 100%;
          margin-top: 26px;
          padding: 14px;
          border: none;
          border-radius: 999px;
          background: #7b1e2b;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
        }

        .signin-btn:hover {
          background: #8d2433;
        }

        img{
        border-radius: 25%;
        }

        .register-text {
          text-align: center;
          font-size: 13px;
          margin-top: 14px;
        }

        .register-text a {
          color: #7b1e2b;
          font-weight: 600;
        }

        .divider {
          height: 1px;
          background: #d6c4a1;
          margin: 22px 0;
        }

        

.social-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  width: 100%;
}

.social-btn {
  width: 100%;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; 

  padding: 10px 12px;
  border-radius: 999px;
  border: none;

  background: #7b1e2b;
  color: #f3d9a4;

  font-size: 13px;
  font-weight: 500;
  text-align: center;

  cursor: pointer;
}

.social-btn img {
  width: 16px; 
  height: 16px;
  flex-shrink: 0;
}

.social-btn:hover {
  background: #8d2433;
}


        
      `}</style>
    </>
  );
}
