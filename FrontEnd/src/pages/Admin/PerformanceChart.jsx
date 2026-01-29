import React from "react";

export default function PerformanceChart({ employees = [], perf = {}, onUpdate = () => {} }) {
  const max = 100;
  return (
    <div>
      {employees.slice(0, 10).map((emp) => {
        const score = perf[emp.id] ?? 0;
        const w = Math.max(6, (score / max) * 100);
        return (
          <div key={emp.id} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ width: 110 }}>
              <div style={{ fontWeight: 700, color: "#5b1b1b" }}>{emp.name}</div>
              <div style={{ fontSize: 12, color: "#7b3a3a" }}>{emp.role}</div>
            </div>
            <div style={{ flex: 1, background: "#f0e8d8", height: 18, borderRadius: 10, position: "relative" }}>
              <div style={{ width: `${w}%`, height: "100%", background: "#7b1e2b", borderRadius: 10 }} />
            </div>
            <div style={{ width: 48, textAlign: "right", fontWeight: 700, color: "#5b1b1b" }}>{score}</div>
            <input type="number" value={perf[emp.id] ?? ""} onChange={(e) => onUpdate(emp.id, e.target.value)} style={{ width: 64, padding: 6, borderRadius: 6, border: "1px solid #eee" }} />
          </div>
        );
      })}
    </div>
  );
}
