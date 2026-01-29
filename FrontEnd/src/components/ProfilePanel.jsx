import { useNavigate } from "react-router-dom";

import avatar from "../assets/avathar.png";
import settingsIcon from "../assets/settings.png";
import paymentIcon from "../assets/payment.png";
import vehicleIcon from "../assets/MyVe.png";
import editIcon from "../assets/Edit.png";

const ProfilePanel = ({ open, onClose }) => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .profile-panel {
          position: fixed;
          top: 60px;
          right: -460px;
          width: 420px;
          height: calc(100vh - 60px);
          background: #ffffff;
          padding: 32px 28px;
          box-shadow: -8px 0 24px rgba(0, 0, 0, 0.18);
          transition: right 0.35s ease;
          z-index: 60;
          border-radius: 0 0 0 24px;
        }

        .profile-panel.open {
          right: 0;
        }

        .profile-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .profile-header img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 12px;
        }

        .profile-header h4 {
          margin: 8px 0 6px;
          font-size: 20px;
          color: #5b1b1b;
        }

        .badge {
          display: inline-block;
          margin-top: 8px;
          padding: 6px 16px;
          background: #7b1e2b;
          color: #ffffff;
          border-radius: 16px;
          font-size: 13px;
          font-weight: 600;
        }

        .profile-menu {
          list-style: none;
          padding: 0;
          margin: 32px 0;
        }

        .profile-menu li {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 0;
          font-size: 16px;
          font-weight: 500;
          color: #5b1b1b;
          cursor: pointer;
        }

        .profile-menu li img {
          width: 28px;
          height: 28px;
        }

        .profile-menu li:hover {
          color: #7b1e2b;
        }

        .profile-panel hr {
          border: none;
          border-top: 1px solid #e6e6e6;
          margin: 22px 0;
        }

        .logout {
          background: none;
          border: none;
          color: #7b1e2b;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logout:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className={`profile-panel ${open ? "open" : ""}`}>
        <div className="profile-header">
          <img src={avatar} alt="Avatar" />
          <h4>Dhaksita</h4>
          <span className="badge">Welcome!</span>
        </div>

        <ul className="profile-menu">
          <li
            onClick={() => {
              navigate("/edit-profile");
              onClose();
            }}
          >
            <img src={editIcon} alt="Edit Profile" />
            Edit Profile
          </li>

          <li
            onClick={() => {
              navigate("/my-vehicles");
              onClose();
            }}
          >
            <img src={vehicleIcon} alt="" />
            My Vehicles
          </li>

          <li
            onClick={() => {
              navigate("/payment-methods");
              onClose();
            }}
          >
            <img src={paymentIcon} alt="Payment Method" />
            Payment Method
          </li>

          <li
            onClick={() => {
              navigate("/settings");
              onClose();
            }}
          >
            <img src={settingsIcon} alt="" />
            Settings
          </li>

        </ul>

        <hr />

        <button className="logout" onClick={onClose}>
          ↪ Sign Out
        </button>
      </div>
    </>
  );
};

export default ProfilePanel;
