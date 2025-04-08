import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid2,
} from "@mui/material";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";
import { updateVideo,createVideo } from "../../api/videoApi";
import useAuthStore from "../../store/adminAuth";
import { useMutation } from "@tanstack/react-query";
import UpdateConfirm from "../msgBox/actionBox/UpdateConfirm";
import Success_Msg from "../msgBox/Success_Msg";
const VideoUploader = ({data}) => {

  const {token} = useAuthStore()
  const [showDialog,setShowDialog] = useState(false);
  const [success,setSuccess] = useState('');
  const [video, setVideo] = useState({
    title: data?.title?data?.title:"",
    link: data?.v_link?data?.v_link:"",
    thumbnail: data?.i_link?data?.i_link:null,
    thumbnailPreview: data?.i_link?data?.i_link:null,
  });

  const handleChange = (key, value) => {
    setVideo({ ...video, [key]: value });
  };
  console.log(data)
  const { mutate: update, isPending, isError } = useMutation({
    mutationFn: () =>data?.id=='new'?createVideo(data?.id,video,token): updateVideo(data?.id, video,token),
    mutationKey:[["video",data?.id]],
    onSuccess: (data) => {
      setSuccess("Success!")
      console.log(data)
      queryClient.invalidateQueries(["video",data?.id]);
      
    },
  });

  const handleThumbnailUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setVideo({ ...video, thumbnail: file, thumbnailPreview: preview });
    }
  };

  return (
    <Grid2
      container
      sx={{
        justifyContent: "center",
        display: "flex",
        maxWidth: "50%",
        mx: "auto",
        gap: 1,
        px: { md: 6, xs: 1 },
        py: 3,
        borderRadius: 2,
        backgroundColor: "rgba(218, 217, 217, 0.42)",
      }}
    >
      <center> <Success_Msg msg={success}  isShow={success} hideFunc={setSuccess}  /></center>
      <Grid2 size={12}>
        <NavLink to={"/home/VideoControle"}>
          <ArrowBackIcon fontSize="large" />
        </NavLink>
      </Grid2>
      <Grid2 size={10} sx={{ border: 0 }}>
        {video.thumbnailPreview ? (
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="150"
              image={video.thumbnailPreview}
              alt="Video thumbnail"
            />
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600}>
                {video.title || "No Title"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {video.link || "No Link Provided"}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <Box
            sx={{
              backgroundColor: "rgba(7, 7, 7, 0.11)",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              height: 150,
              alignItems: "center",
            }}
          >
            <SmartDisplayIcon sx={{ fontSize: 50 }} />
          </Box>
        )}
      </Grid2>
      <Grid2
        size={10}
        sx={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        <Button component="label" variant="outlined" fullWidth sx={{ mb: 2 }}>
          Upload Thumbnail
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleThumbnailUpload}
          />
        </Button>
        <TextField
          fullWidth
          label="Video Title"
          value={video.title}
          onChange={(e) => handleChange("title", e.target.value)}
          size="small"
        />

        <TextField
          fullWidth
          label="YouTube Link"
          value={video.link}
          onChange={(e) => handleChange("link", e.target.value)}
          size="small"
        />
        <Button  onClick={()=>setShowDialog(true)}   component="label" variant="contained" fullWidth sx={{ mb: 2 }}>
          Upload
        </Button>
      </Grid2>
      {showDialog && (
        <Box sx={{ position: "absolute", top: "35%", left: "46%", zIndex: 1 }}>
          <UpdateConfirm state={setShowDialog} confirm_func={update} />
        </Box>
      )}
    </Grid2>
  );
};

export default VideoUploader;
