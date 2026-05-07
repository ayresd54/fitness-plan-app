// --- CALCULATE PLAN LOGIC ---
// All core math for calories, macros, timeline, etc.

export function calculatePlan(profile) {
  const {
    age,
    gender,
    weightLbs,
    heightIn,
    targetWeightLbs,
    targetDate
  } = profile;

  // Convert units
  const weightKg = weightLbs * 0.453592;
  const heightCm = heightIn * 2.54;

  // Mifflin-St Jeor BMR
  const bmr =
    gender === "male"
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  // Moderately active multiplier
  const tdee = Math.round(bmr * 1.55);

  // Weight loss timeline
  const lossLbs = weightLbs - targetWeightLbs;

  const weeks = Math.max(
    4,
    Math.round(
      (new Date(targetDate) - new Date()) /
        (7 * 24 * 60 * 60 * 1000)
    )
  );

  // Weekly fat loss (max 2.5 lbs/week)
  const weeklyLoss = Math.min(2.5, lossLbs / weeks);

  // Daily deficit (500 calories per lb/week)
  const dailyDeficit = Math.round(weeklyLoss * 500);

  // Calories (never below 1200)
  const calories = Math.max(1200, tdee - dailyDeficit);

  // Macros
  const protein = Math.round(weightLbs * 0.85); // grams
  const fat = Math.round((calories * 0.28) / 9); // grams
  const carbs = Math.round(
    (calories - protein * 4 - fat * 9) / 4
  );

  return {
    tdee,
    calories,
    protein,
    fat,
    carbs,
    weeks,
    weeklyLoss: weeklyLoss.toFixed(1),
    lossLbs
  };
}
