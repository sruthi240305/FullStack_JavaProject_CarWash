import React from "react";

export default function EmployeesPanel({ employees = [], name, role, setName, setRole, onAdd, onDelete }) {
  return (
    <div>
      <section style={{ background: "#fff", padding: 18, borderRadius: 14 }}>
        <h3 style={{ color: "#5b1b1b" }}>Employees</h3>

        <form onSubmit={onAdd} style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Employee name" style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid #eee" }} />
          <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" style={{ width: 140, padding: 10, borderRadius: 8, border: "1px solid #eee" }} />
          <button style={{ background: "#7b1e2b", color: "white", border: "none", padding: "8px 12px", borderRadius: 8 }}>Add</button>
        </form>

        <div style={{ marginTop: 16 }}>
          {employees.length === 0 && <p style={{ color: "#7b3a3a" }}>No employees yet.</p>}
          {employees.map((emp) => (
            <div key={emp.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 10, borderRadius: 8, border: "1px solid #f0e6d9", marginBottom: 8 }}>
              <div>
                <div style={{ fontWeight: 700, color: "#5b1b1b" }}>{emp.name}</div>
                <div style={{ color: "#7b3a3a", fontSize: 13 }}>{emp.role}</div>
              </div>
              <div>
                <button onClick={() => onDelete(emp.id)} style={{ background: "transparent", border: "1px solid #f0e6d9", padding: "6px 10px", borderRadius: 8, color: "#7b1e2b", fontWeight: 700 }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
