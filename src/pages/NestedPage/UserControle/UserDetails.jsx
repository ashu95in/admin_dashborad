import React from "react";
import UserInfoCard from "../../../component/card/userInfoCard/UserinfoCard";
import { Box, Grid2, Typography } from "@mui/material";
import PrimaryInfoCard from "../../../component/card/userInfoCard/PrimaryInfoCard";
import UserWallet from "../../../component/card/UserWallet";
import UserPlanlist from "../../../component/card/UserPlanlist";
import Transactioncard from "../../../component/card/Transactioncard";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getUserData } from "../../../api/userConroleApi";
import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../../../store/adminAuth";
const UserDetails = ({userId}) => {
  const {token}  = useAuthStore();
  const {data,isloading}= useQuery({
    queryKey:['userdata',userId],
    queryFn:()=>getUserData(token,userId),
  

  })
    console.log(data?.wdrawl_req)
  return (
    <Box
      sx={{
        p: 1,
        width: "85%",
        height: 450,
        borderRadius: 2,
        // backgroundColor: "rgba(246, 246, 246, 0.71)",
        // boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
    >
      <Grid2
        container
        sx={{ backgroundColor: "rgba(246, 246, 246, 0.71)", p: 1 }}
      >
        <Grid2
          size={1}
          
        >
      <NavLink to={'/home/UserControler'} >
      <ArrowBackIcon fontSize="large" />
      </NavLink>
        </Grid2>
        <Grid2
          size={5}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <PrimaryInfoCard info={data?.profile}  />
        </Grid2>
        <Grid2 size={6} >
          <UserWallet  info={data?.wallet} />
        </Grid2>
        <Grid2 size={5} sx={{border:1,borderRadius:2,}} > 
          <UserPlanlist   info={data?.plan}  />
        </Grid2>
        <Grid2 size={7} sx={{  p: 1 }}>
          <Box
            sx={{
              
              borderRadius: 5,
              p: 1,
              height: 300, // Set a fixed height
              overflowY: "auto", // Enable vertical scrolling
              scrollbarWidth: "thin", // For Firefox
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#555",
              },
            }}
          >
            <Typography variant="h6">
              All transactions - Total earning: $0
            </Typography>
            {data?.wdrawl_req.map((item, index) => (
              <Transactioncard info={item}  index={index+1}  key={index} />
            ))}
          </Box>
        </Grid2>
    
      </Grid2>
    </Box>
  );
};

export default UserDetails;
