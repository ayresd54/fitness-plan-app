import React from "react";

export default function LifestyleTab({ profile, milestones, colors }) {
  return (
    <div>
      <h3
        style={{
          margin: "0 0 16px",
          fontSize: 18,
          color: colors.orange,
          textAlign: "center"
        }}
      >
        Weekly Milestones
      </h3>

      {milestones.map((week, index) => (
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
          <h4
            style={{
              margin: "0 0 10px",
              fontSize: 16,
              color: colors.orange
            }}
          >
            Week {week.week}
          </h4>

          <ul style={{ paddingLeft: 18, margin: 0 }}>
            {week.items.map((item, i) => (
              <li
                key={i}
                style={{
                  marginBottom: 6,
                  fontSize: 14,
                  color: colors.text
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
