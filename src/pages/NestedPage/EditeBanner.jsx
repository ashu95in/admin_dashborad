import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, useParams } from "react-router-dom";
import { Box, Typography, Grid2,Button } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DeleteIcon from '@mui/icons-material/Delete';
import ImageModal from "../../component/ImageModal";
import { useQuery } from "@tanstack/react-query";
import { getBanner } from "../../api/bannerApi";
import useAuthStore from "../../store/adminAuth";
import Banner from "../../component/Banner";

const EditeBanner = () => {
  const { id } = useParams();
  
  const {token}  = useAuthStore()
  const {data,isloading}= useQuery({
    queryKey:['getbanner'],
    queryFn:()=>getBanner(token)
    
  })
  const [modal,setModal] = useState();

  useEffect(()=>{
      console.log(data?.payload?.planData)
  },[data])
  return (
    <Box sx={style.container}>
      <Box sx={style.hero_section}>
        <Box sx={{ width: "100%", padding: 1 }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins",
              color: "rgba(43,45,66,0.8)",
              marginTop: 6,
              marginBottom: 2,
            }}
          >
            Banner edit {id ? `/${id}` : null}
          </Typography>
        </Box>
        <Grid2 container sx={{ width: "100%" }}>
          <Grid2
            size={4}
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
           
              sx={{
                height: 120,
                border: 1,
                borderRadius: 2,
                borderStyle: "dotted",
                p: 4,
                display: "flex",
                justifyContent: "center",
                bgcolor: "rgba(16, 34, 235, 0.19)",
                width: "80%",
                transition: "all 0.3s ease-in-out", // Smooth transition
                "&:hover": {
                  borderColor: "blue", // Change border color
                  borderStyle: "solid", // Change border style
                  bgcolor: "rgba(16, 34, 235, 0.3)", // Slightly darker background on hover
                  transform: "scale(1.05)", // Slight zoom effect
                  cursor: "pointer", // Change cursor on hover
                },
              }}
            >
              {/* <AddAPhotoIcon sx={{ fontSize: 50, textAlign: "center" }} /> */}
              <ImageModal/>
            </Box>
          </Grid2>
          {data?.payload?.planData?.map((item, index) => (
            <Grid2
              key={index}
              size={4}
              sx={{
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                p: 1,
              }}
            >
              <Banner data={item} />
            </Grid2>
          ))}
        </Grid2>

      </Box>
      {/* {false?<Box sx={{position:'absolute',width:"80%",height:450,border:1,top:"15%",left:"17%",borderRadius:5,bgcolor:'background.default'}} >

      </Box>:null} */}
        
    </Box>
  );
};

export default EditeBanner;

const style = {
  container: {
    bgcolor: "background.default",
    marginTop: 0,
    display: "flex",
    flexDirection: "row",
  },
  hero_section: {
    bgcolor: "background.default", // ✅ Fixed typo from "backgourd.default"
    padding: { md: 1, xs: 0 },
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
};
