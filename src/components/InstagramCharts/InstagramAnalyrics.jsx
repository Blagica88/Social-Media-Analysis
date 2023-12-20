// YourMainComponent.js
import React, { useEffect, useState } from "react";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import DoughnutChart from "../charts/DoughnutChart";
import { instagramAnalytics } from "../../data/instagramAnalytics"; // Update the path accordingly
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around; /* Adjust this property as needed */
  flex-wrap: wrap; /* Allows items to wrap to the next line */
  width: 100%; /* Set width to 100% */
`;

const Component = styled.div`
  box-shadow: 0px 3px 6px 0px;
  width: 550px;
  height: 700px;
  text-align: center;
  border-radius: 30px;
  background-color: white;
`;

const LargerComponent = styled(Component)`
  width: 550px;
  height: 700px;
`;

const Title = styled.h2`
  margin-bottom: 50px;
  margin-top: 20px;
`;

const Title2 = styled.h2`
  margin-bottom: 150px;
  margin-top: 20px;
`;
const InstagramAnalytics = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Load the Instagram statistics JSON data dynamically
    setData(instagramAnalytics);
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  const { usersByCountry, reelsStatistics, statistics2023 } =
    data[0].instagramStatistics;
  console.log(data[0].instagramStatistics);

  return (
    <Container>
      <Component>
        <Title2>Instagram Users by Country</Title2>
        <BarChart
          data={usersByCountry.reduce(
            (acc, { country, users }) => ({ ...acc, [country]: users }),
            {}
          )}
          label="Number of Users"
          backgroundColor="#36a2eb"
          borderColor="#36a2eb"
        />
      </Component>
      <LargerComponent>
        <Title>Gender Distribution</Title>
        <PieChart
          data={[
            statistics2023.genderDistribution.males,
            statistics2023.genderDistribution.females,
          ]}
          labels={["Males", "Females"]}
          backgroundColor={["#FF6384", "#36a2eb"]}
        />
      </LargerComponent>
      <LargerComponent>
        <Title>Age Distribution</Title>
        <DoughnutChart
          data={statistics2023.ageDistributionUS}
          labels={["13-17", "18-24", "25-34", "35-44", "45-54", "55-64", "65+"]}
          backgroundColor={[
            "#FF6384",
            "#36a2eb",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#FF99CC",
            "#4D5360",
          ]}
        />
      </LargerComponent>
      {/* Uncomment the following lines if you want to include the reelsStatistics chart */}
      {/* <Component>
        <h2>Instagram Reels Statistics</h2>
        <BarChart
          data={reelsStatistics}
          label="Number of Interactions"
          backgroundColor="#FFCE56"
          borderColor="#FFCE56"
        />
      </Component> */}
    </Container>
  );
};

export default InstagramAnalytics;
