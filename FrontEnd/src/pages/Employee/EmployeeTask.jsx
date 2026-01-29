import { Link } from "react-router-dom";

function EmployeeTask() {
  const tasks = [
    { id: 1, title: "Exterior Wash – Sedan", status: "Pending", time: "10:00 AM" },
    { id: 2, title: "Interior Cleaning – SUV", status: "Pending", time: "11:30 AM" },
    { id: 3, title: "Full Detailing – Hatchback", status: "Completed", time: "09:00 AM" },
    { id: 4, title: "Engine Wash – Sedan", status: "Pending", time: "02:00 PM" },
  ];

  return (
    <>
      <div className="task-container">
        <aside className="task-sidebar">
          <nav className="menu">
            <Link to="/employee-dashboard">Dashboard</Link>
            <Link to="/employee-impact">Your Impact</Link>
            <Link to="/employee-tasks" className="active">Tasks</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/editprofile">Profile</Link>
            <Link to="/login" className="logout">Logout</Link>
          </nav>
        </aside>

        <main className="task-main">
          <h2 className="page-title">My Tasks</h2>

          <div className="task-list">
            {tasks.map((task) => (
              <div key={task.id} className="task-card">
                <div>
                  <h4>{task.title}</h4>
                  <small>Scheduled at {task.time}</small>
                </div>

                <span className={`status ${task.status.toLowerCase()}`}>
                  {task.status}
                </span>
              </div>
            ))}
          </div>

          <Link to="/employee-dashboard" className="back-btn">
            ← Back to Dashboard
          </Link>
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

        .task-container {
          display: flex;
          min-height: 100vh;
          background: #f8f3de;
        }

        .task-sidebar {
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

        .task-main {
          flex: 1;
          padding: 32px;
        }

        .page-title {
          font-family: "Playfair Display", serif;
          font-size: 32px;
          font-weight: 700;
          color: #7b1e2b;
          margin-bottom: 28px;
        }

        .task-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .task-card {
          background: #fff;
          padding: 18px 22px;
          border-radius: 16px;
          box-shadow: 0 10px 24px rgba(0,0,0,0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .task-card h4 {
          margin: 0 0 6px 0;
          font-size: 18px;
          color: #3a2a1f;
        }

        .task-card small {
          color: #777;
        }

        .status {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }

        .status.pending {
          background: #fff3cd;
          color: #856404;
        }

        .status.completed {
          background: #d4edda;
          color: #155724;
        }

        .back-btn {
          display: inline-block;
          margin-top: 28px;
          text-decoration: none;
          color: #7b1e2b;
          font-weight: 600;
        }

        .back-btn:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .task-sidebar {
            display: none;
          }

          .task-main {
            padding: 24px;
          }

          .page-title {
            font-size: 26px;
          }
        }
      `}</style>
    </>
  );
}

export default EmployeeTask;
