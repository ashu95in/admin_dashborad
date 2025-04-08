import React, { useEffect, useState } from "react";
import { Grid2,Button } from "@mui/material";
import VideoCard from "../../../component/VideoControle/VideoCard";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { NavLink } from "react-router-dom";
import { getVideo } from "../../../api/videoApi";
import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../../../store/adminAuth";
const VideoList = () => {
const {token} = useAuthStore();
const [c_data,setC_data] = useState([])
const {data:videolist,isloading} = useQuery({
    queryKey:['video'],
    queryFn:()=>getVideo(1,token),
    
})


useEffect(()=>{
 setC_data(videolist)
},[videolist])
  return (
    <Grid2 container sx={{ gap: 1 }}>
        <Grid2 sx={{display:"flex",justifyContent:"end",px:5,alignItems:"center",gap:1}} size={12} >    Upload new video <NavLink to={"/home/VideoControle/new"} > <Button sx={{bgcolor:'primary.dark'}}   ><FileUploadIcon sx={{color:"#fff"}} /></Button></NavLink></Grid2>
      {c_data?.map((item, index) => (
        <Grid2 size={12} key={index}>
          <VideoCard video_info={item}  />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default VideoList;
