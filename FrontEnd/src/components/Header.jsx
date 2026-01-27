import LuxeLogo from "../assets/LuxeLogo.png";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="brand-row">
        <img src={LuxeLogo} alt="LuxeWash Logo" />
        <div className="brand-text">
          <h3>LuxeWash</h3>
          <span>Premium Car Care</span>
        </div>
      </div>

      <nav className="nav">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/services" className="nav-link">
          Services
        </NavLink>
        <NavLink to="/pricing" className="nav-link">
          Pricing
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </nav>

      <div className="auth">
        <Link to="/login" className="login">
          Login
        </Link>
        <Link to="/signup">
          <button className="register">Register</button>
        </Link>
      </div>

      <style>{`
        .header {
          background: linear-gradient(to left, #4a0c0c, #6b0f14);
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          padding: 10px 40px;
          height: 55px;
        }

        .brand-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand-row img {
          height: 32px;
          width: 32px;
        }

        .brand-text h3 {
          margin: 0;
          font-family: "Satisfy";
          color: #f6efdf;
          font-size: 20px;
        }

        .brand-text span {
          font-size: 11px;
          color: #f3d9a4;
          margin-top: -4px;
          display: block;
        }

        .nav {
          display: flex;
          justify-content: center;
          gap: 90px;
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          color: #f3d9a4;
          font-size: 20px;
          font-weight: 500;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 0;
          height: 2px;
          background: #f5c16c;
          
        }

        .nav-link.active::after {
          width: 100%;
        }

        .auth {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .login {
          color: #f3d9a4;
          text-decoration: none;
          font-size: 18px;
        }

        .register {
          background: #f3d9a4;
          border: none;
          padding: 7px 18px;
          border-radius: 10px;
          color: #6b0f14;
          font-weight: bold;
          cursor: pointer;
        }

        .register:hover {
          background: #ffe4b5;
        }
      `}</style>
    </header>
  );
}

export default Header;
