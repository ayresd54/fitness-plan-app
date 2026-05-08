import React from "react";

export default function SetupStep3({ form, updateField }) {
  return (
    <div style={{ marginTop: 20 }}>
      <h2
        style={{
          fontSize: 18,
          marginBottom: 16,
          color: "#f5ede0",
          textAlign: "center"
        }}
      >
        Step 3 — Goal & Timeline
      </h2>

      {/* Target Date */}
      <label style={{ fontSize: 12, color: "#e8dcc8" }}>
        Target Date
      </label>
      <input
        type="date"
        value={form.targetDate}
        onChange={(e) => updateField("targetDate", e.target.value)}
        style={inputStyle}
      />

      {/* Summary */}
      <div
        style={{
          marginTop: 20,
          padding: "14px 16px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 6,
          color: "#e8dcc8",
          fontSize: 14
        }}
      >
        <p style={{ margin: 0, marginBottom: 6 }}>
          <strong>Current Weight:</strong> {form.weightLbs || "—"} lbs
        </p>
        <p style={{ margin: 0, marginBottom: 6 }}>
          <strong>Target Weight:</strong> {form.targetWeightLbs || "—"} lbs
        </p>
        <p style={{ margin: 0 }}>
          <strong>Target Date:</strong>{" "}
          {form.targetDate || "Select a date"}
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  margin: "6px 0 16px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 6,
  color: "#e8dcc8",
  fontSize: 14
};
