import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <div className="auth-bg">
        <div className="auth-card">
          <h2>Sign Up</h2>
          <p>Join us for premium car care services</p>
        
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />

          <label>Phone Number</label>
          <input type="text" placeholder="91+ 123456" />

          <label>Password</label>
          <input type="password" placeholder="••••••••" />

          <label>Confirm Password</label>
          <input type="password" placeholder="••••••••" />
         
         <label className="terms">
  <input type="checkbox" />
  <span>I agree to the Terms & Privacy Policy</span>
</label>
   

          <button className="main-btn">Sign Up</button>

          <p className="small">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>

      <style>{`
        .auth-bg {
          background: #f7efdd;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .terms {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 15px;
  font-size: 14px;
  color: #7b3a3a;
  cursor: pointer;
}

input {
         
          background: #f7efdd;
        
        }
.terms input {
  width: 18px;
  height: 18px;
  accent-color: #7b1e2b;
  cursor: pointer;
}

        .auth-card {
          background: #f5ecd3;
          width: 500px;
          padding: 40px;
          border-radius: 18px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
          text-align: center;
        }

        h2 {
          color: #6b0f14;
          margin-bottom: 5px;
        }

        p {
          color: #7b3a3a;
          margin-bottom: 20px;
        }

        label {
          display: block;
          text-align: left;
          font-size: 13px;
          margin-top: 15px;
          color: #6b0f14;
        }

        input {
          width: 100%;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #e0d2b0;
          margin-top: 5px;
        }

        .row {
          font-size: 12px;
          margin: 15px 0;
          text-align: left;
        }

        .main-btn {
          background: #7b1e2b;
          color:#f3ead6;
          border: none;
          padding: 12px;
          width: 100%;
          border-radius: 12px;
          margin-top: 10px;
          cursor: pointer;
        }

        .small {
          font-size: 13px;
          margin-top: 15px;

          text-align: center;
          font-size: 13px;
          margin-top: 14px;
      }

        .small a {
          color: #7b1e2b;
          font-weight: 600;
        }



        
      `}</style>
    </>
  );
}

