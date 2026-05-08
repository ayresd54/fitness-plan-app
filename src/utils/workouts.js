// WORKOUT TEMPLATES
// Phase 1 = foundational strength + simple conditioning
// Phase 2 = progressive overload + harder conditioning

export function getWorkouts(gender) {
  return {
    phase1: [
      {
        day: "Day 1 - Full Body A",
        exercises: [
          "Goblet Squat - 3x12",
          "Push-ups - 3x10",
          "Dumbbell Row - 3x12 each side",
          "Glute Bridge - 3x15",
          "Plank - 3x30 sec"
        ]
      },
      {
        day: "Day 2 - Conditioning",
        exercises: [
          "20-minute brisk walk OR incline treadmill",
          "Optional: 5x1-minute fast intervals"
        ]
      },
      {
        day: "Day 3 - Full Body B",
        exercises: [
          "Romanian Deadlift - 3x12",
          "Dumbbell Shoulder Press - 3x10",
          "Lat Pulldown - 3x12",
          "Step-ups - 3x12 each leg",
          "Side Plank - 3x20 sec each side"
        ]
      },
      {
        day: "Day 4 - Conditioning",
        exercises: [
          "20-25 minutes steady-state cardio",
          "Optional: light core work"
        ]
      },
      {
        day: "Day 5 - Full Body C",
        exercises: [
          "Leg Press - 3x12",
          "Chest Press - 3x10",
          "Seated Row - 3x12",
          "Hip Thrust - 3x12",
          "Hanging Knee Raise - 3x10"
        ]
      }
    ],
    phase2: [
      {
        day: "Day 1 - Strength A",
        exercises: [
          "Barbell Squat OR Goblet Squat - 4x8",
          "Bench Press OR Push-ups - 4x8",
          "Bent-Over Row - 4x10",
          "Hip Thrust - 4x10",
          "Plank - 3x45 sec"
        ]
      },
      {
        day: "Day 2 - Conditioning",
        exercises: [
          "25 minutes steady-state cardio",
          "Optional: 6x1-minute intervals"
        ]
      },
      {
        day: "Day 3 - Strength B",
        exercises: [
          "Deadlift Variation - 4x6",
          "Overhead Press - 4x8",
          "Lat Pulldown - 4x10",
          "Walking Lunges - 3x12 each leg",
          "Side Plank - 3x30 sec each side"
        ]
      },
      {
        day: "Day 4 - Conditioning",
        exercises: [
          "30 minutes steady-state cardio",
          "Optional: core circuit"
        ]
      },
      {
        day: "Day 5 - Strength C",
        exercises: [
          "Leg Press - 4x10",
          "Incline Dumbbell Press - 4x10",
          "Seated Row - 4x10",
          "Glute Bridge - 4x12",
          "Hanging Knee Raise - 3x12"
        ]
      }
    ]
  };
}
