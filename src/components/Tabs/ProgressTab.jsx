import React, { useState } from "react";

const labelStyle = {
  display: "block",
  fontSize: 13,
  marginBottom: 6,
  marginTop: 12,
  color: "#cbd5e1"
};

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.04)",
  color: "#fff",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box"
};

export default function ProgressTab({
  profile,
  calc,
  progress,
  colors,
  onSave,
  onDelete
}) {
  const [weight, setWeight] = useState("");
  const [notes, setNotes] = useState("");

  function addEntry() {
    if (!weight) return;

    const entry = {
      date: new Date().toISOString().split("T")[0],
      weight,
      notes
    };

    onSave(entry);
    setWeight("");
    setNotes("");
  }

  return (
    <div>
      {/* Add Entry Card */}
      <div
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "18px 20px",
          borderRadius: 8,
          marginBottom: 20
        }}
      >
        <h3
          style={{
            margin: "0 0 12px",
            fontSize: 16,
            color: colors.orange
          }}
        >
          Add Progress Entry
        </h3>

        <label style={labelStyle}>Weight (lbs)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Example: 182"
          style={inputStyle}
        />

        <label style={labelStyle}>Notes (optional)</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="How did today feel?"
          style={{
            ...inputStyle,
            height: 70,
            resize: "none"
          }}
        />

        <button
          onClick={addEntry}
          style={{
            marginTop: 14,
            background: colors.orange,
            color: "#111",
            border: "none",
            padding: "10px 14px",
            borderRadius: 8,
            fontWeight: 700,
            cursor: "pointer"
          }}
        >
          Save Entry
        </button>
      </div>

      {/* Progress History */}
      <div
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "18px 20px",
          borderRadius: 8
        }}
      >
        <h3
          style={{
            margin: "0 0 12px",
            fontSize: 16,
            color: colors.orange
          }}
        >
          Progress History
        </h3>

        {!progress || progress.length === 0 ? (
          <p style={{ color: "#94a3b8", margin: 0 }}>
            No progress entries yet.
          </p>
        ) : (
          progress.map((entry, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                padding: "12px 0"
              }}
            >
              <div style={{ fontWeight: 700, marginBottom: 4 }}>
                {entry.date} - {entry.weight} lbs
              </div>

              {entry.notes ? (
                <div style={{ color: "#cbd5e1", marginBottom: 8 }}>
                  {entry.notes}
                </div>
              ) : null}

              <button
                onClick={() => onDelete(index)}
                style={{
                  background: "transparent",
                  color: "#f87171",
                  border: "1px solid rgba(248,113,113,0.35)",
                  padding: "6px 10px",
                  borderRadius: 6,
                  cursor: "pointer"
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
