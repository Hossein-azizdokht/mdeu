import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



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
      text: "نمودار دایره‌ای",
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


export const data = {
  labels: ['ارزیابی', 'انتضاب', 'ضمن', 'ارزیابی عملکرد', 'کاشناسان', 'ارزیابان'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#4b4d97',
        'rgba(53, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      font: {
        family: "IRANSans", // Add your font here to change the font of your legend label
      },
      borderColor: [
        '#4b4d97',
        'rgba(53, 162, 235, 0.8)',
        'rgba(53, 162, 235, 0.8)',
        'rgba(53, 162, 235, 0.8)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
     
    },
  ],
};

export function PieChart() {
  return <Pie options={options} data={data} />;
}
