import React from "react";
import Chart from "react-apexcharts";

const SplineChart = ({ data, label, color }) => {
  const chartData = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: Object.keys(data),
        labels: {
          style: {
            colors: "#777",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#777",
          },
        },
        title: {
          text: label,
          style: {
            color: "#777",
          },
        },
      },
      colors: [color],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      grid: {
        borderColor: "#eee",
      },
      tooltip: {
        theme: "dark",
      },
    },
    series: [
      {
        name: label,
        data: Object.values(data),
      },
    ],
  };

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="line"
      height={300}
    />
  );
};

export default SplineChart;
