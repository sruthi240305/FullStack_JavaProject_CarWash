import { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avathar.png";
import LuxeLogo from "../assets/LuxeLogo.png";
import ProfilePanel from "./ProfilePanel";



const DashboardHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .header {
          background: linear-gradient(to left, #4a0c0c, #6b0f14);
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 8px 40px;
          height: 60px;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .brand-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand-row img {
          height: 32px;
          width: 32px;
          object-fit: contain;
        }

        .brand-text h3 {
          margin: 0;
          font-family: "Satisfy";
          color: #f6efdf;
          font-size: 18px;
          line-height: 1.3;
        }

        .brand-text span {
          font-size: 11px;
          color: #f3d9a4;
          display: block;
          margin-top: -4px;
          line-height: 0.85;
        }

        .nav {
          display: flex;
          gap: 55px;
          justify-content: center;
        }

        .nav a {
          text-decoration: none;
          color: #f3d9a4;
          font-size: 15px;
          font-weight: 500;
        }

        .nav a:hover {
          color: #ffffff;
        }

        .avatar {
          justify-self: end;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          object-fit: cover;
          cursor: pointer;
          border: 2px solid #f6efdf;
        }

        /* Overlay */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          z-index: 40;
        }
      `}</style>

      <header className="header">
     
        <div className="brand-row">
          <img src={LuxeLogo} alt="LuxeWash Logo" />
          <div className="brand-text">
            <h3>LuxeWash</h3>
            <span>Premium Car Care</span>
          </div>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/services">Service</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <img
          src={avatar}
          alt="User Avatar"
          className="avatar"
          onClick={() => setOpen(true)}
        />
      </header>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      <ProfilePanel open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default DashboardHeader;
