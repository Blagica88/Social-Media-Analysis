import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import SplineChart from "../charts/SplineChart";
import { spotifyAnalyrics } from "../../data/spotifyAnalytics"; // Update the path accordingly

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Component = styled.div`
  width: 900px;
  height: 560px;
  box-shadow: 0px 3px 6px 0px;
  text-align: center;
  border-radius: 30px;
  background-color: white;
`;

const SmallerPieChartContainer = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Title = styled.h2`
  margin-bottom: 50px;
  margin-top: 20px;
`;

const Title2 = styled.h2`
  margin-bottom: 50px;
  margin-top: 20px;
`;

const SmallerPieChart = styled(PieChart)`
  width: 100% !important;
  height: 100% !important;
`;

const SpotifyAnalytics = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Load the Spotify statistics JSON data dynamically
    setData(spotifyAnalyrics);
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  const {
    usersByCountry,
    monthlyStats,
    userDemographics,
    premiumSubscribersStats,
    userAgeDistribution,
    revenueStats,
    marketShare,
    algorithmStats,
    payoutPerStream,
    podcastStats,
    dataConsumption,
  } = data[0].spotifyStats2023;

  return (
    <Container>
      <Component>
        <Title2>Spotify Users by Country</Title2>
        <BarChart
          data={userDemographics.regionwiseUserDistribution}
          label="Number of Users"
          backgroundColor={[
            "#FF6384",
            "#36a2eb",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#FF99CC",
            "#4D5360",
          ]}
          borderColor="#36a2eb"
        />
      </Component>
      <Component>
        <Title>Gender Distribution</Title>
        <SmallerPieChartContainer>
          <SmallerPieChart
            data={[
              userDemographics.malePercentage,
              userDemographics.femalePercentage,
            ]}
            labels={["Males", "Females"]}
            backgroundColor={["#FF6384", "#36a2eb"]}
          />
        </SmallerPieChartContainer>
      </Component>
      <Component>
        <Title2>Spotify Revenue Statistics</Title2>
        <SplineChart
          data={revenueStats}
          label="Revenue (in billions)"
          color="#4BC0C0"
        />
      </Component>
      <Component style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Title2>Age Distribution</Title2>
        <BarChart
          data={userAgeDistribution}
          labels={["18-24", "25-34", "35-44", "45-55", "55+"]}
          backgroundColor={[
            "#FF6384",
            "#36a2eb",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
          ]}
        />
      </Component>
    </Container>
  );
};

export default SpotifyAnalytics;
