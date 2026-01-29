import React from "react";

export default function TopMetrics({ employees = [], servicesCount = 0 }) {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto 20px", display: "flex", gap: 14 }}>
      <div style={{ flex: 1, background: "#fff", padding: 18, borderRadius: 12, boxShadow: "0 6px 16px rgba(0,0,0,0.04)" }}>
        <div style={{ color: "#7b1e2b", fontSize: 13, fontWeight: 700 }}>Total Employees</div>
        <div style={{ fontSize: 28, fontWeight: 800, color: "#5b1b1b", marginTop: 8 }}>{employees.length}</div>
        <div style={{ color: "#7b3a3a", fontSize: 13, marginTop: 6 }}>All registered staff</div>
      </div>

      <div style={{ flex: 1, background: "#fff", padding: 18, borderRadius: 12, boxShadow: "0 6px 16px rgba(0,0,0,0.04)" }}>
        <div style={{ color: "#7b1e2b", fontSize: 13, fontWeight: 700 }}>Total Services</div>
        <div style={{ fontSize: 28, fontWeight: 800, color: "#5b1b1b", marginTop: 8 }}>{servicesCount.toLocaleString()}</div>
        <div style={{ color: "#7b3a3a", fontSize: 13, marginTop: 6 }}>Services completed since opening</div>
      </div>

      <div style={{ flex: 1, background: "#fff", padding: 18, borderRadius: 12, boxShadow: "0 6px 16px rgba(0,0,0,0.04)" }}>
        <div style={{ color: "#7b1e2b", fontSize: 13, fontWeight: 700 }}>Employees Working</div>
        <div style={{ fontSize: 28, fontWeight: 800, color: "#5b1b1b", marginTop: 8 }}>{employees.filter((e) => e.active).length}</div>
        <div style={{ color: "#7b3a3a", fontSize: 13, marginTop: 6 }}>Currently on duty</div>
      </div>
    </div>
  );
}
