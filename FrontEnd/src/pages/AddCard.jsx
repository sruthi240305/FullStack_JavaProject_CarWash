import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
  const navigate = useNavigate();
  const [card, setCard] = useState({ number: "", expiry: "", cvc: "" });

  return (
    <>
      <style>{`
        .add-wrapper { background:#f6efdf; min-height:100vh; padding:40px; }
        .card { max-width:600px; margin:auto; background:#fff; padding:28px; border-radius:16px; }
        input { width:100%; padding:12px; margin-bottom:12px; border-radius:8px; border:1px solid #eee; }
        .btn { background:#7b1e2b; color:#fff; padding:12px 18px; border:none; border-radius:10px; cursor:pointer; }
      `}</style>

      <div className="add-wrapper">
        <div className="card">
          <h2>Add New Card</h2>

          <input placeholder="Card Number" value={card.number} onChange={(e) => setCard({ ...card, number: e.target.value })} />
          <input placeholder="MM/YY" value={card.expiry} onChange={(e) => setCard({ ...card, expiry: e.target.value })} />
          <input placeholder="CVC" value={card.cvc} onChange={(e) => setCard({ ...card, cvc: e.target.value })} />

          <button className="btn" onClick={() => navigate('/payment-methods')}>Save Card</button>
        </div>
      </div>
    </>
  );
};

export default AddCard;
