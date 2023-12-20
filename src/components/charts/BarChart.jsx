import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, label }) => {
  const barColors = generateRandomColors(Object.keys(data).length);

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: label,
        backgroundColor: barColors,
        borderColor: "black",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: Object.values(data),
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0,0,0,0.1)",
        },
        ticks: {
          font: {
            weight: "bold",
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: "bold",
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            weight: "bold",
          },
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

const generateRandomColors = (count) => {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, 0.8)`;
    colors.push(randomColor);
  }
  return colors;
};

export default BarChart;
