import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard"; // Replace with your desired icons
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import DevicesIcon from "@mui/icons-material/Devices";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
// ... (previous imports)

const Drawers = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { name, lastname, email } = useGlobalContext();

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const listItemStyle = {
    textDecoration: "none",
    color: "#302f2e",
    fontFamily: "inherit",
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div
        style={{
          padding: "16px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          alt="User Avatar"
          src="https://placekitten.com/80/80" // Replace with the URL of your image
          sx={{
            width: 100,
            height: 100,
            marginBottom: "8px",
            marginTop: "5px",
            border: "2px solid #302f2e",
          }}
        />
        <div style={{ marginBottom: "8px" }}>
          {name} {lastname}
        </div>
        <div style={{ color: "gray", marginBottom: "16px" }}>{email}</div>
        <Button
          variant="contained"
          component={Link}
          to={"/login"}
          sx={{
            marginBottom: "50px",
            width: "150px",
            borderRadius: "1000px",
            backgroundColor: "#605f5d",
          }}
        >
          Sign Out
        </Button>
      </div>
      <List>
        {[
          {
            text: "Reports",
            icon: <BarChartIcon />,
            to: "/influencers/dashboard",
          },
          {
            text: "Data Panel",
            icon: <DashboardIcon />,
            to: "/influencers/data-panel",
          },
          // { text: "Users", icon: <PeopleIcon />, to: "/users" },
          // { text: "Devices", icon: <DevicesIcon />, to: "/devices" },
          // { text: "Customers", icon: <PersonIcon />, to: "/customers" },
        ].map((item, index) => (
          <Button
            key={item.text}
            component={Link}
            to={item.to}
            sx={{
              display: "block",
              textAlign: "left",
              borderRadius: "0",
              "&:hover": {
                backgroundColor: "#f0efee",
              },
            }}
          >
            <ListItem sx={listItemStyle}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Button>
        ))}
      </List>
      <div
        style={{
          padding: "16px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            marginBottom: "8px",
            marginTop: "100px",
            color: "302f2e",
            fontSize: "25px",
            fontFamily: "Satisfy, cursive",
          }}
        >
          INFLUENCERS
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={{ color: "#302f2e" }}>
        <MenuIcon />
      </Button>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            width: "250px",
            backgroundColor: "#e0dfde",
            borderRight: "3px solid black",
          },
        }}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default Drawers;
