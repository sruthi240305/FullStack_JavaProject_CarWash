import { Link } from "react-router-dom";
import { useState } from "react";

const Settings = () => {
  const [email, setEmail] = useState(true);
  const [sms, setSms] = useState(false);
  const [push, setPush] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <>
      <style>{`
        .settings-wrapper {
          background: #f6efdf;
          min-height: calc(100vh - 60px);
          padding: 40px 20px;
        }

        .settings-container {
          max-width: 900px;
          margin: auto;
        }

        .back-link {
          color: #7b1e2b;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 14px;
        }

        .settings-title {
          font-size: 44px;
          color: #7b1e2b;
          margin-bottom: 26px;
        }

        .settings-card {
          background: linear-gradient(180deg, #7b0015, #5a000f);
          border-radius: 22px;
          padding: 36px;
          color: #f6efdf;
        }

        .section {
          margin-bottom: 36px;
        }

        .section h3 {
          margin: 0;
          font-size: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .section p {
          margin: 6px 0 18px;
          color: #f3d9a4;
          font-size: 14px;
        }

        .setting-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 22px;
        }

        .setting-text h4 {
          margin: 0;
          font-size: 16px;
        }

        .setting-text span {
          font-size: 13px;
          color: #f3d9a4;
        }

        /* Toggle */
        .switch {
          position: relative;
          width: 46px;
          height: 26px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #4a0c0c;
          border-radius: 26px;
          transition: 0.3s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 20px;
          width: 20px;
          left: 3px;
          bottom: 3px;
          background-color: #f6efdf;
          border-radius: 50%;
          transition: 0.3s;
        }

        input:checked + .slider {
          background-color: #f3d9a4;
        }

        input:checked + .slider:before {
          transform: translateX(20px);
          background-color: #7b1e2b;
        }

        select {
          width: 100%;
          background: transparent;
          border: 1px solid #f3d9a4;
          padding: 12px 14px;
          border-radius: 10px;
          color: #f6efdf;
          font-size: 15px;
          outline: none;
        }

        option {
          color: #000;
        }
      `}</style>

      <div className="settings-wrapper">
        <div className="settings-container">
          <Link to="/dashboard" className="back-link">
            ← Back to Dashboard
          </Link>

          <h1 className="settings-title">Settings</h1>

          <div className="settings-card">

            <div className="section">
              <h3>🔔 Notifications</h3>
              <p>Choose how you want to be notified</p>

              {[
                ["Email Notifications", "Receive booking confirmations and updates via email", email, setEmail],
                ["SMS Notifications", "Get text messages for appointment reminders", sms, setSms],
                ["Push Notifications", "Receive push notifications on your device", push, setPush],
                ["Marketing Emails", "Receive promotions and special offers", marketing, setMarketing],
              ].map(([title, desc, state, setter], i) => (
                <div className="setting-row" key={i}>
                  <div className="setting-text">
                    <h4>{title}</h4>
                    <span>{desc}</span>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={state}
                      onChange={() => setter(!state)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              ))}
            </div>

           
            <div className="section">
              <h3>🌙 Appearance</h3>
              <p>Customize how the app looks</p>

              <div className="setting-row">
                <div className="setting-text">
                  <h4>Dark Mode</h4>
                  <span>Use dark theme across the app</span>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            <div className="section">
              <h3>🌐 Language & Region</h3>
              <p>Set your preferred language and region</p>

              <label>Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option>English</option>
                <option>Tamil</option>
                <option>Hindi</option>
              </select>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
