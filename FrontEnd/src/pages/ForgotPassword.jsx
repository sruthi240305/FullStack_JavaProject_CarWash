import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSend = () => {
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    navigate("/reset-link-sent");
  };

  return (
    <>
      <style>{`
        .forgot-wrapper {
          background: #f6efdf;
          min-height: calc(100vh - 60px);
          padding: 40px 20px;
        }

        .forgot-container {
          max-width: 520px;
          margin: 0 auto;
        }

        .back-link {
          color: #7b1e2b;
          font-weight: 600;
          margin-bottom: 14px;
          display: inline-block;
          text-decoration: none;
        }

        .forgot-title {
          font-size: 36px;
          color: #7b1e2b;
          margin: 0 0 30px;
        }

        .forgot-card {
          background: #f3e9cf;
          padding: 36px 32px;
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }

        .forgot-card label {
          display: block;
          font-weight: 600;
          color: #7b1e2b;
          margin-bottom: 10px;
        }

        .input-box {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #f6efdf;
          padding: 12px 14px;
          border-radius: 12px;
          margin-bottom: 26px;
        }

        .input-box input {
          border: none;
          background: transparent;
          outline: none;
          width: 100%;
          font-size: 15px;
        }

        .reset-btn {
          width: 100%;
          background: #7b1e2b;
          color: #f6efdf;
          border: none;
          padding: 14px;
          font-size: 18px;
          font-weight: 600;
          border-radius: 14px;
          cursor: pointer;
        }

        .reset-btn:hover {
          opacity: 0.9;
        }
      `}</style>

      <div className="forgot-wrapper">
        <div className="forgot-container">
          <Link to="/login" className="back-link">
            ← Back
          </Link>

          <h1 className="forgot-title">Forgot Password</h1>

          <div className="forgot-card">
            <label>Email Address</label>

            <div className="input-box">
              ✉
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
              />
            </div>

            <button className="reset-btn" onClick={handleSend}>
              Send Reset Link
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
