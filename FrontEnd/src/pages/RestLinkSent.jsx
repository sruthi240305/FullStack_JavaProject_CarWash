import { Link } from "react-router-dom";

const ResetLinkSent = () => {
  return (
    <>
      <style>{`
        .success-wrapper {
          background: #f6efdf;
          min-height: calc(100vh - 60px);
          padding: 60px 20px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .success-card {
          background: #ffffff;
          max-width: 520px;
          width: 100%;
          padding: 40px 36px;
          border-radius: 18px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
          text-align: center;
        }

        .icon-box {
          width: 70px;
          height: 70px;
          background: #7b1e2b;
          border-radius: 18px;
          margin: 0 auto 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
          color: #f6efdf;
        }

        .success-title {
          color: #7b1e2b;
          font-size: 32px;
          margin-bottom: 12px;
        }

        .success-text {
          font-size: 15px;
          color: #9b6b6b;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .back-login {
          display: inline-block;
          background: #7b1e2b;
          color: #f6efdf;
          padding: 12px 30px;
          border-radius: 14px;
          font-weight: 600;
          text-decoration: none;
          font-size: 16px;
        }

        .back-login:hover {
          opacity: 0.9;
        }
      `}</style>

      <div className="success-wrapper">
        <div className="success-card">
          <div className="icon-box">✉</div>

          <h1 className="success-title">Reset Link Sent</h1>

          <p className="success-text">
            We have sent a password reset link to your registered email address.
            Please check your inbox and follow the instructions to reset your
            password.
          </p>

          <Link to="/login" className="back-login">
            Back to Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResetLinkSent;
