import React from "react";
import { Box, Typography, TextField, Button, Grid2 } from "@mui/material";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
const UpdateConfirm = ({ state = () => {},confirm_func }) => {
  function save() {
    confirm_func()        //function call after user confirm
    
    close();
  }
  function close() {
    state(false);
  }
  return (
    <Box
      sx={{
        
        width: 300,
        height: 150,
        bgcolor: "hsla(0, 0.00%, 95.30%, 0.99)",
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
        
      }}
    >
      <Grid2 container sx={{ width: "100%" }}>
        {/* <Grid2 size={12} sx={{justifyContent:'center',display:"flex"}}>
      <ErrorOutlineOutlinedIcon sx={{fontSize:100,color:'error.main',fontWeight:100}} />
      </Grid2> */}
        <Grid2 size={12} sx={{ py: 0}}>
          <Typography
            variant="h6"
            sx={{ fontFamilyv: "poppins", textAlign: "center" }}
          >
            Are you sure
          </Typography>
        </Grid2>
        <Grid2 size={12} sx={{py:2}} >
          <Typography
            variant="body1"
            sx={{
              fontFamilyv: "poppins",
              textAlign: "center",
              color: "grey",
              fontSize: 13,
            }}
          >
            You will not able to recover this
          </Typography>
        </Grid2>
        <Grid2
          size={12}
          sx={{ justifyContent: "center", display: "flex", gap: 1 }}
        >
          <Button
            sx={{
              backgroundColor: "grey",
              width: 100,
              fontWeight: 500,
              color: "white",
              fontSize: 13,
              textTransform: "none",
            }}
            onClick={save}
            size="small"
          >
            Cancel
          </Button>
          <Button
            sx={{
              backgroundColor: "success.light",
              width: 100,
              fontWeight: 500,
              color: "white",
              fontSize: 13,
              textTransform: "none",
            }}
            size="small"
            onClick={save}
        
          >
            Confirm
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default UpdateConfirm;
