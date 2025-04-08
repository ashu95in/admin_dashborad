import React from "react";
import { Grid2 } from "@mui/material";
const TableHeading = () => {
  return (
    <Grid2
      container
      sx={{
        width: "100%",
        p: 1,
        gap: 11,
        
        backgroundColor: "rgba(231, 231, 240, 0.89)",
        // boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
        borderRadius: 1,
        justifyContent:'center'
      }}
    >
      <Grid2 size={0} sx={style.text}>
        {/* Client */}
      </Grid2>
      <Grid2 size={2} sx={style.text}>
        Type
      </Grid2>
      <Grid2 size={1} sx={style.text}>
        Amount
      </Grid2>
      <Grid2 size={2} sx={style.text}>
        Requested date
      </Grid2>
      <Grid2 size={1} sx={style.text}>
        Status
      </Grid2>
      <Grid2 size={1} sx={style.text}>
        {/* Status */}
      </Grid2>
    </Grid2>
  );
};

export default TableHeading;

const style = {
  text: {
    fontWeight: 600,
    fontSize: 15,
    textAlign:'center'

  },
};
