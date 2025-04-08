import React from "react";
import { Grid2, Typography } from "@mui/material";
import FakeUserForm from "./FakeUserForm";
const CreatFakeUser = ({info}) => {
  return (
    <Grid2
      container
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
        backgroundColor: "rgba(246, 246, 246, 0.71)",
      }}
    >
      
        <Grid2 size={12} >
        <FakeUserForm info={info} />
        </Grid2>
    </Grid2>
  );
};

export default CreatFakeUser;
