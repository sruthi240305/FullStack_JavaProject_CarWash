import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BookNow3 = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Book Your Appointment</h1>

      <div style={styles.steps}>
        <div style={styles.stepActive}>1</div>
        <div style={styles.lineActive}></div>
        <div style={styles.stepActive}>2</div>
        <div style={styles.lineActive}></div>
        <div style={styles.stepActive}>3</div>
        <div style={styles.line}></div>
        <div style={styles.stepInactive}>4</div>
      </div>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Contact Details</h2>
        <p style={styles.cardSubtitle}>Enter your contact information</p>

        <div style={styles.row}>
          <div style={styles.group}>
            <label style={styles.label}>Full Name *</label>
            <input style={styles.input} placeholder="John Doe" />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Phone Number *</label>
            <input style={styles.input} placeholder="(555) 123-4567" />
          </div>
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Email (Optional)</label>
          <input style={styles.input} placeholder="john@example.com" />
        </div>

        <div style={styles.buttons}>
         <button  style={styles.backBtn}onClick={() => navigate("/booknow")}>Back</button>
         
<Link to="/booknow4" style={{ textDecoration: "none" }}>
  <button style={styles.continueBtn}>
    Continue
  </button>
</Link>
        </div>
      </div>
    </div>
  );
};

export default BookNow3;


const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f6f0e1",
    padding: "40px",
    fontFamily: "Georgia, serif",
  },

  title: {
    textAlign: "center",
    color: "#7b4a3f",
    marginBottom: "25px",
  },

  steps: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "40px",
  },

  stepActive: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "#7a142c",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },

  stepInactive: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "#f0e2c4",
    color: "#7b4a3f",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },

  lineActive: {
    width: "40px",
    height: "3px",
    backgroundColor: "#7a142c",
  },

  line: {
    width: "40px",
    height: "3px",
    backgroundColor: "#f0e2c4",
  },

  card: {
    maxWidth: "1000px",
    margin: "auto",
    backgroundColor: "#f7edd2",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },

  cardTitle: {
    color: "#7b4a3f",
    marginBottom: "6px",
  },

  cardSubtitle: {
    color: "#7a142c",
    fontSize: "14px",
    marginBottom: "30px",
  },

  row: {
    display: "flex",
    gap: "30px",
    marginBottom: "25px",
  },

  group: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },

  label: {
    marginBottom: "8px",
    color: "#5a3b32",
    fontWeight: "600",
  },

  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #e4d7b6",
    backgroundColor: "#fbf6e8",
    fontSize: "14px",
  },

  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
  },

  backBtn: {
    backgroundColor: "#f0e2c4",
    color: "#7a142c",
    border: "none",
    padding: "12px 30px",
    borderRadius: "25px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  continueBtn: {
    backgroundColor: "#7a142c",
    color: "#fff",
    border: "none",
    padding: "14px 40px",
    borderRadius: "25px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
