import React from "react";

export default function NutritionTab({ profile, calc, colors }) {
  return (
    <div>
      {/* Calories Card */}
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
            margin: "0 0 10px",
            fontSize: 16,
            color: colors.orange
          }}
        >
          Daily Calories
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: 28,
            fontWeight: 700,
            color: "#f5ede0"
          }}
        >
          {calc.calories}
        </p>

        <p
          style={{
            marginTop: 6,
            fontSize: 12,
            color: colors.soft
          }}
        >
          Based on your TDEE of {calc.tdee} calories/day
        </p>
      </div>

      {/* Macros Card */}
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
            margin: "0 0 10px",
            fontSize: 16,
            color: colors.orange
          }}
        >
          Daily Macros
        </h3>

        <div style={{ marginBottom: 10 }}>
          <strong>Protein:</strong>{" "}
          <span style={{ color: colors.text }}>{calc.protein}g</span>
        </div>

        <div style={{ marginBottom: 10 }}>
          <strong>Carbs:</strong>{" "}
          <span style={{ color: colors.text }}>{calc.carbs}g</span>
        </div>

        <div>
          <strong>Fat:</strong>{" "}
          <span style={{ color: colors.text }}>{calc.fat}g</span>
        </div>
      </div>

      {/* Guidance */}
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          padding: "16px 18px",
          borderRadius: 8,
          color: colors.soft,
          fontSize: 14,
          lineHeight: 1.5
        }}
      >
        <p style={{ marginTop: 0 }}>
          Aim to hit your <strong>protein target</strong> daily — this is the
          most important macro for fat loss and muscle retention.
        </p>

        <p>
          Carbs and fats can be flexible as long as you stay within your calorie
          target.
        </p>

        <p style={{ marginBottom: 0 }}>
          Track your meals 4–6 days per week for best results.
        </p>
      </div>
    </div>
  );
}
