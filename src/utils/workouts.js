// WORKOUT TEMPLATES
// Phase 1 = foundational strength + simple conditioning
// Phase 2 = progressive overload + harder conditioning

export function getWorkouts(gender) {
  return {
    phase1: [
      {
        day: "Day 1 — Full Body A",
        exercises: [
          "Goblet Squat — 3×12",
          "Push-ups — 3×10",
          "Dumbbell Row — 3×12 each side",
          "Glute Bridge — 3×15",
          "Plank — 3×30 sec"
        ]
      },
      {
        day: "Day 2 — Conditioning",
        exercises: [
          "20-minute brisk walk OR incline treadmill",
          "Optional: 5×1-minute fast intervals"
        ]
      },
      {
        day: "Day 3 — Full Body B",
        exercises: [
          "Romanian Deadlift — 3×12",
          "Dumbbell Shoulder Press — 3×10",
          "Lat Pulldown — 3×12",
          "Step-ups — 3×12 each leg",
          "Side Plank — 3×20 sec each side"
        ]
      },
      {
        day: "Day 4 — Conditioning",
        exercises: [
          "20–25 minutes steady-state cardio",
          "Optional: light core work"
        ]
      },
      {
        day: "Day 5 — Full Body C",
        exercises: [
          "Leg Press — 3×12",
          "Chest Press — 3×10",
          "Seated Row — 3×12",
          "Hip Thrust — 3×12",
          "Hanging Knee Raise — 3×10"
        ]
      }
    ],

    phase2: [
      {
        day: "Day 1 — Strength A",
        exercises: [
          "Barbell Squat OR Goblet Squat — 4×8",
          "Bench Press OR Push-ups — 4×8",
          "Bent-Over Row — 4×10",
          "Hip Thrust — 4×10",
          "Plank — 3×45 sec"
        ]
      },
      {
        day: "Day 2 — Conditioning",
        exercises: [
          "25 minutes steady-state cardio",
          "Optional: 6×1-minute intervals"
        ]
      },
      {
        day: "Day 3 — Strength B",
        exercises: [
          "Deadlift Variation — 4×6",
          "Overhead Press — 4×8",
          "Lat Pulldown — 4×10",
          "Walking Lunges — 3×12 each leg",
          "Side Plank — 3×30 sec each side"
        ]
      },
      {
        day: "Day 4 — Conditioning",
        exercises: [
          "30 minutes steady-state cardio",
          "Optional: core circuit"
        ]
      },
      {
        day: "Day 5 — Strength C",
        exercises: [
          "Leg Press — 4×10",
          "Incline Dumbbell Press — 4×10",
          "Seated Row — 4×10",
          "Glute Bridge — 4×12",
          "Hanging Knee Raise — 3×12"
        ]
      }
    ]
  };
}
