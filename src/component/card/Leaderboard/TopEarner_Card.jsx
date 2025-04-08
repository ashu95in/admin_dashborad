import React, { useState } from "react";
import { Box, TextField, Grid2, Avatar, Typography,Button } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import { delete_user } from "../../../api/leaderboardApi";
import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../../../store/adminAuth";
import DeleteIcon from '@mui/icons-material/Delete';
import ConfimAction from "../../msgBox/actionBox/ConfimAction";
import Success_Msg from "../../msgBox/Success_Msg";

export const TopEarner_Card = ({data,userinfo,setEdite}) => {
  const [showDilog,setShowDilog]  =useState();
  const {token} = useAuthStore()
  const [success,setSuccess]= useState()
  const { mutate: deleteItem, isLoading }=  useMutation({
    mutationFn: ()=>delete_user(token,userinfo?._id),
    mutationKey:'delete_user',
    onSuccess: () => {
      if(true){
      setSuccess("Item deleted")
    }
      queryClient.invalidateQueries(["delete_user"]); // Refresh items after delete
    },
  });
  function handleEdite(){
    setEdite(userinfo)
  }
 
  return (<>
  <center> <Success_Msg msg={success}  isShow={success} hideFunc={setSuccess}  /></center>
    <Grid2
      container
      sx={{
        boxShadow: 1,
        width: "90%",
        p: 1,
        borderRadius: 1,
        boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
        backgroundColor: "rgba(246, 246, 246, 0.71)",
        marginTop:.2
      }}
    >
      <Grid2
        size={2}
        sx={style.center_item}
      >
        {data}
      </Grid2>
      <Grid2 size={4} sx={[style.center_item,{justifyContent:"start"}]}>
        <Box sx={{display:"flex",justifyContent:'start',alignItems:'center'}} >
          <Avatar>{userinfo?.name[0]}</Avatar>
          <Typography sx={{fontSize:14,fontFamily:'poppins',marginLeft:.5}}>{userinfo?.name}</Typography>
        </Box>
      </Grid2>
      <Grid2 size={3} sx={style.center_item}>
        {userinfo?.balance}
      </Grid2>
      <Grid2 size={1} sx={[style.center_item]}>
      <Button  disabled={!userinfo.isCreated}  sx={{fontSize:12,fontWeight:600,fontFamily:'poppins'}} size="small" onClick={handleEdite}  ><CreateIcon/></Button>
      </Grid2>
      <Grid2 size={1} sx={[style.center_item]}>
      <Button  disabled={!userinfo.isCreated}  sx={{fontSize:12,fontWeight:600,fontFamily:'poppins',color:'error.light'}} size="small" onClick={()=>setShowDilog(true)}  ><DeleteIcon/></Button>
      </Grid2>
     
    </Grid2>
    {showDilog?<Box sx={{position:'absolute',top:"25%",left:"45%",zIndex:1}}   >
            <ConfimAction  state={setShowDilog}  deletfn={deleteItem}  />
          </Box>:null}
    </>
  );
};

const style = {
  center_item: {
    justifyContent: "center",
    display: "flex",
    
    alignItems:'center'
  },
};
