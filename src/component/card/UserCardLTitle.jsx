import React from "react";
import { Box, Typography } from "@mui/material";
const UserCardLTitle = ({ data }) => {
  return (
    <Box sx={{ width: "100%", borderRadius: 1, p: 2, display: "flex", backgroundColor: "rgba(231, 231, 240, 0.89)", }}>
      <Box sx={{ display: "flex", width: "40%"}}>
        <Box
          sx={{
            justifyContent: "center",
            fontSize: 15,
            display: "flex",
            flexDirection: "column",
            fontFamily:'poppins',
            marginLeft:{sm:5,xs:1},
            fontWeight:600
          }}
        >
          Client
          
        </Box>
      </Box>
      <Box
        sx={{
          width: "60%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box sx={[style.text_container,{display:{sm:'block',xs:'none'}}]}>
          <Typography sx={[style.text,{fontWeight:600}]}>Ph No.</Typography>
        </Box>
        <Box sx={style.text_container}>
          <Typography sx={[style.text,{fontWeight:600}]}>Balance</Typography>
        </Box>
        <Box sx={style.text_container}>
          <Typography
            sx={[
              style.text,
              {
                paddingX: 2,
                borderRadius: 5,
                fontWeight:600
              },
            ]}
          >
            Status
          </Typography>
        </Box>
        <Box sx={style.text_container}>
          <Typography sx={[style.text]}>Date</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UserCardLTitle;

const style = {
  text_container: {
    width: "25%",
    fontSize: 12,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight:600,
    fontSize: 15,
    textAlign: "center",
    fontFamily: "poppins",
  },
};
