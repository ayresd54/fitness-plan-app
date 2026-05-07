// --- WORKOUT PROGRAMS ---
// Clean, structured, phase-based workouts for male + female plans.

export function getWorkouts(gender) {
  const isMale = gender === "male";

  return {
    phase1: [
      {
        day: "Day 1 — Upper Body Strength",
        exercises: isMale
          ? [
              "Bench Press — 4×6",
              "Bent-Over Row — 4×8",
              "Incline DB Press — 3×10",
              "Lat Pulldown — 3×10",
              "Lateral Raises — 3×12",
              "Triceps Rope Pushdown — 3×12",
              "Hammer Curls — 3×12"
            ]
          : [
              "Incline DB Press — 4×8",
              "Seated Row — 4×10",
              "Chest Fly — 3×12",
              "Lat Pulldown — 3×12",
              "Lateral Raises — 3×15",
              "Triceps Rope Pushdown — 3×15",
              "Cable Curls — 3×15"
            ]
      },
      {
        day: "Day 2 — Lower Body Strength",
        exercises: isMale
          ? [
              "Back Squat — 4×6",
              "Romanian Deadlift — 4×8",
              "Leg Press — 3×12",
              "Walking Lunges — 3×20 steps",
              "Leg Curl — 3×12",
              "Standing Calf Raise — 4×12"
            ]
          : [
              "Hip Thrust — 4×8",
              "Romanian Deadlift — 4×10",
              "Leg Press — 3×15",
              "Bulgarian Split Squat — 3×12 each",
              "Cable Kickback — 3×15",
              "Seated Calf Raise — 4×15"
            ]
      },
      {
        day: "Day 3 — Conditioning + Core",
        exercises: [
          "10–12 min incline treadmill walk",
          "Kettlebell swings — 3×20",
          "Plank — 3×45 sec",
          "Hanging knee raises — 3×12",
          "Russian twists — 3×20"
        ]
      },
      {
        day: "Day 4 — Upper Body Hypertrophy",
        exercises: isMale
          ? [
              "Incline Bench Press — 4×8",
              "Pull-Ups or Assisted — 4×6–8",
              "Cable Chest Fly — 3×12",
              "Seated Row — 3×12",
              "Face Pulls — 3×15",
              "EZ Bar Curl — 3×12",
              "Skull Crushers — 3×12"
            ]
          : [
              "Seated Shoulder Press — 4×10",
              "Lat Pulldown — 4×12",
              "Chest Fly — 3×15",
              "Single-Arm Row — 3×12 each",
              "Face Pulls — 3×15",
              "Cable Curl — 3×15",
              "Triceps Rope — 3×15"
            ]
      },
      {
        day: "Day 5 — Lower Body Hypertrophy",
        exercises: isMale
          ? [
              "Front Squat — 4×8",
              "Leg Extension — 3×15",
              "Hamstring Curl — 3×15",
              "Walking Lunges — 3×20 steps",
              "Calf Press — 4×15"
            ]
          : [
              "Hip Thrust — 4×10",
              "Sumo Deadlift — 4×8",
              "Leg Press (wide stance) — 3×15",
              "Cable Abduction — 3×20",
              "Glute Bridge — 3×20"
            ]
      }
    ],

    phase2: [
      {
        day: "Day 1 — Push Day",
        exercises: isMale
          ? [
              "Bench Press — 5×5",
              "Incline DB Press — 4×8",
              "Shoulder Press — 4×8",
              "Chest Fly — 3×12",
              "Triceps Dips — 3×10"
            ]
          : [
              "Incline DB Press — 4×10",
              "Shoulder Press — 4×12",
              "Chest Fly — 3×15",
              "Lateral Raises — 3×15",
              "Triceps Rope — 3×15"
            ]
      },
      {
        day: "Day 2 — Pull Day",
        exercises: isMale
          ? [
              "Deadlift — 5×5",
              "Pull-Ups — 4×6–8",
              "Seated Row — 4×10",
              "Face Pulls — 3×15",
              "Hammer Curls — 3×12"
            ]
          : [
              "Lat Pulldown — 4×12",
              "Seated Row — 4×12",
              "Single-Arm Row — 3×12 each",
              "Face Pulls — 3×15",
              "Cable Curls — 3×15"
            ]
      },
      {
        day: "Day 3 — Legs + Glutes",
        exercises: isMale
          ? [
              "Back Squat — 5×5",
              "Romanian Deadlift — 4×8",
              "Leg Press — 3×12",
              "Calf Raise — 4×15"
            ]
          : [
              "Hip Thrust — 5×5",
              "Romanian Deadlift — 4×10",
              "Bulgarian Split Squat — 3×12 each",
              "Cable Kickback — 3×15",
              "Glute Bridge — 3×20"
            ]
      },
      {
        day: "Day 4 — Conditioning + Core",
        exercises: [
          "12–15 min incline treadmill walk",
          "Kettlebell swings — 3×25",
          "Plank — 3×60 sec",
          "Hanging leg raises — 3×10–12"
        ]
      }
    ]
  };
}
