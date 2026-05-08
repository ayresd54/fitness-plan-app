import React, { useState } from "react";
import LifestyleTab from "./LifestyleTab";
import NutritionTab from "./NutritionTab";
import ProfileTab from "./ProfileTab";
import ProgressTab from "./ProgressTab";
import WorkoutsTab from "./WorkoutsTab";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("lifestyle");

  const renderTab = () => {
    switch (activeTab) {
      case "lifestyle":
        return <LifestyleTab />;
      case "nutrition":
        return <NutritionTab />;
      case "profile":
        return <ProfileTab />;
      case "progress":
        return <ProgressTab />;
      case "workouts":
        return <WorkoutsTab />;
      default:
        return <LifestyleTab />;
    }
  };

  return (
    <div>
      <div className="tab-buttons">
        <button onClick={() => setActiveTab("lifestyle")}>Lifestyle</button>
        <button onClick={() => setActiveTab("nutrition")}>Nutrition</button>
        <button onClick={() => setActiveTab("profile")}>Profile</button>
        <button onClick={() => setActiveTab("progress")}>Progress</button>
        <button onClick={() => setActiveTab("workouts")}>Workouts
