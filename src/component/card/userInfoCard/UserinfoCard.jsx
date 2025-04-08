import React from "react";
import {Box } from "@mui/material";


const userData = {
  name: "John Doe",
  plan: "Premium",
  number: "+1 234 567 890",
  downloads: 25,
  paymentRequests: 3,
};

const UserInfoCard = () => {
  const handleDelete = () => {
    console.log("User deleted:", userData.name);
  };

  return (
    <Box sx={{border:1,width:"100%",borderRadius:2,height:500,p:1}}>

    </Box>
  );
};

export default UserInfoCard;
