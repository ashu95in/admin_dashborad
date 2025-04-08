import React from "react";
import { useParams } from "react-router-dom";
import PrimaryInfoCard from "../../../component/card/userInfoCard/PrimaryInfoCard";
import TotalBala from "../../../component/card/userInfoCard/TotalBala";
import { Grid2 ,Box} from "@mui/material";
import WithdrawActionCard from "../../../component/card/WithdrawCard/WithdrawActionCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from "react-router-dom";


const UserReqDet = () => {
  const { userId,amount,status,widrowlType,upiId,createdAt,bankName,accountNumber,ifscCode } = useParams();
  // console.log(userId,amount,status,widrowlType,upiId,createdAt,bankName,accountNumber,ifscCode)
  return (
    <Grid2 container sx={{ width: "100%",justifyContent:'center' }}>
        
      <Grid2 size={10} container sx={{ justifyContent:'center',gap:0,      backgroundColor: "rgba(246, 246, 246, 0.71)",p:2 }}>
      <Grid2 size={1}   >
      <NavLink to={'/home/WithdrawReq'} >
      <ArrowBackIcon fontSize="large" />
      </NavLink>
        </Grid2>
        {/* <Grid2 size={6}   >
          <PrimaryInfoCard />
        </Grid2> */}
        <Grid2 size={11}>
          {/* <TotalBala /> */}
        </Grid2>
        <Grid2 size={11}>
          <WithdrawActionCard  data={{id:userId,amount:amount,status:status,widrowlType:widrowlType,upiId:upiId,createdAt:createdAt,bankName:bankName,accountNumber:accountNumber,ifscCode:ifscCode}}  />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default UserReqDet;
