import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawers from "./Drawers";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 3px 6px 1px;
  height: 70px;
  background-color: #a19f9c;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const GroupButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  marginleft: 10px;
`;

const Navbar = () => {
  return (
    <Container>
      <MenuContainer>
        <Drawers />
        <Typography
          component={Link}
          to={"/influencers/main"}
          sx={{
            color: "#302f2e",
            fontSize: "25px",
            fontFamily: "Satisfy, cursive",
            textDecoration: "none",
          }}
        >
          INFLUENCERS
        </Typography>
      </MenuContainer>
      <GroupButton>
        <Button
          variant="contained"
          component={Link}
          to={`/influencers/instagram`}
          sx={{
            padding: "8.5px 18px",
            borderRadius: "1000px",
            backgroundColor: "#F5F5F5",
            color: "#302f2e",
          }}
        >
          Instagram
        </Button>
        <Button
          variant="contained"
          component={Link}
          to={`/influencers/spotify`}
          sx={{
            padding: "8.5px 18px",
            marginRight: "10px",
            borderRadius: "1000px",
            backgroundColor: "#F5F5F5",
            color: "#302f2e",
          }}
        >
          Spotify
        </Button>
        {/* <Button
          variant="contained"
          sx={{
            padding: "8.5px 18px",
            borderRadius: "1000px",
            backgroundColor: "#F5F5F5",
            color: "gray",
          }}
        >
          Facebook
        </Button>
        <Button
          variant="contained"
          sx={{
            padding: "8.5px 18px",
            borderRadius: "1000px",
            backgroundColor: "#F5F5F5",
            color: "gray",
          }}
        >
          Tiktok
        </Button>
        <Button
          variant="contained"
          sx={{
            padding: "8.5px 18px",
            borderRadius: "1000px",
            backgroundColor: "#F5F5F5",
            color: "gray",
            marginRight: "10px",
          }}
        >
          All
        </Button> */}
      </GroupButton>
    </Container>
  );
};

export default Navbar;
