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
          borderRadius: 8
