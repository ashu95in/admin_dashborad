import { Box, TextField, InputAdornment, Skeleton,Typography } from "@mui/material";
import SideBar from '../component/SideBar';
import { Routes, Route ,Outlet } from "react-router-dom";
const Homepage = () => {

  return (
    <Box sx={{display:'flex',height:"100vh"}} >
      <Box sx={{height:"100vh",position:"sticky",top:0}} > 
      <SideBar/></Box>
      <Box sx={{flexGrow:1,height:"100vh",overflowY:'auto'}} >
        <Outlet/>
        </Box>
 
    </Box>
  );
};

export default Homepage;

// // Styles
// const style = {
//   container: {
//     bgcolor
//   },
  
// };
