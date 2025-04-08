import { Box, TextField, InputAdornment, Skeleton } from "@mui/material";
import User_avtar from "../component/user_avtar";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import HistoryIcon from "@mui/icons-material/History";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PanoramaIcon from '@mui/icons-material/Panorama';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { Link, NavLink } from "react-router-dom";
const SideBar = ({}) => {
  function handleClick() {
    console.log("dsf");
  }
  return (
    <Box
      sx={{
        width: 200,
        height: "100vh",
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        paddingTop: 1,
        bgcolor: "primary.light",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <User_avtar />
      </Box>
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <NavLink to={"/home/dashboard"} replace={true} style={style.option}>
          {({ isActive }) => (
            <Box
              sx={style.option}
              style={{
                backgroundColor: isActive
                  ? "rgba(43,45,66,0.4)"
                  : "transparent", // Use exact color code
                color: isActive ? "#fff" : "inherit",
              }}
            >
              <SpaceDashboardIcon /> Dashboard
            </Box>
          )}
        </NavLink>
        <NavLink to={"/home/WithdrawReq"} replace={true} style={style.option}>
          {({ isActive }) => (
            <Box
              sx={style.option}
              style={{
                backgroundColor: isActive
                  ? "rgba(43,45,66,0.4)"
                  : "transparent", // Use exact color code
                color: isActive ? "#fff" : "inherit",
              }}
            >
              <HistoryIcon />
              Withdraw Req
            </Box>
          )}
        </NavLink>

        <NavLink to={"/home/UserControler"} replace={true} style={style.option}>
          {({ isActive }) => (
            <Box
              sx={style.option}
              style={{
                backgroundColor: isActive
                  ? "rgba(43,45,66,0.4)"
                  : "transparent",
                color: isActive ? "#fff" : "inherit",
              }}
            >
              <LocalActivityIcon />
              Contorle User
            </Box>
          )}
        </NavLink>

        <NavLink to={"/home/Leaderboard"} replace={true} style={style.option}>
          {({ isActive }) => (
            <Box
              sx={style.option}
              style={{
                backgroundColor: isActive
                  ? "rgba(43,45,66,0.4)"
                  : "transparent",
                color: isActive ? "#fff" : "inherit",
              }}
            >
              <PersonRemoveIcon /> Leaderboard
            </Box>
          )}
        </NavLink>

        <NavLink to={"/home/PlaneEdite"} replace={true} style={style.option}>
          {({ isActive }) => (
            <Box
              sx={style.option}
              style={{
                backgroundColor: isActive
                  ? "rgba(43,45,66,0.4)"
                  : "transparent",
                color: isActive ? "#fff" : "inherit",
              }}
            >
              <BorderColorIcon /> Edit Plan
            </Box>
          )}
        </NavLink>
        <NavLink to={"/home/Banner"} replace={true} style={style.option}>
          {({ isActive }) => (
            <Box
              sx={style.option}
              style={{
                backgroundColor: isActive
                  ? "rgba(43,45,66,0.4)"
                  : "transparent",
                color: isActive ? "#fff" : "inherit",
              }}
            >
              <PanoramaIcon /> Edit Banner
            </Box>
          )}
        </NavLink>
        <NavLink to={"/home/VideoControle"} replace={true} style={style.option}>
          {({ isActive }) => (
            <Box
              sx={style.option}
              style={{
                backgroundColor: isActive
                  ? "rgba(43,45,66,0.4)"
                  : "transparent",
                color: isActive ? "#fff" : "inherit",
              }}
            >
              <OndemandVideoIcon /> Edit Video
            </Box>
          )}
        </NavLink>
      </Box>
    </Box>
  );
};

export default SideBar;

// Styles
const style = {
  option: {
    color: "inherit",
    textDecoration: "none",
    padding: 1.2,
    fontSize: 14,
    borderRadius: 2,
    width: "95%",
    display: "flex",
    cursor: "pointer",
    alignItems: "center",

    "&:hover": {
      backgroundColor: "rgba(43,45,66,0.4)",
      color: "#fff",
    },
    gap: 1,
  },
};
