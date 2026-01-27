import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import editIcon from "../assets/Edits.png";

const EditProfile = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "Dhaksita",
    email: "dhaksita38@gmail.com",
    phone: "",
  });

  return (
    <>
      <style>{`
        .edit-wrapper {
          background: #f7efdd;
          min-height: 100vh;
          padding: 40px 24px;
        }

        .container {
          max-width: 920px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 40px;
        }

        .back-link {
          display: inline-block;
          font-size: 18px;
          font-weight: 700;
          color: #7b1e2b;
          text-decoration: none;
        }

        .back-link:hover {
          text-decoration: underline;
        }

        .card {
          background: #fefceb;
          border-radius: 18px;
          padding: 34px;
          box-shadow: 0 18px 30px rgba(0, 0, 0, 0.06);
        }

        .card-head {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #7b1e2b;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-box img {
          width: 22px;
          height: 22px;
          object-fit: contain;
        }

        .title {
          font-size: 28px;
          color: #5b1b1b;
          margin: 0;
        }

        .subtitle {
          color: #8b4b4b;
          margin-top: 6px;
        }

        .form {
          margin-top: 20px;
        }

        label {
          display: block;
          color: #6b3b2a;
          margin-top: 20px;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .field {
          display: flex;
          align-items: center;
          background: #fbf6ee;
          padding: 14px;
          border-radius: 12px;
        }

        .field input {
          border: none;
          background: transparent;
          outline: none;
          width: 100%;
          font-size: 15px;
        }

        .note {
          color: #b24a4a;
          font-size: 13px;
          margin-top: 6px;
        }

        .actions {
          display: flex;
          gap: 18px;
          margin-top: 30px;
        }

        .btn {
          padding: 14px 28px;
          border-radius: 12px;
          font-weight: 700;
          cursor: pointer;
          border: 1px solid transparent;
        }

        .btn.ghost {
          background: transparent;
          border: 2px solid #e9d9d6;
          color: #7b1e2b;
        }

        .btn.primary {
          background: #7b1e2b;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(123, 30, 43, 0.18);
        }

        @media (max-width: 640px) {
          .card {
            padding: 20px;
          }
        }
      `}</style>

      <div className="edit-wrapper">
        <div className="container">
          <div className="page-header">
            <Link to="/dashboard" className="back-link">
              ← Back to Dashboard
            </Link>
          </div>

          <div className="card">
            <div className="card-head">
              <div className="icon-box">
                <img src={editIcon} alt="Edit Profile" />
              </div>
              <div>
                <h2 className="title">Edit Profile</h2>
                <div className="subtitle">
                  Update your personal information
                </div>
              </div>
            </div>

            <div className="form">
              <label>Full Name</label>
              <div className="field">
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
              </div>

              <label>Email Address</label>
              <div className="field">
                <input value={form.email} disabled />
              </div>
              <div className="note">Email cannot be changed</div>

              <label>Phone Number</label>
              <div className="field">
                <input
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />
              </div>

              <div className="actions">
                <button
                  className="btn ghost"
                  onClick={() => navigate("/profile")}
                >
                  Cancel
                </button>
                <button
                  className="btn primary"
                  onClick={() => navigate("/profile")}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
