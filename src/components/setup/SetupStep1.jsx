import React from "react";

export default function SetupStep1({ form, updateField }) {
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
        Step 1 — Personal Info
      </h2>

      {/* Name */}
      <label style={{ fontSize: 12, color: "#e8dcc8" }}>
        Name
      </label>
      <input
        type="text"
        value={form.name}
        onChange={(e) => updateField("name", e.target.value)}
        placeholder="Your name"
        style={inputStyle}
      />

      {/* Age */}
      <label style={{ fontSize: 12, color: "#e8dcc8" }}>
        Age
      </label>
      <input
        type="number"
        value={form.age}
        onChange={(e) => updateField("age", e.target.value)}
        placeholder="Age"
        style={inputStyle}
      />

      {/* Gender */}
      <label style={{ fontSize: 12, color: "#e8dcc8" }}>
        Gender
      </label>
      <select
        value={form.gender}
        onChange={(e) => updateField("gender", e.target.value)}
        style={inputStyle}
      >
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
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
