import React from 'react'

import { Card, CardContent, CardActions, Typography, Avatar, Button, Box } from "@mui/material";
import { useParams } from 'react-router-dom';
const PrimaryInfoCard = ({info}) => {
    const {id}  = useParams()
  return (
    <Card sx={{ maxWidth: 300, p: 2, boxShadow:0,      borderRadius: 5,
        // boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
        backgroundColor: "rgba(246, 246, 246, 0.71)",

        }}>
    <Box display="flex" alignItems="center">
      <Avatar  sx={{ width: 80, height: 80, mr: 2 }} />
      <Box>
        <Typography variant="h6" fontWeight="bold" sx={{color:"#000"}} >
        {info?.name}
        </Typography>
        <Typography sx={{fontSize:13,fontFamily:'poppins'}}  color="grey">
          mail : {info?.email}
        </Typography>
        <Typography  color="grey" sx={{fontSize:13,fontFamily:'poppins'}} >
          Ph.No : {info?.ph_no}
        </Typography>      </Box>
    </Box>

    {/* <CardContent>
      <Typography variant="body2" color="text.secondary">
        This is a short bio or description about Ashu. Customize it as needed.
      </Typography>
    </CardContent> */}

  
  </Card>
);
  
}

export default PrimaryInfoCard