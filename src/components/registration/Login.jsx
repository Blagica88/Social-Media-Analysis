import React from "react";
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
import { InputLabel } from "@mui/material";
import { Link } from "react-router-dom";

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
  height: 500px;
  border: 1px solid gray;
`;

const Login = () => {
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
            Log In
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
            Don't have an account?{" "}
            <span style={{ marginRight: "8px" }}>&nbsp;</span>
            <Link
              to={"/signup"}
              variant="body5"
              sx={{ color: "#86c48b", textDecoration: "none" }}
            >
              Sign Up
            </Link>
          </Typography>

          <Box
            component="form"
            onSubmit={() => console.log("submitted")}
            noValidate
            sx={{ mt: 5, mb: 2, width: "350px" }}
          >
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
            />
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Grid item xs={6}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid>
            </Grid>

            <Button
              fullWidth
              variant="contained"
              component={Link}
              to={"/influencers/main"}
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#302f2e",
                fontSize: "15px",
              }}
              endIcon={<NavigateNextIcon />}
            >
              Log in
            </Button>
          </Box>
        </Box>
      </LoginContainer>
    </FullContainer>
  );
};

export default Login;
