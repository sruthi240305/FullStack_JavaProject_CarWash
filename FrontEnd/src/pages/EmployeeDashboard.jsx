import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function EmployeeDashboard() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="dashboard-layout">
        <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
          <h2 className="logo">LuxeWash</h2>

          <nav className="menu">
            <a className="active">Dashboard</a>
            <a>Your Impact</a>
            <a>Settings</a>
            <a>Edit Profile</a>
            <a className="logout">Logout</a>
          </nav>
        </aside>

        <main className="main">
          <button
            className="menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>

          <section className="graph-card">
            <h3>Stability Overview</h3>
            <div className="graph-placeholder">📈 Stability Graph</div>
          </section>

          <section className="task-grid">
            <div className="task-card">
              <h4>Today's Tasks</h4>
              <p>5 Pending</p>
            </div>

            <div className="task-card">
              <h4>Completed Jobs</h4>
              <p>12 Today</p>
            </div>

            <div className="task-card">
              <h4>Performance</h4>
              <p>Excellent</p>
            </div>
          </section>
        </main>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: "Segoe UI", sans-serif;
        }

        .dashboard-layout {
          display: flex;
          min-height: 100vh;
          background: #f4f6f8;
        }

        .sidebar {
          width: 240px;
          background: #7b1e2b;
          color: white;
          padding: 20px;
          transition: transform 0.3s ease;
        }

        .sidebar.closed {
          transform: translateX(-100%);
        }

        .sidebar.open {
          transform: translateX(0);
        }

        .logo {
          text-align: center;
          margin-bottom: 30px;
        }

        .menu a {
          display: block;
          padding: 12px 16px;
          margin-bottom: 10px;
          border-radius: 8px;
          cursor: pointer;
          color: white;
          text-decoration: none;
        }

        .menu a:hover,
        .menu .active {
          background: rgba(255, 255, 255, 0.2);
        }

        .logout {
          margin-top: 30px;
          background: rgba(0, 0, 0, 0.2);
        }

        .main {
          flex: 1;
          padding: 30px;
          position: relative;
        }

        .menu-btn {
          font-size: 26px;
          background: none;
          border: none;
          cursor: pointer;
          color: #7b1e2b;
          margin-bottom: 20px;
        }

        .graph-card {
          background: #1f1f1f;
          color: white;
          padding: 20px;
          border-radius: 14px;
          margin-bottom: 30px;
        }

        .graph-card h3 {
          margin-bottom: 15px;
        }

        .graph-placeholder {
          height: 260px;
          background: linear-gradient(180deg, #2c2c2c, #121212);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #bbb;
          font-size: 20px;
        }

        .task-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .task-card {
          background: white;
          padding: 20px;
          border-radius: 14px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
        }

        .task-card h4 {
          margin-bottom: 10px;
          color: #444;
        }

        .task-card p {
          font-size: 22px;
          font-weight: bold;
          color: #7b1e2b;
        }

        @media (max-width: 768px) {
          .sidebar {
            position: absolute;
            height: 100%;
            z-index: 100;
          }
        }
      `}</style>
    </>
  );
}

export default EmployeeDashboard;
