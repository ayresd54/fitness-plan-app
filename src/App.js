import React, { useState, useEffect } from "react";

// Components
import SetupScreen from "./components/Setup/SetupScreen";
import WorkoutTab from "./components/Tabs/WorkoutTab";
import NutritionTab from "./components/Tabs/NutritionTab";
import ProgressTab from "./components/Tabs/ProgressTab";
import LifestyleTab from "./components/Tabs/LifestyleTab";

// Utils
import { loadData, saveData } from "./utils/storage";
import { calculatePlan } from "./utils/calculations";
import { getWorkouts } from "./utils/workouts";
import { buildMilestones } from "./utils/milestones";

// Theme colors
const C = {
  orange: "#e07b39",
  blue: "#3a8fd4",
  green: "#6ab04c",
  purple: "#9b59b6",
  red: "#e74c3c",
  teal: "#1abc9c",
  gold: "#f39c12",
  bg: "#0a0e1a",
  card: "rgba(255,255,255,0.04)",
  border: "rgba(255,255,255,0.08)",
  text: "#e8dcc8",
  muted: "#6b7280",
  soft: "#8a7a6a"
};

export default function App() {
  const [screen, setScreen] = useState("loading"); // loading | setup | main
  const [profile, setProfile] = useState(null);
  const [progress, setProgress] = useState([]);
  const [activeTab, setActiveTab] = useState("workout");

  // Load saved data
  useEffect(() => {
    (async () => {
      const p = await loadData("profile");
      const prog = await loadData("progress");

      if (p) setProfile(p);
      if (prog) setProgress(prog);

      setScreen(p ? "main" : "setup");
    })();
  }, []);

  // Save profile
  async function handleSaveProfile(p) {
    setProfile(p);
    await saveData("profile", p);
    setScreen("main");
  }

  // Save progress entry
  async function saveProgressEntry(entry) {
    const updated = [...progress, entry].sort((a, b) =>
      a.date.localeCompare(b.date)
    );
    setProgress(updated);
    await saveData("progress", updated);
  }

  // Delete progress entry
  async function deleteProgressEntry(index) {
    const updated = progress.filter((_, i) => i !== index);
    setProgress(updated);
    await saveData("progress", updated);
  }

  // Loading screen
  if (screen === "loading") {
    return (
      <div
        style={{
          background: C.bg,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: C.orange,
          fontFamily: "monospace",
          letterSpacing: 3,
          fontSize: 18
        }}
      >
        Loading…
      </div>
    );
  }

  // Setup wizard
  if (screen === "setup") {
    return <SetupScreen onSave={handleSaveProfile} />;
  }

  // Main app calculations
  const calc = calculatePlan(profile);
  const workouts = getWorkouts(profile.gender);
  const milestones = buildMilestones(calc.weeks, profile.gender);

  return (
    <div
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: C.bg,
        minHeight: "100vh",
        color: C.text
      }}
    >
      {/* HEADER */}
      <div
        style={{
          padding: "22px 18px 16px",
          textAlign: "center",
          borderBottom: `1px solid ${C.border}`
        }}
      >
        <div
          style={{
            fontSize: 10,
            letterSpacing: 4,
            color: C.orange,
            textTransform: "uppercase",
            marginBottom: 6
          }}
        >
          FITNESS PLAN AND TRACKER
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: 22,
            fontWeight: 700,
            color: "#f5ede0"
          }}
        >
          {profile.name
            ? `${profile.name}'s Plan`
            : `${calc.weeks}-Week Plan`}
        </h1>

        <p
          style={{
            margin: "4px 0 12px",
            color: C.soft,
            fontSize: 12,
            fontStyle: "italic"
          }}
        >
          {profile.weightLbs} lbs → {profile.targetWeightLbs} lbs •{" "}
          {calc.weeks} Weeks
        </p>
      </div>

      {/* TABS */}
      <div
        style={{
          display: "flex",
          borderBottom: `1px solid ${C.border}`,
          background: "rgba(255,255,255,0.02)"
        }}
      >
        {[
          ["workout", "Workout"],
          ["nutrition", "Nutrition"],
          ["progress", "Progress"],
          ["lifestyle", "Lifestyle"]
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            style={{
              flex: 1,
              padding: "12px 6px",
              background: "none",
              border: "none",
              color: activeTab === id ? C.orange : C.muted,
              fontSize: 12,
              fontWeight: activeTab === id ? 700 : 400,
              borderBottom:
                activeTab === id
                  ? `2px solid ${C.orange}`
                  : "2px solid transparent",
              cursor: "pointer",
              transition: "all 0.2s",
              fontFamily: "inherit",
              letterSpacing: 1
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div style={{ padding: "18px 16px", maxWidth: 600, margin: "0 auto" }}>
        {activeTab === "workout" && (
          <WorkoutTab
            profile={profile}
            calc={calc}
            workouts={workouts}
            colors={C}
          />
        )}

        {activeTab === "nutrition" && (
          <NutritionTab profile={profile} calc={calc} colors={C} />
        )}

        {activeTab === "progress" && (
          <ProgressTab
            profile={profile}
            calc={calc}
            progress={progress}
            colors={C}
            onSave={saveProgressEntry}
            onDelete={deleteProgressEntry}
          />
        )}

        {activeTab === "lifestyle" && (
          <LifestyleTab
            profile={profile}
            calc={calc}
            milestones={milestones}
            colors={C}
          />
        )}
      </div>
    </div>
  );
}
