import React, { useState } from "react";
import { Grid2, Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";
import { deleteVideo } from "../../api/videoApi";
import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../../store/adminAuth";
import ConfimAction from "../msgBox/actionBox/ConfimAction";
import Success_Msg from "../msgBox/Success_Msg";
const VideoCard = ({ video_info }) => {
  const { token } = useAuthStore();
  const [dilog, setDilog] = useState(false);
  const [success, setSuccess] = useState("");
  const { mutate: delete_item, isLoading } = useMutation({
    mutationFn: () => deleteVideo(token, video_info?.id),
    onSuccess: (data) => {
      if (data.success) {
        console.log("success");
        setSuccess("Deleted successfully !");
      }
      queryClient.invalidateQueries(["video_delete"]); // Refresh items after delete
    },
  });
  return (
    <>
      <Grid2
        container
        sx={{
          height: 120,
          borderRadius: 2,
          boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
          backgroundColor: "rgba(246, 246, 246, 0.71)",
        }}
      >
        <center>
          {" "}
          <Success_Msg msg={success} isShow={success} hideFunc={setSuccess} />
        </center>
        <Grid2
          size={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1,
          }}
        >
          <Box
            component="img"
            src={video_info?.image}
            alt="Preview"
            sx={{
              width: 200,
              height: 112,
              borderRadius: 2,

              //   objectFit: 'cover',
            }}
          />
        </Grid2>
        <Grid2
          size={5}
          sx={{
            //   border: 1,
            fontFamily: "poppins",
            fontSize: 14,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 0.2,
            p: 1,
          }}
        >
          <Box>{video_info?.title}</Box>
          <Box sx={{ fontSize: 11 }}>{video_info?.link}</Box>
        </Grid2>
        <Grid2
          size={2}
          sx={{
            gap: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink
            to={`/home/VideoControle/{vidid}/${encodeURIComponent(
              video_info?.link
            )}/${encodeURIComponent(video_info?.image)}/${video_info?.title}`}
          >
            {" "}
            <Button variant="outlined" sx={{ fontSize: 12 }}>
              Edite
            </Button>
          </NavLink>
          <Button
            onClick={() => setDilog(true)}
            variant="outlined"
            sx={{ fontSize: 12, color: "error.main" }}
            color="error.main"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Grid2>
      </Grid2>

      {dilog ? (
        <Box sx={{ position: "absolute", top: "25%", left: "45%", zIndex: 1 }}>
          <ConfimAction state={setDilog} deletfn={delete_item} />
        </Box>
      ) : null}
    </>
  );
};

export default VideoCard;
