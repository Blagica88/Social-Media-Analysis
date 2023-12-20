import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import styled from "styled-components";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { InputAdornment, InputLabel, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { green } from "@mui/material/colors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

const FullContainer = styled.div`
  background-image: url("https://img.freepik.com/free-vector/white-abstract-background_23-2148817571.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled(Container)`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  height: 700px;
  border: 1px solid gray;
`;

const Signup = () => {
  const [password, setPassword] = useState("");
  const {
    name,
    lastname,
    email,
    handleNameChange,
    handleLastnameChange,
    handleEmailChange,
  } = useGlobalContext();

  const getPasswordStrength = (password) => {
    if (
      password.length >= 8 &&
      /[a-zA-Z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      return "Strong";
    } else if (
      password.length >= 6 &&
      /[a-zA-Z]/.test(password) &&
      /\d/.test(password)
    ) {
      return "Good";
    } else {
      return "Weak";
    }
  };

  const strength = getPasswordStrength(password);

  return (
    <FullContainer>
      <LoginContainer component="main" sx={{ width: "500px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            sx={{
              marginTop: "30px",
              marginBottom: "10px",
              fontFamily: "Work Sans",
            }}
          >
            Sign Up
          </Typography>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontFamily: "Work Sans",
              display: "flex",
              alignItems: "center",
              marginRight: "3px",
            }}
          >
            Already have an account?{" "}
            <span style={{ marginRight: "8px" }}>&nbsp;</span>
            <Link
              href="/login"
              variant="body5"
              sx={{ color: "#86c48b", textDecoration: "none" }}
            >
              Log in
            </Link>
          </Typography>

          <Box
            component="form"
            onSubmit={() => console.log("submitted")}
            noValidate
            sx={{ mt: 5, mb: 2, width: "350px" }}
          >
            <InputLabel htmlFor="email">Name</InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              name="name"
              autoComplete="name"
              autoFocus
              variant="standard"
              value={name}
              onChange={handleNameChange}
              sx={{ borderBottom: "1px #000000", width: "100%" }}
            />
            <InputLabel htmlFor="email">Lastname</InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastname"
              name="lastname"
              autoComplete="lastname"
              autoFocus
              variant="standard"
              value={lastname}
              onChange={handleLastnameChange}
              sx={{ borderBottom: "1px #000000", width: "100%" }}
            />
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              variant="standard"
              value={email}
              onChange={handleEmailChange}
              sx={{ borderBottom: "1px #000000", width: "100%" }}
            />
            <InputLabel htmlFor="password">Password</InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="standard"
              sx={{ borderBottom: "1px #000000", width: "100%" }}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {strength === "Strong" ? (
                      <CheckCircleIcon color="success" />
                    ) : (
                      <Tooltip title={`Password Strength: ${strength}`} arrow>
                        <InfoIcon color="primary" />
                      </Tooltip>
                    )}
                  </InputAdornment>
                ),
              }}
            />

            <InputLabel htmlFor="password">Confirm Password</InputLabel>

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="confirm-password"
              autoComplete="current-password"
              variant="standard"
              sx={{ borderBottom: "1px #000000" }} // Add this line for a custom bottom border
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#302f2e",
                fontSize: "15px",
              }}
              component={Link}
              to={"/influencers/main"}
              endIcon={<NavigateNextIcon />}
            >
              Sign up
            </Button>
          </Box>
        </Box>
      </LoginContainer>
    </FullContainer>
  );
};

export default Signup;
