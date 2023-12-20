import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data, labels, backgroundColor, borderColor }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColor.map((color) =>
          color.replace("0.6", "0.8")
        ),
        borderColor: "black",
        borderWidth: 1,
        hoverBackgroundColor: backgroundColor.map((color) =>
          color.replace("0.6", "0.9")
        ),
      },
    ],
  };

  const options = {};

  return <Pie data={chartData} options={options} />;
};

export default PieChart;
