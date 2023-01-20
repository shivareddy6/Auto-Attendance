import React from "react";
import { Chart } from "react-google-charts";
import { PieChart } from "react-minimal-pie-chart";

export const data = [
  ["Pac Man", "Percentage"],
  ["present", 50],
  ["absent", 25],
];

export const options = {
  legend: "none",
  pieSliceText: "none",
  pieStartAngle: 180,
  // tooltip: { trigger: "none" },
  slices: {
    0: { color: "yellow" },
    1: { color: "black" },
  },
  pieHole: 0.8,
};

export default function DonutChart() {
  const handleMouseOver = (e, ind) => {
    console.log("mouse over on ", ind);
  }
  return (
    <PieChart
      data={[
        { title: "Absent", value: 10, color: "rgba(255, 255, 255, 0.15)" },
        { title: "Present", value: 15, color: "white" }
      ]}
      lineWidth={25}
      // onMouseOver={(_, ind) => handleMouseOver(_, ind)}
    />
  );
}
