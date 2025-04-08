import React from "react";
import { Box, Avatar } from "@mui/material";
const UserSmallCard = () => {
  return (
    <Box
      sx={{
        border:1,
        maxWidth:360,
        borderRadius: 2,
        height: 100,
        p: 1,
        boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
        backgroundColor: "rgba(246, 246, 246, 0.71)",
        display: "flex",
        alignItems:"center"
      }}
    >
      <Avatar sx={{ width: 70, height: 70 }} />
      <Box
        sx={{
          
          display: "flex",
          flexDirection: "column",
          fontSize: 13,
          justifyContent: "center",
          px:1
        }}
      >
        <Box sx={{px:0,fontSize:15}}>Ashu_gamer</Box>
        <Box>+91 4887458745</Box>
      </Box>
    </Box>
  );
};

export default UserSmallCard;
