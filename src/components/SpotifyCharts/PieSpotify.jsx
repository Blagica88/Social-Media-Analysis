import React from "react";
import { Radar } from "react-chartjs-2";
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

const PieSpotigy = ({ topSongs }) => {
  const genres = Array.from(new Set(topSongs.map((song) => song.genre)));
  const data = {
    labels: genres,
    datasets: [
      {
        label: "Genre Impact",
        data: genres.map((genre) =>
          topSongs.reduce(
            (acc, song) =>
              song.genre === genre ? acc + parseInt(song.streams, 10) : acc,
            0
          )
        ),
        backgroundColor: "rgba(144, 238, 144, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
      },
    },
  };

  return (
    <Container>
      <h2>Impact of Genre on Total Streams</h2>
      <Radar data={data} options={options} />
    </Container>
  );
};

export default PieSpotigy;
