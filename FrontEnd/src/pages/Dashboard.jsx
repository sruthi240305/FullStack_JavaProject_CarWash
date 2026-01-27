import giftIcon from '../assets/gift.png';
import carIcon from '../assets/das_car.png';
import locationIcon from '../assets/location.png';
import clockIcon from '../assets/clock.png';

const Dashboard = () => {
  return (
    <>
    
      <style>{`
        body {
          margin: 0;
        }

        .dashboard {
          background: #f6efdf;
          min-height: 100vh;
          padding: 40px;
          font-family: "Georgia", serif;
        }

        .welcome-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .welcome-text h1 {
          margin: 0;
          font-size: 42px;
          color: #6b4a4a;
        }

        .welcome-text p {
          margin-top: 6px;
          color: #7b1e2b;
          font-weight: 600;
        }

        .welcome-actions button {
          margin-left: 12px;
        }

        .btn-outline {
          background: transparent;
          border: 1.5px solid #7b1e2b;
          color: #7b1e2b;
          padding: 10px 18px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-primary {
          background: #7b1e2b;
          border: none;
          color: #fff;
          padding: 10px 20px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
        }

        .banner {
          background: #7b1e2b;
          border-radius: 18px;
          padding: 28px;
          color: #f6efdf;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .banner-left {
          display: flex;
          align-items: center;
        }

        .gift-icon {
          background: rgba(255,255,255,0.15);
          border-radius: 14px;
          padding: 18px;
          margin-right: 18px;
          font-size: 24px;
        }

        .banner h2 {
          margin: 0;
        }

        .banner p {
          margin-top: 6px;
          font-size: 14px;
        }

        .btn-light {
          background: #f6efdf;
          color: #7b1e2b;
          padding: 12px 22px;
          border-radius: 16px;
          font-weight: 700;
          border: none;
          cursor: pointer;
        }

        .content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 26px;
        }

        .card {
          background: #fff;
          border-radius: 16px;
          padding: 24px;
        }
.gift-icon img {
  width: 36px;
  height: 36px;
}

.empty-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 14px;
  opacity: 0.6;
}

.map-icon {
  width: 40px;
  height: 40px;
  opacity: 0.6;
}

        .card h3 {
          margin-top: 0;
          color: #7b1e2b;
        }

        .empty {
          text-align: center;
          padding: 50px 0;
          color: #c8a4a4;
        }

        .empty button {
          margin-top: 16px;
        }

        .map {
          height: 160px;
          background: #fffaedf7;
          padding: 40px;
          border-radius: 14px;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c8a4a4;
          font-size: 26px;
        }

        .address {
          font-size: 14px;
          color: #7b1e2b;
          font-weight: 600;
        }

        .directions {
          margin-top: 18px;
          width: 100%;
        }
      `}</style>

      <div className="dashboard">
        <div className="welcome-row">
          <div className="welcome-text">
            <h1>Welcome,</h1>
            <p>Get started by booking your first car wash service.</p>
          </div>

          <div className="welcome-actions">
            <button className="btn-outline">Notification</button>
            <button className="btn-primary">New Booking</button>
          </div>
        </div>

     
        <div className="banner">
          <div className="banner-left">
           <div className="gift-icon">
  <img src={giftIcon} alt="Gift" />
</div>

            <div>
              <h2>Welcome to LuxeWash!</h2>
              <p>
                Book your first service and get 20% off. Start earning loyalty
                points today!
              </p>
            </div>
          </div>
          <button className="btn-light">Book Your First Wash</button>
        </div>

        <div className="content">
       
          <div>
            <div className="card" style={{ marginBottom: "24px" }}>
              <h3>Upcoming Bookings</h3>
              <div className="empty">
  <img src={carIcon} alt="Car" className="empty-icon" />
  <p>No upcoming bookings</p>
  <p>Book your first service to get started!</p>
  <button className="btn-primary">Book Now</button>
</div>

            </div>

            <div className="card">
              <h3>Recent History</h3>
             <div className="empty">
  <img src={clockIcon} alt="Service History" className="empty-icon" />
  <p>No service history yet</p>
  <p>Your completed services will appear here.</p>
</div>

            </div>
          </div>

          <div className="card">
            <h3>Our Location</h3>
           <div className="map">
  <img src={locationIcon} alt="Location" className="map-icon" />
</div>

            <p className="address">
              No. 12, Main Road,<br />
              Anna Nagar, Coimbatore – 625020,<br />
              Tamil Nadu.
            </p>
            <button className="btn-outline directions">Get Directions</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
