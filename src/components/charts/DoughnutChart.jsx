import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DoughnutChart = ({ data, backgroundColor }) => {
  const lighterColors = backgroundColor.map((color) =>
    color.replace("0.6", "0.8")
  );

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: backgroundColor,
        hoverBackgroundColor: lighterColors,
      },
    ],
  };

  const options = {
    cutout: "60%",
  };

  return <Doughnut data={chartData} options={options} />;
};

export default DoughnutChart;
