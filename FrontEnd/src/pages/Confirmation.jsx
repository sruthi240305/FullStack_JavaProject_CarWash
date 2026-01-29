import React from "react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
      
        <div style={styles.iconWrapper}>
          <div style={styles.icon}>✓</div>
        </div>

        <h1 style={styles.title}>Booking Confirmed!</h1>
        <p style={styles.subtitle}>
          Thank you for choosing LuxeWash, ede!
        </p>

        <p style={styles.note}>
          A confirmation has been sent to Message.
        </p>

        <div style={styles.buttons}>
          <Link to="/" style={styles.back}>
                      Back to Home
                    </Link>
         <Link to="/booknow" style={styles.book}>
                     Book Another
                    </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;



const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#fbf3df",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Georgia, serif",
  },

  card: {
    backgroundColor: "#f6e9c9",
    padding: "60px 40px",
    borderRadius: "18px",
    width: "700px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },

  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "25px",
  },

  icon: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#e6cfc5",
    color: "#7a142c",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    fontWeight: "bold",
    border: "2px solid #7a142c",
  },

  title: {
    color: "#7b4a3f",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#7b4a3f",
    fontSize: "16px",
    marginBottom: "25px",
  },

  note: {
    fontSize: "13px",
    color: "#7a142c",
    marginBottom: "45px",
  },

  buttons: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 40px",
  },

  back: {
    backgroundColor: "transparent",
    border: "2px solid #7a142c",
    color: "#7a142c",
    padding: "12px 35px",
    borderRadius: "25px",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
  },

  book: {
    backgroundColor: "#7a142c",
    border: "none",
    color: "#fff",
    padding: "12px 35px",
    borderRadius: "25px",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
  },
};
