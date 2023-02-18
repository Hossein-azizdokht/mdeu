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
import { faker } from "@faker-js/faker";

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
          family: "IRANSans", // Add your font here to change the font of your legend label
        },
      },
    },
    datalabels: {
      font: {
        family: "IRANSans", // Add your font here to change the font of your legend label
      },
    },
    title: {
      display: true,
      text: "بودجه تخصیصی و مصرفی",
      font: {
        family: "IRANSans", // Add your font here to change the font of your legend label
      },
      labels: {
        font: {
          family: "IRANSans", // Add your font here to change the font of your legend label
        },
      },
    },
  },
};

const labels = ["معاونت پشتیبانی", "معاونت پرورشی", "معاونت ابتدائی", "معاونت متوسطه", "کانون پرورش فکری"];

export const data = {
  labels,
  datasets: [
      {
          label: "بودجه مصرفی",
        //   data: labels.map(() => faker.datatype.number({ min: 0, max: 700 })),
        data: [200,125,442,354,125,234],
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
        {
          label: "بودجه تخصیصی",
        //   data: labels.map(() => faker.datatype.number({ min: 200, max: 1000 })),
          data: [650,500,780,800,400,700],
          backgroundColor: "#4b4d97",
          font: {
            family: "IRANSans", // Add your font here to change the font of your legend label
          },
        },
  ],
  font: {
    family: "IRANSans", // Add your font here to change the font of your legend label
  },
};

export function Baar() {
  return <Bar options={options} data={data} height={110}/>;
}
