import React, { useState } from "react";
import styled from "styled-components";
import { Radar } from "react-chartjs-2";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Container = styled.div`
  flex: 1;
  height: 700px;
  padding: 10px 10px 10px 10px;
  box-shadow: 0px 3px 6px 0px;
  width: 450px;
  height: 700px;
  border-radius: 30px;
  background-color: white;
`;
const RadarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 600px;
`;

const Title = styled.h2`
  text-align: center;
`;
const FollowersChart = ({ influencersData }) => {
  const [displayCount, setDisplayCount] = useState(10);

  const sortedInfluencers = influencersData.sort(
    (a, b) => parseFloat(b.influence_score) - parseFloat(a.influence_score)
  );

  const displayedInfluencers = sortedInfluencers.slice(0, displayCount);

  const labels = displayedInfluencers.map(
    (influencer) => influencer.channel_info
  );
  const followers = displayedInfluencers.map((influencer) =>
    parseFloat(influencer.followers)
  );
  const influenceScores = displayedInfluencers.map((influencer) =>
    parseFloat(influencer.influence_score)
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Followers",
        data: followers,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Influence Score",
        data: influenceScores,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: Math.max(...followers, ...influenceScores),
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          title: () => "",
          label: (context) => {
            const datasetLabel = context.dataset.label || "";
            const value = context.parsed.y;
            return `${datasetLabel}: ${value}`;
          },
        },
      },
    },
    onHover: (event, elements) => {},
    onClick: (event, elements) => {},
  };

  return (
    <Container>
      <Title>
        Top {displayCount} Instagram Influencers: Followers vs Influence Score
        Radar Chart
      </Title>
      <label>Show Top: </label>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={displayCount}
        label="Select campain"
        onChange={(e) => setDisplayCount(parseInt(e.target.value))}
        sx={{
          borderRadius: "11px",
          border: "0.7px solid #D5D5D5",
          backgroundColor: "#FFF",
          height: "50px",
          width: "200px",
        }}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
      <RadarContainer>
        <Radar data={data} options={options} />
      </RadarContainer>
    </Container>
  );
};

export default FollowersChart;
