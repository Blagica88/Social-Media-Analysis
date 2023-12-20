// SocialMediaExtendedTable.js

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { socialMediaData } from "../data/socialMediaData";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  box-shadow: 0px 3px 6px 0px;
  width: 80%;
  height: 80%;
  overflow-x: auto;
  border-radius: 30px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 100px;
`;

const SocialMediaExtendedTable = () => {
  const platforms = [
    "Facebook",
    "YouTube",
    "Instagram",
    "Twitter",
    "TikTok",
    "Snapchat",
    "Pinterest",
  ];

  const renderTableRows = () => {
    return platforms.map((platform) => (
      <TableRow key={platform}>
        <TableCell>{platform}</TableCell>
        <TableCell>
          {(
            socialMediaData[`${platform.toLowerCase()}Statistics`]
              .monthlyUsers / 1e9
          ).toFixed(2)}
          B
        </TableCell>
        <TableCell>
          {socialMediaData[`${platform.toLowerCase()}Statistics`].dailyUsage}
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <div>
      <Typography
        sx={{
          color: "black",
          fontSize: "25px",
          fontFamily: "Satisfy, cursive",
          fontStyle: "bold",
          textAlign: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        SOCIAL MEDIA DATA PANEL
      </Typography>
      <Container>
        <TableContainer component={Paper} sx={{ border: "1px solid black" }}>
          <Table>
            <TableHead sx={{ fontWeight: "bold", backgroundColor: "#a19f9c" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Platform</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Monthly Users</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Daily Usage (minutes)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderTableRows()}</TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default SocialMediaExtendedTable;
