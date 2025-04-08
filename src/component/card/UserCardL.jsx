import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
const UserCardL = ({ data }) => {
  // data={{name:"ashu",plan:'free',balance:500,status:"Active",date:'5/12/2025'}}
  return (
    <Box sx={{ width: "100%", borderRadius: 1, p: 1, display: "flex" }}>
      <Box sx={{ display: "flex", gap: { sm: 2, xs: 0 }, width: "40%" }}>
        <Avatar
          sx={{
            width: 50,
            height: 50,
            borderRadius: 15,
            marginLeft: { sm: 4, xs: 0 },
            bgcolor: "grey",
          }}
        >
          {data.name[0]}
        </Avatar>
        <Box
          sx={{
            justifyContent: "center",
            fontSize: { sm: 15, xs: 12 },
            display: "flex",
            flexDirection: "column",
            fontWeight: 500,
            color: "rgb(34, 34, 34)",
            marginLeft: { sm: 0, xs: 1 },
          }}
        >
          <Box>{data?.name}</Box>
          <Box sx={{ fontSize: { sm: 13, xs: 10 }, color: "grey" }}>
            Plan : {data?.plan}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "60%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={[style.text_container, { display: { sm: "flex", xs: "none" } }]}
        >
          <Typography sx={[style.text]}>+91 7845784578</Typography>
        </Box>
        <Box sx={style.text_container}>
          <Typography sx={[style.text]}>₹ {data?.balance}</Typography>
        </Box>
        <Box sx={style.text_container}>
          <Typography
            sx={[
              style.text,
              {
                backgroundColor:
                  data?.status === "Active"
                    ? "rgba(4, 245, 4, 0.3)"
                    : "rgba(255, 0, 0, 0.31)",
                paddingX: { sm: 2, xs: 1 },
                borderRadius: 5,
                color:
                  data?.status === "Active"
                    ? "rgba(6, 78, 6, 0.97)"
                    : "rgba(145, 16, 16, 0.94)",
                fontWeight: 500,
              },
            ]}
          >
            {data?.status}
          </Typography>
        </Box>
        <Box sx={style.text_container}>
          <Typography sx={[style.text]}>{data?.date}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UserCardL;

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
    // fontWeight:550,
    fontSize: { sm: 15, xs: 12 },
    textAlign: "center",
    fontFamily: "poppins",
    color: "rgba(34, 34, 34, 0.9)",
  },
};
