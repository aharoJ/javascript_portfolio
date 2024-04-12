import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

const DoughnutChart = () => {
  const skillsData = {
    labels: [
      "Java", // 80
      "Spring", // 60
      "Maven", // 33
      "Bash", // 70
      "Fish", // 85
      "Python", // 50
      "TF", // 10
      "Django", //15
      "Js", // 40
      "Ts", // 30
      "React", // 30
      "Next.js", // 40
      "SQL/NoSQL", // 45
    ],
    datasets: [
      {
        label: "Understanding",
        data: [80, 60, 33, 70, 85, 50, 10, 15, 40, 30, 30, 40, 45],
        backgroundColor: [
          "rgba(255, 159, 64, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(201, 203, 207, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
        borderColor: [
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(201, 203, 207, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 12,
      },
    ],
  };

  const options = {
    cutout: "40%", // creates a thinner ring for doughnut
    radius: "100%", // makes the doughnut chart slightly smaller than full size
    plugins: {
      // title: {
      //   display: true,
      //   text: "Skills",
      //   // padding: {
      //   //   top: 10,
      //   //   bottom: 30,
      //   // },
      // },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 10,
          padding: 5,
          font: {
            size: 15,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          },
          color: "#555", // sets the font color of the legend labels
        },
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.7)", // tooltip background color
        bodyFont: {
          size: 14,
        },
        borderColor: "rgba(255,255,255,0.5)",
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
    },
    elements: {
      arc: {
        borderWidth: 2,
        borderColor: "#fff",
        hoverBorderColor: "rgba(200,200,200,0.5)",
        hoverBorderWidth: 3,
        hoverOffset: 4, // moves the segment out on hover
      },
    },
  };

  return (
    <div className="w-full items-end justify-end">
      <Doughnut data={skillsData} options={options} />
    </div>
  );
};

export default DoughnutChart;
