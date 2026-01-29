import { Link } from "react-router-dom";
const BookNow4 = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Book Your Appointment</h1>
      <p style={styles.subtitle}>
        Select your service, choose a time, and we'll take care of the rest.
      </p>

      <div style={styles.steps}>
        <div style={styles.step}>1</div>
        <div style={styles.line}></div>
        <div style={styles.step}>2</div>
        <div style={styles.line}></div>
        <div style={styles.step}>3</div>
        <div style={styles.line}></div>
        <div style={styles.step}>4</div>
      </div>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Review & Confirm</h2>
        <p style={styles.cardSubtitle}>Review your booking details</p>

        <h3 style={styles.sectionTitle}>Booking Summary</h3>

        <div style={styles.summaryGrid}>
          <div>
            <p style={styles.label}>Service</p>
            <p style={styles.value}>Engine Wash</p>

            <p style={styles.label}>Date</p>
            <p style={styles.value}>January 16th, 2026</p>

            <p style={styles.label}>Contact</p>
            <p style={styles.value}>ede</p>
            <p style={styles.value}>frf</p>
          </div>

          <div>
            <p style={styles.label}>Vehicle</p>
            <p style={styles.value}>Truck / Pickup</p>

            <p style={styles.label}>Time</p>
            <p style={styles.value}>08:00 AM</p>
          </div>
        </div>

        <div style={styles.totalBox}>
          <span style={styles.totalText}>Total</span>
          <span style={styles.totalAmount}>₹999</span>
        </div>

        <p style={styles.note}>
          Payment will be collected at the location after service completion.
        </p>

        <div style={styles.buttons}>
          <Link to="/booknow3" style={styles.backBtn}>
            Back
          </Link>

          <Link to="/confirmation" style={styles.confirmBtn}>
            Confirm Booking
            </Link>
          </div>

      </div>
    </div>
  );
};

export default BookNow4;

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

  step: {
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

  line: {
    width: "45px",
    height: "3px",
    backgroundColor: "#7a142c",
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
    marginBottom: "5px",
  },

  cardSubtitle: {
    color: "#7a142c",
    fontSize: "14px",
    marginBottom: "25px",
  },

  sectionTitle: {
    color: "#7b4a3f",
    marginBottom: "20px",
  },

  summaryGrid: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "25px",
  },

  label: {
    fontSize: "14px",
    color: "#7a142c",
    marginTop: "10px",
  },

  value: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#3f2a24",
  },

  totalBox: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginTop: "20px",
  },

  totalText: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#7a142c",
  },

  totalAmount: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#7a142c",
  },

  note: {
    fontSize: "13px",
    color: "#7a142c",
    marginTop: "6px",
  },

  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "35px",
  },

  backBtn: {
    backgroundColor: "#f0e2c4",
    color: "#7a142c",
    border: "none",
    padding: "12px 30px",
    borderRadius: "25px",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
  },

  confirmBtn: {
    backgroundColor: "#7a142c",
    color: "#fff",
    border: "none",
    padding: "14px 40px",
    borderRadius: "25px",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
  },
};
