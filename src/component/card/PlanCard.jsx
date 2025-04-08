import React, { useState } from "react";
import { Box, Button, useScrollTrigger } from "@mui/material";
import ConfimAction from "../msgBox/actionBox/ConfimAction";
import { NavLink } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../api/var";
import { deletePlan } from "../../api/PlanApi";
import useAuthStore from "../../store/adminAuth";
const PlanCard = ({data}) => {
  const [showDilog,setDilog] = useState(false);
  const {token} = useAuthStore()
  const { mutate: deleteItem, isLoading }=  useMutation({
    mutationFn: ()=>deletePlan(token,data?._id),
    onSuccess: () => {
      queryClient.invalidateQueries(["items"]); // Refresh items after delete
    },
  });


  return (
    <>
    <Box
      sx={{
        width: "100%",
        height: 140,
        borderRadius: 2,
        p: 2,
        background: "grey",
        display: "flex",
        boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
        backgroundColor: data?.isDeleted?"rgba(15, 15, 15, 0.11)":"rgba(246, 246, 246, 0.71)",

      }}
    >
      <Box
        sx={{
          px: 1,
          width: "80%",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontSize: 15,
          fontFamily: "poppoins",
          gap: 0.5,
        }}
      >
        <Box sx={{ height: 20, fontSize: 17 }}>{data?.title}</Box>
        <Box sx={{ height: 20 }}>Rs {data?.price}</Box>
        <Box sx={{ height: 20 }}>{data?._id}</Box>
      </Box>
      <Box
        sx={{
          width: "20%",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Button
          sx={{ fontSize: 12, backgroundColor: "error.main",width:50 }}
          variant="contained"
          size="small"
          onClick={()=>setDilog(true)}
        >
          Delete
        </Button>                           
        <NavLink to={`/home/PlaneEdite/Plan/${data._id}/${data.title}/${data.taskPrice}/${data.price}/${data.taskCounts}`}  >
        <Button sx={{ fontSize: 12 }} variant="contained" size="small">
          Edite
        </Button>
        </NavLink>
      </Box>
    
    </Box>
      {showDilog?<Box sx={{position:'absolute',top:"25%",left:"45%",zIndex:1}}   >
      <ConfimAction  state={setDilog}  deletfn={deleteItem}  />
    </Box>:null}
</>
  );
};

export default PlanCard;
