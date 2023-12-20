import React from "react";
import styled from "styled-components";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { instagramAnalytics } from "../../data/instagramAnalytics";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 19px;
  border: 1px solid #e1e8e3;
  background: #fff;
  height: 80px;
  padding: 20px;
  margin-top: 20px;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  font-family: Lato;
  font-size: 12.702px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const TotalsInstagram = () => {
  const mostFollowed =
    instagramAnalytics[0].instagramStatistics.statistics2023.mostFollowed;
  const mostLikedPost =
    instagramAnalytics[0].instagramStatistics.statistics2023.mostLikedPost;
  const totalUsers =
    instagramAnalytics[0].instagramStatistics.statistics2023.totalUsers;
  const averageTimeSpent =
    instagramAnalytics[0].instagramStatistics.statistics2023.averageTimeSpent;

  const mostFollowedUser = mostFollowed.split("(")[0].trim();
  console.log(mostFollowedUser);
  const mostLikedPostUser = mostLikedPost.user;
  const mostLikedPostLikes = mostLikedPost.post.split("(")[1].split(" ")[0];
  const totalUsersPerMinute = totalUsers / 24 / 60;
  return (
    <Container>
      <Card sx={{ width: "350px" }}>
        <Avatar
          alt="User Avatar"
          src="data:image/jpeg;base64,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" // Replace with the URL of your image
          sx={{
            width: "100px",
            height: "100px",
            marginBottom: "8px",
            marginTop: "5px",
          }}
        />
        <CardText>
          <Typography
            sx={{
              color: "black",
              fontSize: "15px",
              fontFamily: "Lato",
              fontWeight: "300",
              fontStyle: "normal",
            }}
          >
            Most Followed
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: "33px",
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "700",
            }}
          >
            {mostFollowedUser}
          </Typography>
        </CardText>
      </Card>
      <Card>
        <Avatar
          alt="User Avatar"
          src="data:image/png;base64,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" // Replace with the URL of your image
          sx={{
            width: "100px",
            height: "100px",
            marginBottom: "8px",
            marginTop: "5px",
          }}
        />
        <CardText>
          <Typography
            sx={{
              color: "black",
              fontSize: "15px",
              fontFamily: "Lato",
              fontWeight: "300",
              fontStyle: "normal",
            }}
          >
            Total users
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: "33px",
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "700",
            }}
          >
            {totalUsers}
          </Typography>
        </CardText>
      </Card>
      <Card>
        <Avatar
          alt="User Avatar"
          src="https://cdn-icons-png.flaticon.com/512/1289/1289317.png" // Replace with the URL of your image
          sx={{
            width: "100px",
            height: "100px",
            marginBottom: "8px",
            marginTop: "5px",
          }}
        />
        <CardText>
          <Typography
            sx={{
              color: "black",
              fontSize: "15px",
              fontFamily: "Lato",
              fontWeight: "300",
              fontStyle: "normal",
            }}
          >
            Average time spend
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: "33px",
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "700",
            }}
          >
            {averageTimeSpent}
          </Typography>
        </CardText>
      </Card>
      <Card>
        <Avatar
          alt="User Avatar"
          src="data:image/jpeg;base64,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" // Replace with the URL of your image
          sx={{
            width: "100px",
            height: "100px",
            marginBottom: "8px",
            marginTop: "5px",
          }}
        />
        <CardText>
          <Typography
            sx={{
              color: "black",
              fontSize: "15px",
              fontFamily: "Lato",
              fontWeight: "300",
              fontStyle: "normal",
            }}
          >
            Most Liked Post
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: "33px",
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "700",
            }}
          >
            {mostLikedPostLikes} M
          </Typography>
        </CardText>
      </Card>
    </Container>
  );
};

export default TotalsInstagram;
