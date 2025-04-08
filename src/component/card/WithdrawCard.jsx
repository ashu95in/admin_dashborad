import React from "react";
import { Grid2, Typography, Avatar, Box, Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { formatDate } from "../../utils/service";
const WithdrawCard = ({ data }) => {
  // data={{name:"ashu",plan:'free',balance:500,status:"Active",date:'5/12/2025'}}
  // const formatDate = (isoString) => {
  //   const date = new Date(isoString);
  //   const day = String(date.getDate()).padStart(2, "0");
  //   const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  //   const year = date.getFullYear();
  //   return `${day}-${month}-${year}`;
  // };
  return (
    <Grid2 sx={{ width: "100%", gap: 11, justifyContent: "center" }} container>
      <Grid2 size={0} sx={[style.text, { display: "flex", gap: 1 }]}>
        {/*       
      <Avatar
          sx={{
            width: 50,
            height: 50,
            borderRadius: 15,
            
            bgcolor: "grey",
          }}
        >
          {}
        </Avatar>
        <Box sx={{py:1.5,fontWeight:500}} >{data?.name}</Box> */}
      </Grid2>
      <Grid2 size={2} sx={[style.text, { py: 1.5 }]}>
        {data?.widrowlType}
      </Grid2>
      <Grid2 size={1} sx={[style.text, { py: 1.5 }]}>
        {data?.amount}
      </Grid2>
      <Grid2 size={2} sx={[style.text, { py: 1.5 }]}>
        {formatDate(data.createdAt)}
      </Grid2>
      <Grid2 size={1} sx={[style.text, { py: 1.5 }]}>
        <Typography
          sx={{
            fontFamily: "poppins",
            borderRadius: 5,
            fontSize: 14,
            textAlign: "center",
            // backgroundColor:
            //   data?.status === "completed"
            //     ? "rgba(4, 245, 4, 0.3)"
            //     : data?.status === "pending" // ? "rgba(4, 245, 4, 0.3)"
            //     ? //: "rgba(255, 0, 0, 0.31)",
            //       "grey"
            //     : data?.status === "failed"
            //     ? "rgba(255, 0, 0, 0.31)"
            //     : "grey.200",
            // //          ? "rgba(6, 78, 6, 0.97)"
            // color:
            //   //  : "rgba(145, 16, 16, 0.94)",
            //   data?.status === "completed"
            //     ? "rgba(6, 78, 6, 0.97)"
            //     : data?.status === "pending"
            //     ? "#fff"
            //     : data?.status === "failed"
            //     ? "rgba(145, 16, 16, 0.94)"
            //     : "text.primary",
            
          }}
        >
          {data?.status}
        </Typography>
      </Grid2>
      <Grid2
        size={1}
        sx={[
          style.text,
          { py: 1.5, justifyContent: "center", display: "flex" },
        ]}
      >
        <NavLink
          to={`/home/WithdrawReq/user/${data?._id}/${data?.amount}/${data?.status}/${data?.widrowlType}/${data?.upiId}/${data?.createdAt}/${data?.bankName}/${data?.accountNumber}/${data?.ifscCode}/`}
        >
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

export default WithdrawCard;

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
