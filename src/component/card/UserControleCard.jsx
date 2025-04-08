import React from "react";
import { Grid2, Typography, Avatar, Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
const UserControleCard = ({ data }) => {
  // data={{name:"ashu",plan:'free',balance:500,status:"Active",date:'5/12/2025'}}

  return (
    <Grid2 sx={{ width: "100%", gap: 4.5, justifyContent: "center" }} container>
      <Grid2 size={2} sx={[style.text, { display: "flex", gap: 1 }]}>
        <Avatar
          sx={{
            width: 50,
            height: 50,
            borderRadius: 15,

            bgcolor: "grey",
          }}
        >
          {data?.name[0]}
        </Avatar>
        <Box sx={{ py: 1.5, fontWeight: 500 }}>{data?.name}</Box>
      </Grid2>
      <Grid2 size={2} sx={[style.text, { py: 1.5 }]}>
        {data?.phone_number}
      </Grid2>
      <Grid2 size={1} sx={[style.text, { py: 1.5, textAlign: "center" }]}>
        {data?.balance}
      </Grid2>
      <Grid2 size={2} sx={[style.text, { py: 1.5, textAlign: "center" }]}>
        {data?.type}
      </Grid2>
      <Grid2
        size={1}
        sx={[
          style.text,
          { display: "flex", justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Box
          sx={{
       
            px: 2,
            backgroundColor:
              data?.paid === "true"
                ? "rgba(4, 245, 4, 0.3)"
                : "rgba(255, 0, 0, 0.31)",
            paddingX: { sm: 2, xs: 1 },
            borderRadius: 5,
            color:
              data?.paid === "true"
                ? "rgba(6, 78, 6, 0.97)"
                : "rgba(145, 16, 16, 0.94)",
          }}
        >
          {data?.paid}
        </Box>
      </Grid2>
      <Grid2 size={1} sx={[style.text, { py: 1.5, display: "flex" }]}>
        <NavLink to={`/home/UserControler/user/${data?._id}`}>
          <Box
            sx={{ fontFamily: "poppins", fontSize: 13, margin: "auto" }}
            variant="outlined"
            size="small"
          >
            View
          </Box>
        </NavLink>
      </Grid2>
    </Grid2>
  );
};

export default UserControleCard;

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

    fontFamily: "poppins",
    color: "rgba(34, 34, 34, 0.9)",
  },
};
