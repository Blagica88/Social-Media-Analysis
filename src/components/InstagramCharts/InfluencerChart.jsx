import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Container = styled.div`
  flex: 1;
  box-shadow: 0px 3px 6px 0px;
  padding: 10px 10px 10px 10px;
  width: 450px;
  height: 700px;
  text-align: center;
  border-radius: 30px;
  background-color: white;
`;

const Title = styled.h2`
  padding-bottom: 50px;
`;

const InfluencerChart = ({ influencers_data }) => {
  // Sort influencers based on average likes (descending order)
  const sortedInfluencers = influencers_data.sort(
    (a, b) => b.avg_likes - a.avg_likes
  );

  // Extract data for the top 10 influencers
  const top10Influencers = sortedInfluencers.slice(0, 10);
  const influencerLabels = top10Influencers.map(
    (influencer) => influencer.channel_info
  );
  const influencerLikes = top10Influencers.map((influencer) =>
    parseInt(influencer.avg_likes)
  );

  const chartData = {
    labels: influencerLabels,
    datasets: [
      {
        label: "Average Likes",
        data: influencerLikes,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
      },
    ],
  };

  const chartOptions = {
    // Chart options (customize as needed)
  };

  return (
    <Container>
      <Title>Top 10 Instagram Influencer Analytics Chart</Title>
      <Bar data={chartData} options={chartOptions} />
    </Container>
  );
};

export default InfluencerChart;
