// --- CALCULATIONS ENGINE ---
// Handles TDEE, calories, macros, weekly loss, and total timeline.

export function calculatePlan(profile) {
  const {
    age,
    gender,
    heightIn,
    weightLbs,
    targetWeightLbs,
    targetDate
  } = profile;

  const heightCm = heightIn * 2.54;
  const weightKg = weightLbs * 0.453592;

  // BMR (Mifflin-St Jeor)
  const bmr =
    gender === "male"
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  // Light activity multiplier
  const tdee = Math.round(bmr * 1.35);

  // Daily calories for fat loss
  const calories = Math.round(tdee - 500);

  // Macros
  const protein = Math.round(weightLbs * 0.8);
  const fat = Math.round((calories * 0.25) / 9);
  const carbs = Math.round((calories - protein * 4 - fat * 9) / 4);

  // Weekly loss estimate
  const weeklyLoss = 1; // 500 cal deficit = ~1 lb/week

  // Total weeks
  const totalLoss = weightLbs - targetWeightLbs;
  const weeks = Math.max(1, Math.ceil(totalLoss / weeklyLoss));

  return {
    tdee,
    calories,
    protein,
    carbs,
    fat,
    weeklyLoss,
    weeks
  };
}
