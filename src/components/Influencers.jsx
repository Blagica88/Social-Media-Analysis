import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { influencers_data } from "../data/dataInstagram";
import InfluencerChart from "./InstagramCharts/InfluencerChart";
import FollowersChart from "./InstagramCharts/FollowersChart";
import { imageOverlay } from "leaflet";
import { spotifyData } from "../data/dataSpotify";
import SpotifyChart from "./SpotifyCharts/SpotifyChart";
import PieSpotigy from "./SpotifyCharts/PieSpotify";
import FilterNavBar from "./menu/FilterNavBar";
import Totals from "./Totals";
import InstagramAnalytics from "./InstagramCharts/InstagramAnalyrics";
import SpotifyAnalytics from "./SpotifyCharts/SpotifyAnalytics";
import TotalsInstagram from "./InstagramCharts/TotalsInstagram";
import TotalsSpotify from "./SpotifyCharts/TotalsSpotify";
import ImageSlider from "./ImageSlider";
import { Toolbar, Tooltip } from "@mui/material";
import SocialMedia from "./SocialMedia";
import SocialMediaTable from "./SocialMediaTable";

const radarChartData = {
  "Average Likes": influencers_data.map((influencer) =>
    parseFloat(influencer.avg_likes)
  ),
  Followers: influencers_data.map((influencer) =>
    parseFloat(influencer.followers)
  ),
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
  gap: 50px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  flex-wrap: wrap;
`;

const Page = styled.div`
  background-color: #e0dfde;
  max-height: calc(100dvh - 80px);
  box-shadow: 0px 3px 6px 0px;
  overflow-y: auto;
  overflow-x: hidden;
`;
const Influencers = () => {
  const { chartType } = useParams();

  return (
    <Page>
      {chartType === "instagram" && (
        <>
          <FilterNavBar socialMediaType={"INSTAGRAM"} />
          <TotalsInstagram />
          <Container>
            <InfluencerChart influencers_data={influencers_data} />
            <FollowersChart influencersData={influencers_data} />
            <InstagramAnalytics />
          </Container>
        </>
      )}
      {chartType === "spotify" && (
        <>
          <FilterNavBar socialMediaType={"SPOTIFY"} />
          <TotalsSpotify />
          <Container>
            <SpotifyChart topSongs={spotifyData} />
            <PieSpotigy topSongs={spotifyData} />
            <SpotifyAnalytics />
          </Container>
        </>
      )}
      {chartType === "main" && (
        <>
          <Totals />
          <ImageSlider />
        </>
      )}
      {chartType === "dashboard" && (
        <>
          <Totals />
          <SocialMedia />
        </>
      )}
      {chartType === "data-panel" && (
        <>
          <Totals />
          <SocialMediaTable />
        </>
      )}
    </Page>
  );
};

export default Influencers;
