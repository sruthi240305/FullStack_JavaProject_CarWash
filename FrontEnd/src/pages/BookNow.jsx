import React from "react";
import { Link } from "react-router-dom";

const BookNow1 = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Book Your Appointment</h1>
      <p style={styles.subtitle}>
        Select your service, choose a time, and we'll take care of the rest.
      </p>

      <div style={styles.steps}>
        <div style={styles.stepActive}>1</div>
        <div style={styles.line}></div>
        <div style={styles.stepInactive}>2</div>
        <div style={styles.line}></div>
        <div style={styles.stepInactive}>3</div>
        <div style={styles.line}></div>
        <div style={styles.stepInactive}>4</div>
      </div>

      <div style={styles.card}>
        <p style={styles.helper}>
          Choose your wash package and vehicle type
        </p>

        <h3 style={styles.sectionTitle}>Select Services</h3>

        <div style={styles.serviceGrid}>
          <div style={styles.serviceBox}>
            <strong>Basic Wash</strong>
            <span>30 min</span>
          </div>
          <div style={styles.serviceBox}>
            <strong>Premium Wash</strong>
            <span>1.5+ hours</span>
          </div>
          <div style={styles.serviceBox}>
            <strong>Ultimate Detail</strong>
            <span>3+ hours</span>
          </div>
          <div style={styles.serviceBox}>
            <strong>Interior Cleaning</strong>
            <span>45 min</span>
          </div>
          <div style={styles.serviceBox}>
            <strong>Ceramic Coating</strong>
            <span>4+ hours</span>
          </div>
          <div style={styles.serviceBox}>
            <strong>Engine Wash</strong>
            <span>30 min</span>
          </div>
        </div>

        <h3 style={styles.sectionTitle}>Vehicle Type</h3>

        <div style={styles.vehicleGrid}>
          {[
            "Sedan",
            "SUV / Crossover",
            "Truck / Pickup",
            "Van / Minivan",
            "Sports Car",
            "Luxury Vehicle",
          ].map((v) => (
            <div key={v} style={styles.vehicleBox}>
              <span style={styles.carIcon}>🚗</span>
              <span>{v}</span>
            </div>
          ))}
        </div>

        <div style={styles.buttons}>
          <div style={styles.buttons}>
  <Link to="/" style={{ textDecoration: "none" }}>
    <button style={styles.cancelBtn}>Cancel</button>
  </Link>

  <Link to="/booknow2" style={{ textDecoration: "none" }}>
    <button style={styles.continueBtn}>Continue</button>
  </Link>
</div>
        </div>
      </div>
    </div>
  );
};

export default BookNow1;

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
    marginBottom: "8px",
  },

  subtitle: {
    textAlign: "center",
    color: "#7a142c",
    fontSize: "14px",
    marginBottom: "30px",
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
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  stepInactive: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "#f0e2c4",
    color: "#7b4a3f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  line: {
    width: "45px",
    height: "3px",
    backgroundColor: "#f0e2c4",
  },

  card: {
    maxWidth: "900px",
    margin: "auto",
    backgroundColor: "#f7edd2",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },

  helper: {
    color: "#7a142c",
    fontSize: "14px",
    marginBottom: "20px",
  },

  sectionTitle: {
    color: "#7b4a3f",
    marginBottom: "15px",
  },

  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "30px",
  },

  serviceBox: {
    border: "1px solid #7a142c",
    borderRadius: "12px",
    padding: "15px",
    color: "#7a142c",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  vehicleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginBottom: "35px",
  },

  vehicleBox: {
    border: "1px solid #7a142c",
    borderRadius: "14px",
    padding: "20px",
    textAlign: "center",
    color: "#7a142c",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    fontSize: "14px",
  },

  carIcon: {
    fontSize: "22px",
  },

  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },

  cancelBtn: {
    backgroundColor: "#7a142c",
    color: "#fff",
    border: "none",
    padding: "14px 40px",
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
    marginLeft: "550px",
  },
};
