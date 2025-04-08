import React from 'react'
import { Grid2 } from '@mui/material'
const Transactioncard = ({info,index=0}) => {
  return (
    <Grid2 container  sx={{borderRadius:0,borderColor:'grey',borderRadius:1,marginTop:.2,boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}} > 
    <Grid2 size={2}  sx={style.center_item}  >{index}</Grid2>
    <Grid2 size={2}sx={style.center_item} >{info?.amount}</Grid2>
    <Grid2 size={3} sx={style.center_item} >{info?.status}</Grid2>
    <Grid2 size={2} sx={style.center_item} >{info?.date}</Grid2>
    </Grid2>
  )
}

export default Transactioncard

const style = {
    center_item:{
        display:'flex',
        justifyContent:'center',
        p:.8    ,
        fontSize:14,fontFamily:'poppins'
    
    }
}