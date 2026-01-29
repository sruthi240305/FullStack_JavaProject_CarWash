const EmployeeImpact = () => {
  return (
    <>
      <style>{`
        body {
          background: #f6efdf;
        }

        .impact-container {
          max-width: 1200px;
          margin: auto;
          padding: 40px 30px;
        }

        .welcome {
          margin-bottom: 30px;
        }

        .welcome small {
          color: #7b3a3a;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .welcome h1 {
          margin: 6px 0;
          color: #5b1b1b;
        }

        .welcome p {
          color: #7b3a3a;
        }

        .grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 28px;
        }

        .card {
          background: #fff;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .card-header h3 {
          color: #5b1b1b;
          margin: 0;
        }

        .pill {
          background: #f3d9a4;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          color: #7b1e2b;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .stat-box {
          background: #fdf8ef;
          border-radius: 16px;
          padding: 18px;
        }

        .stat-box small {
          color: #7b3a3a;
          font-weight: 600;
        }

        .stat-box h2 {
          margin: 6px 0 0;
          color: #7b1e2b;
        }

        .circles {
          display: flex;
          justify-content: space-between;
          margin: 20px 0;
        }

        .circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 8px solid #7b1e2b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #7b1e2b;
          flex-direction: column;
          font-size: 14px;
        }

        .progress {
          margin-top: 10px;
        }

        .progress-bar {
          height: 10px;
          background: #f3d9a4;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          width: 78%;
          height: 100%;
          background: #7b1e2b;
        }


        .impact-metric {
          background: #fdf8ef;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 16px;
        }

        .impact-metric h2 {
          margin: 0;
          color: #7b1e2b;
        }

        
        .journey {
          position: relative;
          margin-top: 20px;
        }

        .levels {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
        }

        .level {
          text-align: center;
        }

        .dot {
          width: 18px;
          height: 18px;
          background: #7b1e2b;
          border-radius: 50%;
          margin: auto;
        }

        .inactive {
          background: #f3d9a4;
        }
      `}</style>

      <div className="impact-container">
     
        <div className="welcome">
          <small>WELCOME BACK</small>
          <h1>Your Impact</h1>
          <p>Track your performance and work contribution</p>
        </div>

        <div className="grid">
          <div className="card">
            <div className="card-header">
              <h3>Today's Impact</h3>
              <span className="pill">+10% vs last week</span>
            </div>

            <div className="stats-row">
              <div className="stat-box">
                <small>TASKS</small>
                <h2>4</h2>
              </div>
              <div className="stat-box">
                <small>HOURS</small>
                <h2>6.5</h2>
              </div>
              <div className="stat-box">
                <small>SERVICES</small>
                <h2>3</h2>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Monthly Progress</h3>

            <div className="circles">
              <div className="circle">
                22/30
                <small>Tasks</small>
              </div>
              <div className="circle">
                148h
                <small>Hours</small>
              </div>
              <div className="circle">
                91%
                <small>On-Time</small>
              </div>
            </div>

            <div className="progress">
              <small>Overall Performance</small>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Your Contribution This Month</h3>

            <div className="impact-metric">
              <h2>38</h2>
              <p>Services Completed</p>
            </div>

            <div className="stats-row">
              <div className="impact-metric">
                <h2>12</h2>
                <p>On-Time Days</p>
              </div>
              <div className="impact-metric">
                <h2>1</h2>
                <p>Late Task</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Stability Journey</h3>
            <p>Growth based on punctuality & consistency</p>

            <div className="levels">
              <div className="level">
                <div className="dot"></div>
                <p>Starter</p>
              </div>
              <div className="level">
                <div className="dot"></div>
                <p>Reliable</p>
              </div>
              <div className="level">
                <div className="dot"></div>
                <p>Consistent</p>
              </div>
              <div className="level">
                <div className="dot inactive"></div>
                <p>Hero</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeImpact;
