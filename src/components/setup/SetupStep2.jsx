import React from "react";

export default function SetupStep2({ form, updateField }) {
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
        Step 2 — Body Metrics
      </h2>

      {/* Height */}
      <label style={{ fontSize: 12, color: "#e8dcc8" }}>
        Height (inches)
      </label>
      <input
        type="number"
        value={form.heightIn}
        onChange={(e) => updateField("heightIn", e.target.value)}
        placeholder="Example: 70"
        style={inputStyle}
      />

      {/* Current Weight */}
      <label style={{ fontSize: 12, color: "#e8dcc8" }}>
        Current Weight (lbs)
      </label>
      <input
        type="number"
        value={form.weightLbs}
        onChange={(e) => updateField("weightLbs", e.target.value)}
        placeholder="Example: 185"
        style={inputStyle}
      />

      {/* Target Weight */}
      <label style={{ fontSize: 12, color: "#e8dcc8" }}>
        Target Weight (lbs)
      </label>
      <input
        type="number"
        value={form.targetWeightLbs}
        onChange={(e) => updateField("targetWeightLbs", e.target.value)}
        placeholder="Example: 165"
        style={inputStyle}
      />
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
