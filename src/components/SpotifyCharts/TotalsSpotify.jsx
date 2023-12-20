import React from "react";
import styled from "styled-components";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { spotifyAnalyrics } from "../../data/spotifyAnalytics";

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

const TotalsSpotify = () => {
  console.log(spotifyAnalyrics);

  console.log(spotifyAnalyrics[0].spotifyStats2023.overview.totalUsers);
  const totalUsers = spotifyAnalyrics[0].spotifyStats2023.overview.totalUsers;
  const totalSongs = spotifyAnalyrics[0].spotifyStats2023.overview.totalSongs;
  const artist =
    spotifyAnalyrics[0].spotifyStats2023.artistRanking.mostStreamedArtist;
  const song =
    spotifyAnalyrics[0].spotifyStats2023.artistRanking.mostStreamedTrack;

  return (
    <Container>
      <Card sx={{ width: "350px" }}>
        <Avatar
          alt="User Avatar"
          src="data:image/jpeg;base64,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"
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
            Most Streamed Artist
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
            {artist}
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
            Total songs
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
            {totalSongs}
          </Typography>
        </CardText>
      </Card>
      <Card>
        <Avatar
          alt="User Avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCLUHiu9L4bZLvPl230X38lEd_lIwlnNwajA&usqp=CAU"
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
            Most Steamed Song
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
            {song}
          </Typography>
        </CardText>
      </Card>
    </Container>
  );
};

export default TotalsSpotify;
