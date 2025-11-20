"use client";

import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useMemo } from "react";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const skillLabels = ["Next.js", "NestJS", "Tailwind", "Git", "Linux Server"];
const skillValues = [95, 92, 94, 88, 85];

export function SkillRadarChart() {
  const chartConfig = useMemo<{
    data: ChartData<"radar">;
    options: ChartOptions<"radar">;
  }>(() => {
    const accentColor = "#C5A467";
    const gridColor = "rgba(255, 255, 255, 0.14)";
    const angleColor = "rgba(197, 164, 109, 0.35)";
    const labelColor = "#F4EDE0";
    return {
      data: {
        labels: skillLabels,
        datasets: [
          {
            label: "Level Keahlian",
            data: skillValues,
            backgroundColor: `${accentColor}33`,
            borderColor: accentColor,
            borderWidth: 2,
            pointBackgroundColor: "#fff",
            pointBorderColor: accentColor,
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "rgba(15, 95, 63, 0.9)",
            titleFont: { size: 14 },
            bodyFont: { size: 12 },
          },
        },
        scales: {
          r: {
            beginAtZero: true,
            suggestedMax: 100,
            ticks: {
              display: false,
            },
            grid: { color: gridColor },
            angleLines: { color: angleColor },
            pointLabels: { color: labelColor, font: { size: 13, weight: 600 } },
          },
        },
      },
    };
  }, []);

  return (
    <div className="glass-panel relative overflow-hidden p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">
          Radar Skill
        </p>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          2025 Overview
        </span>
      </div>
      <Radar data={chartConfig.data} options={chartConfig.options} />
    </div>
  );
}

