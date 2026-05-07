import { useState } from "react";

const plan = {
  stats: {
    age: 46,
    height: "6 ft 0 in",
    current: 209,
    goal: 190,
    timeframe: "8 weeks"
  },

  calories: {
    deficit: 1900,
    maintenance: 2400,
    protein: 180,
    carbs: 160,
    fat: 65
  },

  fasting: {
    window: "16:8",
    eat: "12pm - 8pm",
    fast: "8pm - 12pm"
  },

  water: {
    daily: "1 gallon (128 oz)",
    timing: [
      "16 oz on waking",
      "16 oz pre-workout",
      "16 oz mid-day",
      "16 oz with dinner"
    ]
  },

  phases: [
    {
      id: 1,
      label: "Phase 1",
      weeks: "Weeks 1-4",
      theme: "Foundation & Fat Loss",
      color: "#e07b39",
      workouts: [
        {
          day: "Mon",
          focus: "Chest + Core",
          exercises: [
            "Barbell Bench Press 4x8",
            "Incline DB Press 3x10",
            "Cable Fly 3x12",
            "Hanging Leg Raises 3x12"
          ]
        },
        {
          day: "Tue",
          focus: "Legs (Quads Heavy)",
          exercises: [
            "Back Squat 4x8",
            "Leg Press 3x12",
            "Leg Extension 3x15"
          ]
        },
        {
          day: "Wed",
          focus: "HIIT Cardio",
          exercises: [
            "10 min warm-up",
            "20 min intervals (1 min fast / 1 min slow)"
          ]
        },
        {
          day: "Thu",
          focus: "Back + Biceps",
          exercises: [
            "Deadlift 4x5",
            "Barbell Row 3x8",
            "Lat Pulldown 3x12",
            "DB Curls 3x12"
          ]
        },
        {
          day: "Fri",
          focus: "Chest + Core (Volume)",
          exercises: [
            "DB Flat Press 4x12",
            "Push-ups 3x20",
            "Cable Fly 3x15",
            "Planks 3x60s"
          ]
        },
        {
          day: "Sat",
          focus: "Legs (Posterior Chain)",
          exercises: [
            "Romanian Deadlift 4x8",
            "Hamstring Curl 3x12",
            "Glute Bridge 3x15"
          ]
        },
        {
          day: "Sun",
          focus: "Active Recovery",
          exercises: ["30–45 min brisk walk"]
        }
      ]
    },

    {
      id: 2,
      label: "Phase 2",
      weeks: "Weeks 5-8",
      theme: "Definition & Muscle Refinement",
      color: "#3a8fd4",
      workouts: [
        {
          day: "Mon",
          focus: "Chest (Peak Contraction)",
          exercises: [
            "Incline Barbell Press 4x8",
            "Cable Fly 3x15",
            "Machine Press 3x12"
          ]
        },
        {
          day: "Tue",
          focus: "Legs (Size Focus)",
          exercises: [
            "Front Squat 4x8",
            "Leg Press 4x12",
            "Walking Lunges 3x20 steps"
          ]
        },
        {
          day: "Wed",
          focus: "Cardio + Core",
          exercises: [
            "25 min steady-state cardio",
            "Cable Crunch 3x15",
            "Russian Twists 3x20"
          ]
        },
        {
          day: "Thu",
          focus: "Back + Rear Delts",
          exercises: [
            "Weighted Pull-ups 4x6",
            "Seated Row 3x10",
            "Rear Delt Fly 3x15"
          ]
        },
        {
          day: "Fri",
          focus: "Chest + Abs (Finisher)",
          exercises: [
            "Flat Bench Press 4x8",
            "Push-ups 3x20",
            "Hanging Leg Raises 3x12"
          ]
        },
        {
          day: "Sat",
          focus: "Legs + Glutes",
          exercises: [
            "Hip Thrust 4x10",
            "Hamstring Curl 3x12",
            "Glute Kickbacks 3x15"
          ]
        },
        {
          day: "Sun",
          focus: "Active Recovery",
          exercises: ["45 min low-intensity cardio"]
        }
      ]
    }
  ],

  nutrition: [
    {
      time: "12:00 PM",
      meal: "Break-Fast Meal",
      items: [
        "2 whole eggs + 3 egg whites",
        "1 cup berries",
        "1 tbsp almond butter"
      ]
    },
    {
      time: "3:00 PM",
      meal: "Lunch / Pre-Workout",
      items: [
        "6–8 oz lean protein",
        "1 cup rice or potatoes",
        "1–2 cups vegetables"
      ]
    },
    {
      time: "5:30 PM",
      meal: "Post-Workout Shake",
      items: ["1.5 scoops whey protein", "1 cup almond milk"]
    },
    {
      time: "7:30 PM",
      meal: "Final Meal",
      items: [
        "6 oz lean protein or salmon",
        "1 cup vegetables",
        "1 tbsp olive oil"
      ]
    }
  ],

  alcohol: [
    "Limit to 1–2 drinks on weekends only",
    "Choose dry wine or clear spirits",
    "Avoid sugary mixers"
  ],

  tips: [
    { icon: "💧", title: "Water First", body: "16 oz immediately on waking." },
    { icon: "🥩", title: "Protein Target", body: "Aim for 180g protein daily." },
    { icon: "⏱️", title: "16:8 Fasting", body: "Last bite by 8pm. First meal at noon." },
    { icon: "🔥", title: "Fat Loss Reality", body: "Spot reduction is a myth — consistency wins." },
    { icon: "😴", title: "Sleep 7–9 hrs", body: "Critical for testosterone and recovery." },
    { icon: "⚖️", title: "Weekly Weigh-in", body: "Every Monday morning, same conditions." }
  ]
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dayColors = [
  "#e07b39",
  "#3a8fd4",
  "#6ab04c",
  "#9b59b6",
  "#e74c3c",
  "#f39c12",
  "#3498db"
];

export default function App() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeDay, setActiveDay] = useState(0);
  const [activeTab, setActiveTab] = useState("workout");

  const phase = plan.phases[activePhase];
  const workout = phase.workouts[activeDay];

  return (
    <div
      style={{
        fontFamily: "Georgia, serif",
        background: "#0a0e1a",
        minHeight: "100vh",
        color: "#e8dcc8"
      }}
    >
      <div style={{ padding: 20, textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>8‑Week Body Recomposition</h1>
        <p style={{ margin: 0, opacity: 0.7 }}>
          209 lbs → 190 lbs • Chest • Abs • Legs
        </p>
      </div>

      <div style={{ display: "flex", borderBottom: "1px solid #333" }}>
        {[
          ["workout", "Workouts"],
          ["nutrition", "Nutrition"],
          ["lifestyle", "Lifestyle"]
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            style={{
              flex: 1,
              padding: 12,
              background: "none",
              border: "none",
              color: activeTab === id ? "#e07b39" : "#777",
              borderBottom:
                activeTab === id
                  ? "2px solid #e07b39"
                  : "2px solid transparent"
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div style={{ padding: 20 }}>
        {activeTab === "workout" && (
          <div>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              {plan.phases.map((p, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActivePhase(i);
                    setActiveDay(0);
                  }}
                  style={{
                    flex: 1,
                    padding: 12,
                    borderRadius: 10,
                    border: `2px solid ${
                      activePhase === i ? p.color : "#444"
                    }`,
                    background:
                      activePhase === i ? `${p.color}22` : "transparent",
                    color: activePhase === i ? p.color : "#777"
                  }}
                >
                  <div>{p.label}</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{p.weeks}</div>
                </button>
              ))}
            </div>

            <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
              {days.map((d, i) => (
                <button
                  key={d}
                  onClick={() => setActiveDay(i)}
                  style={{
                    minWidth: 44,
                    height: 44,
                    borderRadius: 10,
                    border: `2px solid ${
                      activeDay === i ? dayColors[i] : "#444"
                    }`,
                    background:
                      activeDay === i ? `${dayColors[i]}22` : "transparent",
                    color: activeDay === i ? dayColors[i] : "#777"
                  }}
                >
                  {d}
                </button>
              ))}
            </div>

            <div
              style={{
                border: `1px solid ${dayColors[activeDay]}44`,
                borderRadius: 12,
                padding: 20
              }}
            >
              <h2 style={{ marginTop: 0 }}>{workout.focus}</h2>
              {workout.exercises.map((ex, i) => (
                <div
                  key={i}
                  style={{ padding: "6px 0", borderBottom: "1px solid #333" }}
                >
                  {i + 1}. {ex}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "nutrition" && (
          <div>
            {plan.nutrition.map((meal, i) => (
              <div
                key={i}
                style={{
                  marginBottom: 16,
                  padding: 16,
                  border: "1px solid #333",
                  borderRadius: 12
                }}
              >
                <strong>
                  {meal.time} — {meal.meal}
                </strong>
                {meal.items.map((item, j) => (
                  <div key={j} style={{ opacity: 0.8 }}>
                    {item}
                  </div>
                ))}
              </div>
            ))}

            <div style={{ marginTop: 20 }}>
              <h3>Alcohol Guidelines</h3>
              {plan.alcohol.map((a, i) => (
                <div key={i} style={{ opacity: 0.8 }}>
                  {a}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "lifestyle" && (
          <div>
            <h3>Water Timing</h3>
            {plan.water.timing.map((t, i) => (
              <div key={i} style={{ opacity: 0.8 }}>
                {t}
              </div>
            ))}

            <h3 style={{ marginTop: 20 }}>Daily Tips</h3>
            {plan.tips.map((tip, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <strong>
                  {tip.icon} {tip.title}
                </strong>
                <div style={{ opacity: 0.8 }}>{tip.body}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
