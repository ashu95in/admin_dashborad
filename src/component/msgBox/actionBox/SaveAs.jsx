import React, { useState } from 'react'
import {Box,Typography,TextField,Button,Grid2} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const SaveAs = ({state=()=>{},update}) => {
    const [reason,setReason] = useState()
  async function save (){
     await update({status:'failed',reason:reason})
    close()
  }
  function close(){
    state(false)
  }
  return (
    <Box sx={{boxShadow:2,width:350,height:200,bgcolor:'hsla(0, 0.00%, 95.30%, 0.98)',borderRadius:2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:1}}  >
        <Grid2  container  sx={{width:'100%'}}>
        <Grid2 sx={{px:2,py:.5}} size={4}    >
          <Button onClick={close} >

          <ArrowBackIcon/>
          </Button></Grid2>
        <Grid2 size={6} sx={{py:2}} >Enter Resoan</Grid2>
        </Grid2>
        <TextField   onChange={(e)=>setReason(e.target.value)}  />
        <Button onClick={save}   sx={{backgroundColor:'error.main',width:150,fontWeight:600,color:'#fff' }}    >reject</Button>
    </Box>
  )
}

export default SaveAs