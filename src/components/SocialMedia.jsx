// Import necessary modules
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { socialMediaData } from "../data/socialmedia";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link
import {
  Typography,
  Container as MuiContainer,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// Styled components
const Container = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-direction: column;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 15px;
`;

const Title = styled.h2`
  color: #333;
`;

const ChartContainer = styled(MuiContainer)`
  width: 80%;
  max-width: 1200px;
  margin: auto;
  text-align: center;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 30px;
`;

const SocialMedia = () => {
  const formatNumber = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}B`;
    } else {
      return `${value}M`;
    }
  };

  const chartData = {
    labels: socialMediaData.map((entry) => entry.platform),
    datasets: [
      {
        label: "Monthly Active Users",
        data: socialMediaData.map((entry) => entry.users),
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 205, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(255, 0, 0, 0.7)",
          "rgba(0, 255, 0, 0.7)",
          "rgba(255, 0, 255, 0.7)",
          "rgba(128, 128, 128, 0.7)",
          "rgba(0, 0, 255, 0.7)",
          "rgba(128, 0, 128, 0.7)",
          "rgba(0, 128, 0, 0.7)",
          "rgba(255, 140, 0, 0.7)",
          "rgba(218, 112, 214, 0.7)",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  const [platform, setPlatform] = useState("");

  const handleChange = (e) => {
    setPlatform(e.target.value);
  };

  return (
    <Container>
      <Group>
        <Typography
          sx={{
            color: "black",
            fontSize: "25px",
            fontFamily: "Satisfy, cursive",
            fontStyle: "bold",
          }}
        >
          SOCIAL MEDIA DASHBOARD
        </Typography>
        <FormControl>
          {/* <InputLabel id="platform-label">Select platform</InputLabel> */}
          <Select
            labelId="platform-label"
            id="platform"
            value={platform}
            onChange={handleChange}
            sx={{
              borderRadius: "11px",
              border: "0.7px solid #D5D5D5",
              backgroundColor: "#FFF",
              height: "50px",
              width: "200px",
            }}
          >
            <MenuItem value="Instagram">Instagram</MenuItem>
            <MenuItem value="Spotify">Spotify</MenuItem>
          </Select>
        </FormControl>
        <IconButton
          component={Link}
          to={`/influencers/${platform.toLowerCase()}`}
        >
          <SearchIcon />
        </IconButton>
      </Group>
      <ChartContainer>
        <Title>Social Media Monthly Active Users</Title>
        <Bar data={chartData} />
      </ChartContainer>
    </Container>
  );
};

export default SocialMedia;
