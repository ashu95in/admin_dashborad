import React from "react";
import { Grid2 } from "@mui/material";
const TableHeadingv2 = () => {
  return (
    <Grid2
      container
      sx={{
        width: "100%",
        p: 1,
        gap: 4.5,
        backgroundColor: "rgba(231, 231, 240, 0.89)",
        // boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
        borderRadius: 1,
        justifyContent:'center'
      }}
    >
      <Grid2 size={2} sx={style.text}>
        Client
      </Grid2>
      <Grid2 size={2} sx={style.text}>
        Phone number
      </Grid2>
      <Grid2 size={1} sx={[style.text,{textAlign:'center'}]}>
        balance
      </Grid2>
      <Grid2 size={2} sx={[style.text,{textAlign:'center'}]}>
        Type
      </Grid2>
      <Grid2 size={1} sx={[style.text,{textAlign:'center'}]}>
        Paid
      </Grid2>
      <Grid2 size={1} sx={style.text}>
        
      </Grid2>
    </Grid2>
  );
};

export default TableHeadingv2;

const style = {
  text: {
    fontWeight: 600,
    fontSize: 15,

  },
};
