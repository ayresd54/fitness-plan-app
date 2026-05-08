import React from "react";

export default function NutritionTab({ profile, calc, colors }) {
  if (!profile || !calc) return null;

  const boxStyle = {
    background: "rgba(255,255,255,0.05)",
    padding: "18px 20px",
    borderRadius: 8,
    marginBottom: 20
  };

  const rowStyle = {
    marginBottom: 10,
    fontSize: 14
  };

  return (
    <div>
      <h2 style={{ color: colors.orange, marginBottom: 20 }}>
        Daily Nutrition Targets
      </h2>

      <div style={boxStyle}>
        <div style={rowStyle}>
          <strong>Calories:</strong> {calc.calories} kcal/day
        </div>
        <div style={rowStyle}>
          <strong>Protein:</strong> {calc.protein} g/day
        </div>
        <div style={rowStyle}>
          <strong>Carbs:</strong> {calc.carbs} g/day
        </div>
        <div style={rowStyle}>
          <strong>Fat:</strong> {calc.fat} g/day
        </div>
      </div>

      <h3 style={{ color: colors.orange, marginBottom: 10 }}>
        Weekly Fat Loss Estimate
      </h3>

      <div style={boxStyle}>
        <div style={rowStyle}>
          <strong>Weekly Loss:</strong> {calc.weeklyLoss} lb/week
        </div>
        <div style={rowStyle}>
          <strong>Total Weeks:</strong> {calc.weeks}
        </div>
      </div>

      <h3 style={{ color: colors.orange, marginBottom: 10 }}>
        Tips for Success
      </h3>

      <div style={boxStyle}>
        <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
          <li>Hit your protein target daily</li>
          <li>Drink 2–3L of water per day</li>
          <li>Track meals at least 4 days per week</li>
          <li>Stay within ±100 calories of your target</li>
        </ul>
      </div>
    </div>
  );
}
