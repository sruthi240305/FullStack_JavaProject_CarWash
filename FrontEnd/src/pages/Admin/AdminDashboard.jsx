import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SmallBarChart from "./SmallBarChart";
import PerformanceChart from "./PerformanceChart";
import AdminNotes from "./AdminNotes";
import TopMetrics from "./TopMetrics";
import EmployeesPanel from "./EmployeesPanel";

const sampleRevenue = [5000, 7200, 6800, 8500, 9000, 9500];
const sampleProfit = [1200, 1800, 1500, 2200, 2400, 2600];

const barColor = "#7b1e2b";
const accent = "#f3d9a4";



const AdminDashboard = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState(() => JSON.parse(localStorage.getItem("employees") || "[]"));
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [feedbacks, setFeedbacks] = useState(() => JSON.parse(localStorage.getItem("feedbacks") || "[]"));
  const [servicesCount, setServicesCount] = useState(() => Number(localStorage.getItem("servicesCount") || 1250));
  const [employeePerf, setEmployeePerf] = useState(() => JSON.parse(localStorage.getItem("employeePerf") || "{}"));

  useEffect(() => {
    let sourceEmployees = employees && employees.length ? employees : null;

    if (!sourceEmployees) {
      const seeded = [
        { id: 1, name: "Ajay", role: "Ceramic Coating Specialist", active: true },
        { id: 2, name: "Deepak", role: "Engine Wash Technician", active: true },
        { id: 3, name: "Kavita", role: "Cashier", active: true },
        { id: 4, name: "Rajesh", role: "Driver / Vehicle Mover", active: true },
        { id: 5, name: "Sangeeta", role: "Booking Agent", active: true },
        { id: 6, name: "Vikram", role: "Team Leader", active: true },
        { id: 7, name: "Nisha", role: "Sales Coordinator", active: false },
        { id: 8, name: "Ganesh", role: "Floor Coordinator", active: false },
        { id: 9, name: "Javed", role: "Operations Manager", active: false },
        { id: 10, name: "Ravi", role: "Interior Cleaning (Car Detailer)", active: true },
        { id: 11, name: "Priya", role: "Exterior Wash (Car Wash Attendant)", active: true },
        { id: 12, name: "Amit", role: "Full Detailing (Automotive Detailer)", active: false },
        { id: 13, name: "Suresh", role: "Paint Correction Technician", active: false },
        { id: 14, name: "Manju", role: "Customer Service Representative/Booking Agent", active: true },
        { id: 15, name: "Basavaraj", role: "Manager / Supervisor", active: true },
      ];
      setEmployees(seeded);
      sourceEmployees = seeded;
    }

    if ((feedbacks || []).length === 0) {
      const now = new Date().toLocaleString();
      const seededF = [
        { id: 1001, text: "The online booking system was incredibly easy to use! It took me less than a minute to schedule my full detailing service.", when: now, responded: false },
        { id: 1002, text: "I appreciated the instant confirmation email and the reminder text message. Very professional and helpful.", when: now, responded: false },
        { id: 1003, text: "The ability to choose specific service packages and see the 'from' pricing clearly made my decision easy and transparent.", when: now, responded: false },
      ];
      setFeedbacks(seededF);
    }

    if (!localStorage.getItem("employeePerf")) {
      const seededPerf = {};
      const sampleScores = [92, 85, 78, 81, 88, 74, 69, 73, 80, 86, 79, 75, 82, 77, 90];
      (sourceEmployees || []).forEach((emp, idx) => {
        seededPerf[emp.id] = sampleScores[idx % sampleScores.length];
      });
      setEmployeePerf(seededPerf);
    }

    if (!localStorage.getItem("servicesCount")) {
      setServicesCount(1250);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("adminAuth") !== "true") {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("servicesCount", String(servicesCount));
  }, [servicesCount]);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  useEffect(() => {
    localStorage.setItem("employeePerf", JSON.stringify(employeePerf));
  }, [employeePerf]);

  const addEmployee = (e) => {
    e.preventDefault();
    if (!name) return;
    const newEmp = { id: Date.now(), name, role };
    setEmployees((s) => [newEmp, ...s]);
    setName("");
    setRole("");
  };

  const deleteEmployee = (id) => {
    if (!confirm("Delete this employee?")) return;
    setEmployees((s) => s.filter((x) => x.id !== id));
  };

  const logout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/login");
  };

  const updateEmployeeScore = (id, score) => {
    setEmployeePerf((s) => ({ ...s, [id]: Math.max(0, Math.min(100, Number(score))) }));
  };

  const randomizeScores = () => {
    setEmployeePerf((s) => {
      const out = { ...s };
      Object.keys(out).forEach((k) => {
        out[k] = 60 + Math.floor(Math.random() * 41);
      });
      return out;
    });
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f6efdf", padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1200, margin: "0 auto 20px" }}>
        <div>
          <h1 style={{ color: "#5b1b1b", margin: 0 }}>Admin Dashboard</h1>
          <small style={{ color: "#7b3a3a" }}>Manage employees • View revenue & profit • Review feedback</small>
        </div>
        <div>
          <button onClick={logout} style={{ background: accent, border: "none", padding: "8px 14px", borderRadius: 10, color: "#7b1e2b", fontWeight: 700 }}>Logout</button>
        </div>
      </div>

      <TopMetrics employees={employees} servicesCount={servicesCount} />

      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 420px", gap: 20 }}>
        <div>
          <section style={{ background: "#fff", padding: 18, borderRadius: 14, marginBottom: 16 }}>
            <h3 style={{ color: "#5b1b1b" }}>Revenue & Profit</h3>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-end", marginTop: 12 }}>
              <div style={{ background: "#fff", padding: 12, borderRadius: 12, boxShadow: "0 6px 16px rgba(0,0,0,0.06)" }}>
                <small style={{ color: "#7b3a3a" }}>Revenue (last months)</small>
                <SmallBarChart values={sampleRevenue} height={140} />
              </div>

              <div style={{ background: "#fff", padding: 12, borderRadius: 12, boxShadow: "0 6px 16px rgba(0,0,0,0.06)" }}>
                <small style={{ color: "#7b3a3a" }}>Profit (last months)</small>
                <SmallBarChart values={sampleProfit} height={140} />
              </div>
            </div>
          </section>

          <EmployeesPanel employees={employees} name={name} role={role} setName={setName} setRole={setRole} onAdd={addEmployee} onDelete={deleteEmployee} />
        </div>

        <aside>
          <section style={{ background: "#fff", padding: 18, borderRadius: 14, marginBottom: 16 }}>
            <h3 style={{ color: "#5b1b1b" }}>Employee Performance</h3>
            <div style={{ marginTop: 12 }}>
              <PerformanceChart employees={employees} perf={employeePerf} onUpdate={updateEmployeeScore} />
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <button onClick={randomizeScores} style={{ background: "#7b1e2b", color: "#fff", border: "none", padding: "8px 12px", borderRadius: 8, fontWeight: 700 }}>Recalculate Scores</button>
              </div>
            </div>
          </section>

          <section style={{ background: "#fff", padding: 18, borderRadius: 14 }}>
            <h3 style={{ color: "#5b1b1b" }}>Admin Notes</h3>
            <div style={{ marginTop: 12 }}>
              <AdminNotes feedbacks={feedbacks} onAdd={(t) => {
                const f = { id: Date.now(), text: t, when: new Date().toLocaleString(), responded: false };
                setFeedbacks((s) => [f, ...s]);
              }} onToggleRespond={(id) => setFeedbacks((s) => s.map((f) => (f.id === id ? { ...f, responded: !f.responded } : f)))} />
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};


export default AdminDashboard;
