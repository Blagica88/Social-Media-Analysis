import React from "react";
import styled from "styled-components";
import Navbar from "./menu/Navbar";
import Drawers from "./menu/Drawers";
import FilterNavBar from "./menu/FilterNavBar";
import Totals from "./Totals";
import Influencers from "./Influencers";

const MainScreen = () => {
  return (
    <>
      <Navbar />
      <Influencers />
    </>
  );
};

export default MainScreen;
