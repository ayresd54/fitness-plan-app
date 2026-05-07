// --- MILESTONES GENERATOR ---
// Creates weekly lifestyle milestones based on plan length + gender.

export function buildMilestones(weeks, gender) {
  const isMale = gender === "male";

  const base = [
    "Increase daily water intake",
    "Hit protein target 5 days this week",
    "Walk 7,000–10,000 steps daily",
    "Sleep 7–8 hours consistently",
    "Limit alcohol to 0–1 servings",
    "Track meals 5 days this week",
    "Reduce processed snacks",
    "Add 10 minutes of stretching",
    "Stay within calorie target",
    "Hit all workouts this week"
  ];

  const femaleExtras = [
    "Focus on glute activation warm-ups",
    "Prioritize recovery on cycle-sensitive days",
    "Add 5 minutes of core stability work"
  ];

  const maleExtras = [
    "Add 5 minutes of mobility for shoulders",
    "Reduce late-night eating",
    "Add 10 minutes of core conditioning"
  ];

  const genderList = isMale ? maleExtras : femaleExtras;

  const milestones = [];

  for (let i = 1; i <= weeks; i++) {
    const pick1 = base[(i - 1) % base.length];
    const pick2 = genderList[(i - 1) % genderList.length];

    milestones.push({
      week: i,
      items: [pick1, pick2]
    });
  }

  return milestones;
}
