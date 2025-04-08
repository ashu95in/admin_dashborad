import React from "react";
import { Routes, Route, Outlet, useParams } from "react-router-dom";
import { Box, Typography,Button } from "@mui/material";
const Index = () => {
  const { userId } = useParams();
  return (
    <Box sx={style.container}>
      <Box sx={style.hero_section}>
        <Box sx={{ width: "100%", padding: 1,}}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins",
              color: "rgba(43,45,66,0.8)",
              marginTop: 6,
              marginBottom: 2,
            }}
          >
            Video Controle {userId ? `/${userId}` : null}
          </Typography>
     
        </Box>

        <Box sx={{ width: "100%", p: 0.5 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Index;

const style = {
  container: {
    bgcolor: "background.default",
    marginTop: 0,
    display: "flex",
    flexDirection: "row",
  },
  hero_section: {
    bgcolor: "background.default", // ✅ Fixed typo from "backgourd.default"
    padding: { md: 1, xs: 0 },
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
};
