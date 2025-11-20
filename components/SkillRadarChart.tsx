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
import { useTheme } from "./ThemeProvider";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const skillLabels = ["Next.js", "NestJS", "Tailwind", "Git", "Linux Server"];
const skillValues = [95, 92, 94, 88, 85];

export function SkillRadarChart() {
  const { theme } = useTheme();

  const chartConfig = useMemo<{
    data: ChartData<"radar">;
    options: ChartOptions<"radar">;
  }>(() => {
    const accentColor = theme === "dark" ? "#23A26F" : "#0F5F3F";
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
            grid: {
              color: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(15,95,63,0.15)",
            },
            angleLines: {
              color:
                theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(15,95,63,0.2)",
            },
            pointLabels: {
              color: theme === "dark" ? "#E7F4ED" : "#0F1C13",
              font: { size: 13, weight: 600 },
            },
          },
        },
      },
    };
  }, [theme]);

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

