import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.defaults.global = {
  defaultFontFamily: "IRANSans",
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          family: "IRANSans", 
        },
      },
    },
    datalabels: {
      font: {
        family: "IRANSans",
      },
    },
    title: {
      display: true,
      // text: "بودجه تخصیصی و مصرفی",
      font: {
        family: "IRANSans",
      },
      labels: {
        font: {
          family: "IRANSans", 
        },
      },
    },
  },
};

const labels = ["سند تحول بنیادین", "سند انتظار", "ابلاغی وزیر"];

export const data = {
  labels,
  datasets: [
      {
          label: "",
        //   data: labels.map(() => faker.datatype.number({ min: 0, max: 700 })),
        data: [200,125,442,354,125,234],
          backgroundColor: "rgba(250, 180, 135, 0.7)",
        }
  ],
  font: {
    family: "IRANSans", 
  },
};

export function SingleBaar() {
  return <Bar options={options} data={data} height={150} />;
}
