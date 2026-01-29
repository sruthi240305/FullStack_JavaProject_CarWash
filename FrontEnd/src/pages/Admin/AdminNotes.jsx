import React, { useState } from "react";

export default function AdminNotes({ feedbacks = [], onAdd = () => {}, onToggleRespond = () => {} }) {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter note or feedback..."
        style={{ width: "100%", minHeight: 80, padding: 10, borderRadius: 8, border: "1px solid #eee" }}
      />
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <button
          onClick={() => {
            if (!text) return;
            onAdd(text);
            setText("");
          }}
          style={{ background: "#7b1e2b", color: "#fff", border: "none", padding: "8px 12px", borderRadius: 8, fontWeight: 700 }}
        >
          Add Note
        </button>

        <button onClick={() => setText("")} style={{ background: "#f3d9a4", color: "#7b1e2b", border: "none", padding: "8px 12px", borderRadius: 8, fontWeight: 700 }}>
          Clear
        </button>
      </div>

      <div style={{ marginTop: 12 }}>
        {feedbacks.length === 0 && <p style={{ color: "#7b3a3a" }}>No notes yet.</p>}
        {feedbacks.map((f) => (
          <div key={f.id} style={{ padding: 10, borderRadius: 8, border: "1px solid #f0e6d9", marginBottom: 10 }}>
            <div style={{ color: "#5b1b1b", fontWeight: 700 }}>{f.text}</div>
            <div style={{ fontSize: 12, color: "#7b3a3a", marginTop: 6 }}>{f.when}</div>
            <div style={{ marginTop: 8 }}>
              <button onClick={() => onToggleRespond(f.id)} style={{ padding: "6px 10px", borderRadius: 8, border: "none", background: f.responded ? "#f3d9a4" : "#7b1e2b", color: f.responded ? "#7b1e2b" : "#fff", fontWeight: 700 }}>{f.responded ? "Responded" : "Mark Responded"}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
