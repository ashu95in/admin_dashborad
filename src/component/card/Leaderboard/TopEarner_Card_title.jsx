import React from "react";
import { Box, TextField, Grid2, Avatar, Typography } from "@mui/material";
export const TopEarner_Card_title = () => {
  return (
    <Grid2
      container
      sx={{
        boxShadow: 1,
        width: "90%",
        p: 1,
        borderRadius: 1,
        boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
        backgroundColor: "rgba(246, 246, 246, 0.71)",
        backgroundColor: "rgba(231, 231, 240, 0.89)",
        marginTop:.2,
        px:1
      }}
    >
      <Grid2
        size={2}
        sx={{
          display: "flex",
          justifyContent: "center",
         fontWeight:600

        }}
      >
        Rank
      </Grid2>
      <Grid2 size={4} sx={[style.center_item,{justifyContent:'start',px:2}]}>
        User
      </Grid2>
      <Grid2 size={3} sx={style.center_item}>
        Point
      </Grid2>
      <Grid2 size={3} sx={style.center_item}>
        
      </Grid2>
    </Grid2>
  );
};

const style = {
  center_item: {
    justifyContent: "center",
    display: "flex",
    fontWeight:500,
    
  },
};
