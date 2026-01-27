import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .wrapper {
          background:#f6efdf;
          min-height:100vh;
          display:flex;
          align-items:center;
          justify-content:center;
        }
        .box {
          background:#fff;
          padding:40px;
          border-radius:20px;
          text-align:center;
        }
      `}</style>

      <div className="wrapper">
        <div className="box">
          <h2>Card Added Successfully</h2>
          <p>Your payment method has been saved.</p>
          <button onClick={() => navigate("/payment-methods")}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
