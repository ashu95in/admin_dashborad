import React from "react";
import { useParams } from "react-router-dom";
import { Grid2 ,Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from "react-router-dom";
import PlanForm from "../../../component/card/PlanForm";

const Plandetail = () => {
  const { id,title,taskprice,p,task } = useParams();
  const data  = {
    title:title,
    task_price:taskprice,
    price:p,
    task:task
  }
 
 console.log(data)
 
  return (
    <Grid2 container sx={{ width: "100%",justifyContent:'center' }}>
      <Grid2 size={10} container sx={{ gap:0,      backgroundColor: "rgba(246, 246, 246, 0.71)",p:2,}}>
      <Grid2 size={1}   >
      <NavLink to={'/home/PlaneEdite/'} >
      <ArrowBackIcon fontSize="large" />
      </NavLink>
        </Grid2>
     
        <Grid2 size={10}>
          <PlanForm    data={data}  id={id}  />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Plandetail;
