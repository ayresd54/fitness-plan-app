import React, { useState } from "react";

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

        {/* Weight */}
        <label style={labelStyle}>Weight (lbs)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Example: 182"
          style={inputStyle}
        />

        {/* Notes */}
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
       
