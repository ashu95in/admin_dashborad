import { Box, TextField, InputAdornment, Skeleton } from "@mui/material";
import User_avtar from "../component/user_avtar";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import HistoryIcon from "@mui/icons-material/History";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    
    <Box
      sx={{

        width: 250,
        height: "100vh",
        display: {sm:"flex",xs:'none'},
        flexDirection: "column",
        paddingTop: 1,
        bgcolor: "primary.light",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <User_avtar img="A" />
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
        <Box sx={style.option}><SpaceDashboardIcon /> Dashboard</Box>
        <Box sx={style.option}><HistoryIcon />User login history</Box>
        <Box sx={style.option}><LocalActivityIcon />User activity</Box>
        <Box sx={style.option}><PersonRemoveIcon /> Delete User</Box>
        <Box sx={style.option}><BorderColorIcon /> Create Plan</Box>
      </Box>
    </Box>
  );
};

export default SideBar;

// Styles
const style = {
  option: {
    padding: 2,
    fontSize: 14,
    // border:1,
    // borderRadius:5,
    width: "100%",
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "primary.main",
      color: "#fff",
    },
    gap: 1,
  },
};
