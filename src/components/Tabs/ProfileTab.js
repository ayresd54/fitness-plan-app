import React from "react";

export default function ProfileTab({ profile, calc, colors }) {
  return (
    <div>
      {/* Profile Card */}
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
          Profile
        </h3>

        <p style={rowStyle}>
          <strong>Name:</strong> {profile.name}
        </p>

        <p style={rowStyle}>
          <strong>Age:</strong> {profile.age}
        </p>

        <p style={rowStyle}>
          <strong>Gender:</strong> {profile.gender}
        </p>

        <p style={rowStyle}>
          <strong>Height:</strong> {profile.heightIn} in
        </p>

        <p style={rowStyle}>
          <strong>Current Weight:</strong> {profile.weightLbs} lbs
        </p>

        <p style={rowStyle}>
          <strong>Target Weight:</strong> {profile.targetWeightLbs} lbs
        </p>

        <p style={rowStyle}>
          <strong>Target Date:</strong> {profile.targetDate}
        </p>
      </div>

      {/* Calculations Card */}
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
          Your Plan Stats
        </h3>

        <p style={rowStyle}>
          <strong>TDEE:</strong> {calc.tdee} calories/day
        </p>

        <p style={rowStyle}>
          <strong>Daily Calories:</strong> {calc.calories}
        </p>

        <p style={rowStyle}>
          <strong>Protein:</strong> {calc.protein}g
        </p>

        <p style={rowStyle}>
          <strong>Carbs:</strong> {calc.carbs}g
        </p>

        <p style={rowStyle}>
          <strong>Fat:</strong> {calc.fat}g
        </p>

        <p style={rowStyle}>
          <strong>Weekly Loss:</strong> {calc.weeklyLoss} lbs/week
        </p>

        <p style={rowStyle}>
          <strong>Total Weeks:</strong>
