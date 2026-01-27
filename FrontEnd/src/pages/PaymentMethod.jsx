import { Link, useNavigate } from "react-router-dom";

const PaymentMethods = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .wrapper { background:#f6efdf; min-height:100vh; padding:40px; }
        .container { max-width:900px; margin:auto; }
        h1 { color:#7b1e2b; font-size:42px; }
        .card-box {
          background:#fff;
          padding:24px;
          border-radius:16px;
          margin-top:24px;
          display:flex;
          justify-content:space-between;
          align-items:center;
        }
        .card-info h3 { margin:0; color:#7b1e2b; }
        .btn {
          background:#7b1e2b;
          color:#fff;
          border:none;
          padding:10px 16px;
          border-radius:10px;
          cursor:pointer;
        }
      `}</style>

      <div className="wrapper">
        <div className="container">
          <Link to="/dashboard">← Back</Link>
          <h1>Payment Methods</h1>

          <div className="card-box">
            <div className="card-info">
              <h3>Visa •••• 4242</h3>
              <small>Expires 08/27</small>
            </div>
            <div>
              <button className="btn" onClick={() => navigate("/edit-card")}>
                Edit
              </button>
            </div>
          </div>

          <br />
          <button className="btn" onClick={() => navigate("/add-card")}>
            + Add New Card
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;
