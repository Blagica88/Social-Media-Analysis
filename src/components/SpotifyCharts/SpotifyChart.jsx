import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import { Chart as ChartJS } from "chart.js/auto";

const Container = styled.div`
  flex: 1;
  box-shadow: 0px 3px 6px 0px;
  padding: 10px 10px 10px 10px;
  width: 450px;
  height: 730px;
  text-align: center;
  border-radius: 30px;
  background-color: white;
`;

const generateLightColors = (numColors) => {
  const lightColors = [];
  for (let i = 0; i < numColors; i++) {
    const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, 0.4)`;
    lightColors.push(color);
  }
  return lightColors;
};

const SpotifyChart = ({ topSongs }) => {
  const lightColors = generateLightColors(topSongs.length);

  const data = {
    labels: topSongs.map((song) => `${song.songName} - ${song.nameArtist}`),
    datasets: [
      {
        label: "Number of Streams",
        backgroundColor: lightColors,
        borderColor: lightColors.map((color) =>
          color.replace(", 0.4)", ", 1)")
        ), // Darker version
        borderWidth: 1,
        hoverBackgroundColor: lightColors.map((color) =>
          color.replace(", 0.8)", ", 1)")
        ), // Darker version
        hoverBorderColor: lightColors.map((color) =>
          color.replace(", 0.8)", ", 1)")
        ), // Darker version
        data: topSongs.map((song) => song.streams),
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Streams",
        },
      },
      y: {
        title: {
          display: true,
          text: "Songs",
        },
      },
    },
  };

  return (
    <Container>
      <h2>Top 10 Streamed Songs in 2023</h2>
      <Bar data={data} options={options} />
    </Container>
  );
};

export default SpotifyChart;
