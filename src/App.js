import { useState } from "react";

const plan = {
  stats: { age: 46, height: "6'0", current: 209, goal: 190, timeframe: "8 weeks" },
  calories: { deficit: 1900, maintenance: 2400, protein: 180, carbs: 160, fat: 65 },
  fasting: { window: "16:8", eat: "12pm - 8pm", fast: "8pm - 12pm" },
  water: { daily: "1 gallon (128 oz)", timing: ["16 oz on waking", "16 oz pre-workout", "16 oz mid-day", "16 oz dinner"] },

  phases: [
    {
      id: 1,
      label: "Phase 1",
      weeks: "Weeks 1-4",
      theme: "Foundation & Fat Loss",
      color: "#e07b39",
      workouts: [
        { day: "Mon", focus: "Chest + Core", exercises: ["Barbell Bench Press 4x8", "Incline DB Press 3x10", "Cable Fly 3x12", "Hanging Leg Raises 3x12"] },
        { day: "Tue", focus: "Legs (Quads Heavy)", exercises: ["Back Squat 4x8", "Leg Press 3x12", "Leg Extension 3x15"] },
        { day: "Wed", focus: "HIIT Cardio", exercises: ["10 min warm-up", "20 min intervals (1 min fast / 1 min slow)"] },
        { day: "Thu", focus: "Back + Biceps", exercises: ["Deadlift 4x5", "Barbell Row 3x8", "Lat Pulldown 3x12", "DB Curls 3x12"] },
        { day: "Fri", focus: "Chest + Core (Volume)", exercises: ["DB Flat Press 4x12", "Push-ups 3x20", "Cable Fly 3x15", "Planks 3x60s"] },
        { day: "Sat", focus: "Legs (Posterior Chain)", exercises: ["Romanian Deadlift 4x8", "Hamstring Curl 3x12", "Glute Bridge 3x15"] },
        { day: "Sun", focus: "Active Recovery", exercises: ["30–45 min brisk walk"] }
      ]
    },

    {
      id: 2,
      label: "Phase 2",
      weeks: "Weeks 5-8",
      theme: "Definition & Muscle Refinement",
      color: "#3a8fd4",
      workouts: [
        { day: "Mon", focus: "Chest (Peak Contraction)", exercises: ["Incline Barbell Press 4x8", "Cable Fly 3x15", "Machine Press 3x12"] },
        { day: "Tue", focus: "Legs (Size Focus)", exercises: ["Front Squat 4x8", "Leg Press 4x12", "Walking Lunges 3x20 steps"] },
        { day: "Wed", focus: "Cardio + Core", exercises: ["25 min steady-state cardio", "Cable Crunch 3x15", "Russian Twists 3x20"] },
        { day: "Thu", focus: "Back + Rear Delts", exercises: ["Weighted Pull-ups 4x6", "Seated Row 3x10", "Rear Delt Fly 3x15"] },
        { day: "Fri", focus: "Chest + Abs (Finisher)", exercises: ["Flat Bench Press 4x8", "Push-ups 3x20", "Hanging Leg Raises 3x12"] },
        { day: "Sat", focus: "Legs + Glutes", exercises: ["Hip Thrust 4x10", "Hamstring Curl 3x12", "Glute Kickbacks 3x15"] },
        { day: "Sun", focus: "Active Recovery", exercises: ["45 min low-intensity cardio"] }
      ]
    }
  ],

  nutrition: [
    { time: "12:00 PM", meal: "Break-Fast Meal", items: ["2 whole eggs + 3 egg whites", "1 cup berries", "1 tbsp almond butter"] },
    { time: "3:00 PM", meal: "Lunch / Pre-Workout", items: ["6–8 oz lean protein", "1 cup rice or potatoes", "1–2 cups vegetables"] },
    { time: "5:30 PM", meal: "Post-Workout Shake", items: ["1.5 scoops whey protein", "1 cup almond milk"] },
    { time: "7:30 PM", meal: "Final Meal", items: ["6 oz lean protein or salmon", "1 cup vegetables", "1 tbsp olive oil"] }
  ],

  alcohol: [
    "Limit to 1–2 drinks on weekends only",
    "Choose dry wine or clear spirits",
    "Avoid sugary mixers"
  ],

  tips: [
    { icon: "💧", title: "Water First", body: "16 oz immediately on waking." },
    { icon: "🥩", title: "Protein Target", body: "180g protein daily." },
    { icon: "⏱️", title: "16:8 Fasting", body: "Last bite by 8pm. First meal at noon." },
    { icon: "🔥", title: "Fat Loss Reality", body: "Spot reduction is a myth — consistency wins." },
    { icon: "😴", title: "Sleep 7–9 hrs", body: "Critical for testosterone and recovery." },
    { icon: "⚖️", title: "Weekly Weigh-in", body: "Every Monday morning, same conditions." }
  ]
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dayColors = ["#e07b39", "#3a8fd4", "#6ab04c", "#9b59b
