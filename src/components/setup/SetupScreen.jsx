import React, { useState } from "react";
import SetupStep1 from "./SetupStep1";
import SetupStep2 from "./SetupStep2";
import SetupStep3 from "./SetupStep3";
import PreviewCard from "./PreviewCard";

export default function SetupScreen({ onSave }) {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    heightIn: "",
    weightLbs: "",
    targetWeightLbs: "",
    targetDate: ""
  });

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function next() {
    if (step < 3) setStep(step + 1);
  }

  function back() {
    if (step > 1) setStep(step - 1);
  }

  function finish() {
    onSave(form);
  }

  return (
    <div
      style={{
        background: "#0a0e1a",
        minHeight: "100vh",
        padding: "24px 18px",
        color: "#e8dcc8",
        fontFamily: "'Georgia','Times New Roman',serif"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: 20,
          color: "#f5ede0",
          fontSize: 22
        }}
      >
        Setup Your Plan
      </h1>

      <PreviewCard form={form} />

      {step === 1 && (
        <SetupStep1 form={form} updateField={updateField} />
      )}
      {step === 2 && (
        <SetupStep2 form={form} updateField={updateField} />
      )}
      {step === 3 && (
        <SetupStep3 form={form} updateField={updateField} />
      )}

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          marginTop: 24,
          gap: 12
        }}
      >
        {step > 1 && (
          <button
            onClick={back}
            style={{
              flex: 1,
              padding: "12px 0",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#e8dcc8",
              borderRadius: 6,
              cursor: "pointer"
            }}
          >
            Back
          </button>
        )}

        {step < 3 && (
          <button
            onClick={next}
            style={{
              flex: 1,
              padding: "12px 0",
              background: "#e07b39",
              border: "none",
              color: "#fff",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: 600
            }}
          >
            Next
          </button>
        )}

        {step === 3 && (
          <button
            onClick={finish}
            style={{
              flex: 1,
              padding: "12px 0",
              background: "#e07b39",
              border: "none",
              color: "#fff",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: 600
            }}
          >
            Save & Continue
          </button>
        )}
      </div>
    </div>
  );
}
