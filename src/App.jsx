import React, { useState, useEffect } from "react";
import { saveData, loadData } from "./utils/storage";
import { getWorkouts } from "./utils/workouts";
import { buildMilestones } from "./utils/milestones";
import { calculatePlan } from "./utils/calculations";

import SetupScreen from "./components/Setup/SetupScreen";
import WorkoutTab from "./components/Tabs/WorkoutTab";
import NutritionTab from "./components/Tabs/NutritionTab";
import ProgressTab from "./components/Tabs/ProgressTab";
import LifestyleTab from "./components/Tabs/LifestyleTab";
import ProfileTab from "./components/Tabs/ProfileTab";

export default function App() {
  const [profile, setProfile] = useState(null);
  const [progress, setProgress] = useState([]);
  const [tab, setTab] = useState("workout");

  const colors = {
    orange: "#e07b39",
    text: "#e8dcc8",
    soft: "rgba(255,255,255,0.6)",
    red: "#ff6b6b"
  };

  // Load saved data
  useEffect(() => {
    async function load() {
      const savedProfile = await loadData("profile");
      const savedProgress = await loadData("progress");

      if (savedProfile) setProfile(savedProfile);
      if (savedProgress) setProgress(savedProgress);
    }
    load();
  }, []);

  // Save profile
  async function saveProfile(data) {
    setProfile(data);
    await saveData("profile", data);
  }

  // Save progress entry
  async function saveProgress(entry) {
    const updated = [entry, ...progress];
    setProgress(updated);
    await saveData("progress", updated);
  }

  // Delete progress entry
  async function deleteProgress(index) {
    const updated = progress.filter((_, i) => i !== index);
    setProgress(updated);
    await saveData("progress", updated);
  }

  // If no profile yet → show setup
  if (!profile) {
    return <SetupScreen onSave={saveProfile} />;
  }

  // Calculations
  const calc = calculatePlan(profile);

  // Workouts
  const workouts = getWorkouts(profile.gender);

  // Milestones
  const milestones = buildMilestones(calc.weeks, profile.gender);

  return (
    <div
      style={{
        background: "#0a0e1a",
        minHeight: "100vh",
        padding: "24px 18px",
        color: colors.text,
        fontFamily: "'Georgia','Times New Roman',serif"
      }}
    >
      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 10,
          marginBottom: 20
        }}
      >
        {[
          ["workout", "Workouts"],
          ["nutrition", "Nutrition"],
          ["progress", "Progress"],
          ["lifestyle", "Lifestyle"],
          ["profile", "Profile"]
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            style={{
              flex: 1,
              padding: "10px 0",
              background:
                tab === key
                  ? colors.orange
                  : "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 12
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {tab === "workout" && (
        <WorkoutTab
          profile={profile}
          workouts={workouts}
          colors={colors}
        />
      )}

      {tab === "nutrition" && (
        <NutritionTab
          profile={profile}
          calc={calc}
          colors={colors}
        />
      )}

      {tab === "progress" && (
        <ProgressTab
          profile={profile}
          calc={calc}
          progress={progress}
          colors={colors}
          onSave={saveProgress}
          onDelete={deleteProgress}
        />
      )}

      {tab === "lifestyle" && (
        <LifestyleTab
          profile={profile}
          milestones={milestones}
          colors={colors}
        />
      )}

      {tab === "profile" && (
        <ProfileTab
          profile={profile}
          calc={calc}
          colors={colors}
        />
      )}
    </div>
  );
}