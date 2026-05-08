// --- MILESTONE GENERATOR ---
// Builds weekly lifestyle milestones based on total weeks + gender.

export function buildMilestones(totalWeeks, gender) {
  const baseHabits = [
    "Hit your protein target 4+ days this week",
    "Walk at least 7,000 steps per day",
    "Drink 2–3L of water daily",
    "Track meals at least 4 days",
    "Sleep 7+ hours per night"
  ];

  const maleHabits = [
    "Add 5–10 lbs to one major lift",
    "Increase conditioning intensity slightly",
    "Focus on posture and core stability"
  ];

  const femaleHabits = [
    "Prioritize glute activation before lower‑body days",
    "Add one extra core session this week",
    "Increase daily steps by 500"
  ];

  const genderHabits = gender === "male" ? maleHabits : femaleHabits;

  const milestones = [];

  for (let week = 1; week <= totalWeeks; week++) {
    const items = [...baseHabits];

    // Add one gender‑specific habit per week, cycling through list
    items.push(genderHabits[(week - 1) % genderHabits.length]);

    // Add progressive habit every 4 weeks
    if (week % 4 === 0) {
      items.push("Review progress and adjust calorie intake if needed");
    }

    milestones.push({
      week,
      items
    });
  }

  return milestones;
}
