import React, { useState } from "react";

export default function WorkoutTab({ profile, workouts, colors }) {
  const [phase, setPhase] = useState("phase1");

  const phaseData = workouts?.[phase] || [];

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: 10,
          marginBottom: 20
        }}
      >
        <button
          onClick={() => setPhase("phase1")}
          style={{
            flex: 1,
            padding: "10px 0",
            background:
              phase === "phase1"
                ? colors.orange
                : "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: 600
          }}
        >
          Phase 1
        </button>

        <button
          onClick={() => setPhase("phase2")}
          style={{
            flex: 1,
            padding: "10px 0",
            background:
              phase === "phase2"
                ? colors.orange
                : "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: 600
          }}
        >
          Phase 2
        </button>
      </div>

      {phaseData.map((day, index) => (
        <div
          key={index}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "16px 18px",
            borderRadius: 8,
            marginBottom: 18
          }}
        >
          <h3
            style={{
              margin: "0 0 10px",
              fontSize: 16,
              color: colors.orange
            }}
          >
            {day.day}
          </h3>

          <ul style={{ paddingLeft: 18, margin: 0 }}>
            {day.exercises?.map((ex, i) => (
              
                style={{
                  marginBottom: 6,
                  fontSize: 14,
                  color: colors.text
                }}
              >
                {ex}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
