import React, { useState } from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  height: 80px;
`;

const GroupButtons = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

const FilterNavBar = ({ socialMediaType }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <Container>
      <Typography
        sx={{
          color: "black",
          fontSize: "25px",
          fontFamily: "Satisfy, cursive",
          fontStyle: "bold",
        }}
      >
        {socialMediaType} ANALYSIS
      </Typography>
      {/* <GroupButtons>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select campain"
          onChange={handleChange}
          sx={{
            borderRadius: "11px",
            border: "0.7px solid #D5D5D5",
            backgroundColor: "#FFF",
            height: "50px",
            width: "200px",
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{
            borderRadius: "11px",
            border: "0.7px solid #D5D5D5",
            backgroundColor: "#FFF",
            height: "50px",
            width: "200px",
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </GroupButtons> */}
    </Container>
  );
};

export default FilterNavBar;
