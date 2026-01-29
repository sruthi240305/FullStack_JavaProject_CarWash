import { Link } from "react-router-dom";

function EmployeeDashboard() {
  return (
    <>
      <div className="emp-container">
        <aside className="emp-sidebar">
          <nav className="menu">
            <Link to="/employee-dashboard" className="active">Dashboard</Link>
            <Link to="/employee-impact">Your Impact</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/editprofile">Profile</Link>
            <Link to="/login" className="logout">Logout</Link>
          </nav>
        </aside>

        <main className="emp-main">
          <h2 className="page-title">Dashboard</h2>

          <section className="graph-section">
            <h3>Stability Overview</h3>
            <div className="graph-box">📊 Stability Graph</div>
          </section>

          <section className="stats">
            <div className="stat-card">
              <h4>Today's Tasks</h4>
              <p>5 Pending</p>

              <Link to="/employee-task" className="task-btn">
                View Tasks
              </Link>
            </div>

            <div className="stat-card">
              <h4>Completed Jobs</h4>
              <p>12 Today</p>
            </div>

            <div className="stat-card">
              <h4>Performance</h4>
              <p>Excellent</p>
            </div>
          </section>
        </main>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Poppins:wght@400;500;600&display=swap');

        * {
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        body {
          margin: 0;
          background: #f8f3de;
        }

        .emp-container {
          display: flex;
          min-height: 100vh;
          background: #f8f3de;
        }

        .emp-sidebar {
          width: 200px;
          background: #7b1e2b;
          padding: 20px 14px;
        }

        .menu a {
          display: block;
          padding: 10px 14px;
          margin-bottom: 10px;
          border-radius: 8px;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
        }

        .menu a:hover,
        .menu .active {
          background: rgba(255, 255, 255, 0.22);
        }

        .menu .logout {
          margin-top: 32px;
          background: rgba(0, 0, 0, 0.25);
          text-align: center;
        }

        .emp-main {
          flex: 1;
          padding: 32px;
          background: #f8f3de;
        }

        .page-title {
          font-family: "Playfair Display", serif;
          font-size: 32px;
          font-weight: 700;
          color: #7b1e2b;
          margin-bottom: 28px;
        }

        .graph-section {
          background: #fffaf0;
          padding: 24px;
          border-radius: 18px;
          margin-bottom: 32px;
          box-shadow: 0 10px 24px rgba(0,0,0,0.08);
        }

        .graph-section h3 {
          font-family: "Playfair Display", serif;
          font-size: 22px;
          margin-bottom: 16px;
          color: #7b1e2b;
        }

        .graph-box {
          height: 200px;
          border-radius: 14px;
          background: linear-gradient(180deg, #efe6d1, #e6dbc3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7b1e2b;
          font-size: 18px;
          font-weight: 600;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .stat-card {
          background: #ffffff;
          padding: 20px;
          border-radius: 18px;
          box-shadow: 0 10px 24px rgba(0,0,0,0.08);
        }

        .stat-card h4 {
          font-family: "Playfair Display", serif;
          font-size: 18px;
          margin-bottom: 10px;
          color: #3a2a1f;
        }

        .stat-card p {
          font-size: 20px;
          font-weight: 700;
          color: #7b1e2b;
          margin-bottom: 12px;
        }

        .task-btn {
          display: inline-block;
          padding: 8px 14px;
          border-radius: 8px;
          background: #7b1e2b;
          color: #fff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
        }

        .task-btn:hover {
          background: #611623;
        }

        @media (max-width: 900px) {
          .emp-sidebar {
            display: none;
          }

          .emp-main {
            padding: 24px;
          }

          .stats {
            grid-template-columns: 1fr;
          }

          .page-title {
            font-size: 26px;
          }
        }
      `}</style>
    </>
  );
}

export default EmployeeDashboard;
