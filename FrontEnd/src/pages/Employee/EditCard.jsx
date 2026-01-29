import { useNavigate } from "react-router-dom";

const EditCard = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .wrapper { background:#f6efdf; min-height:100vh; padding:40px; }
        .box {
          max-width:500px;
          margin:auto;
          background:#fff;
          padding:30px;
          border-radius:18px;
        }
        input {
          width:100%;
          padding:12px;
          margin-bottom:16px;
          border-radius:10px;
        }
        .danger { background:#b30000; }
      `}</style>

      <div className="wrapper">
        <div className="box">
          <h2>Edit Card</h2>

          <input value="•••• 4242" disabled />
          <input placeholder="Expiry Date" />

          <button onClick={() => navigate("/payment-methods")}>
            Update Card
          </button>

          <br /><br />

          <button className="danger" onClick={() => navigate("/delete-card")}>
            Delete Card
          </button>
        </div>
      </div>
    </>
  );
};

export default EditCard;
