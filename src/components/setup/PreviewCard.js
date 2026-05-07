import React from "react";

export default function PreviewCard({ form }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        padding: "16px 18px",
        borderRadius: 8,
        marginBottom: 24,
        color: "#e8dcc8"
      }}
    >
      <h3
        style={{
          margin: "0 0 10px",
          fontSize: 16,
          color: "#f5ede0",
          textAlign: "center"
        }}
      >
        Your Plan Preview
      </h3>

      <p style={rowStyle}>
        <strong>Name:</strong> {form.name || "—"}
      </p>

      <p style={rowStyle}>
        <strong>Age:</strong> {form.age || "—"}
      </p>

      <p style={rowStyle}>
        <strong>Gender:</strong> {form.gender || "—"}
      </p>

      <p style={rowStyle}>
        <strong>Height:</strong>{" "}
        {form.heightIn ? `${form.heightIn} in` : "—"}
      </p>

      <p style={rowStyle}>
        <strong>Current Weight:</strong>{" "}
        {form.weightLbs ? `${form.weightLbs} lbs` : "—"}
      </p>

      <p style={rowStyle}>
        <strong>Target Weight:</strong>{" "}
        {form.targetWeightLbs ? `${form.targetWeightLbs} lbs` : "—"}
      </p>

      <p style={rowStyle}>
        <strong>Target Date:</strong>{" "}
        {form.targetDate || "—"}
      </p>
    </div>
  );
}

const rowStyle = {
  margin: "4px 0",
  fontSize: 14
};
