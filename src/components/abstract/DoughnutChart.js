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
import TextAnimation from "../animation/TextAnimation";
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
      "Java",
      "Spring",
      "Bash",
      "Fish",
      "Python",
      "TF",
      "Django",
      "Js",
      "Ts",
      "React",
      "Next.js",
      "SQL/NoSQL",
    ],
    datasets: [
      {
        label: "Understanding",
        data: [
          90,
          70,
          90,
          95,
          65,
          15,
          25,
          50, // JS
          38,
          45,
          65,
          75,
        ],
        backgroundColor: [
          "rgba(255, 159, 64, 0.5)",
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
    <div className="w-auto items-end justify-evenly">
      {/* Skills Chart */}
      {/* <h2 className="text-xl font-bold mb-2">Skills</h2> */}
      <TextAnimation
        text="Languages"
        className="justify-center text-2xl font-light tracking-tight text-gray-400 dark:text-orange-200 
        md:mb-8 md:text-4xl md:font-light md:!normal-case"
      />
      <Doughnut data={skillsData} options={options} />
    </div>
  );
};

export default DoughnutChart;
