import React, { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  Button,
  TextField,
  Grid2,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useMutation } from "@tanstack/react-query";
import { createBanner } from "../api/bannerApi";
import useAuthStore from "../store/adminAuth";
import UpdateConfirm from "./msgBox/actionBox/UpdateConfirm";
import Cropper from "react-easy-crop";
import Success_Msg from "./msgBox/Success_Msg";
const ImageModal = () => {
  const [open, setOpen] = useState(false);
  const { token } = useAuthStore();
  const [showDialog, setShowDialog] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [imageForCrop, setImageForCrop] = useState(null);
  const [success,setSuccess] = useState()
  const [from, setFrom] = useState({
    title: "banner img",
    description: "addded by admin",
    image: "",
    link: "",
  });
  // Open & Close Modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (value, key) => {
    setFrom({ ...from, [key]: value });
  };
  const {
    mutate: update,
    isPending,
    isError,
  } = useMutation({
    mutationFn: () => createBanner(from, token),
    mutationKey: "banner",
    onSuccess: () => {
      setSuccess("image Uploaded")
      handleClose();
   
      queryClient.invalidateQueries(["banner"]);
   
    },
  });

  // Handle Image Upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageForCrop(reader.result); // base64 image for cropper
      };
      reader.readAsDataURL(file);
    }
  };

  async function handleCreate() {
    await getCroppedImage(); // Ensure crop completes
    update(); // trigger mutation
  }
  const getCroppedImage = () => {
    return new Promise((resolve) => {
      const image = new Image();
      image.src = imageForCrop;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const { width, height, x, y } = croppedAreaPixels;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(image, x, y, width, height, 0, 0, width, height);
        canvas.toBlob((blob) => {
          const croppedUrl = URL.createObjectURL(blob);
          handleChange(croppedUrl, "image"); // preview
          from.imageBlob = blob; // for FormData
          resolve();
        }, "image/jpeg");
      };
    });
  };

  return (
    <>
      {/* Clickable Box to Open Modal */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",

          alignItems: "center",
        }}
        onClick={handleOpen}
      >
        <AddAPhotoIcon sx={{ fontSize: 35 }} />
      </Box>

      <center> <Success_Msg msg={success}  isShow={success} hideFunc={setSuccess}  /></center>

      {/* Modal */}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
        <Grid2
          container
          sx={{
            position: "absolute",
            top: "50%",
            left: "55%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            bgcolor: "white",
            boxShadow: 24,
            p: 3,
            borderRadius: 2,
            textAlign: "center",
            maxHeight: 450,
            bgcolor: "background.default",
          }}
        >
          <Grid2 size={12}>
            <Typography id="modal-title" variant="h6" sx={{ mb: 2 }}>
              Upload an Image
            </Typography>
          </Grid2>
          {/* File Input */}

          {/* Display Image if Uploaded */}

          {/* {from.image && (
     <Grid2 size={12}>
            <Box
              component="img"
              src={from.image}
              alt="Uploaded Preview"
              sx={{ width: "100%", borderRadius: 2, mt: 2,height:250 }}
            />
            </Grid2>
            
          )} */}
            <Grid2 size={12} >
          {imageForCrop && (
            <Box sx={{ position: "relative", width: "100%", height: 250 }}>
              <Cropper
                image={imageForCrop}
                crop={crop}
                zoom={zoom}
                aspect={16 / 6}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={(croppedArea, croppedPixels) =>
                  setCroppedAreaPixels(croppedPixels)
                }
                
              />
            </Box>
          )}
          </Grid2>
          <Grid2 size={6}>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              size={"small"}
              label="enter link"
              value={from.link ? from.link : from.image}
              onChange={(e) => handleChange(e.target.value, "link")}
            ></TextField>
          </Grid2>
          {/* Close Button */}
          <Grid2 size={12}>
            <Button
              onClick={handleClose}
              variant="contained"
              sx={{ mt: 2, bgcolor: "error.main", color: "white", mr: 1 }}
            >
              Close
            </Button>
            <Button
              onClick={() => setShowDialog(true)}
              variant="contained"
              sx={{ mt: 2, bgcolor: "success.ligth", color: "white" }}
            >
              Upload
            </Button>
          </Grid2>
        </Grid2>
      </Modal>
      <Modal open={showDialog} onClose={() => setShowDialog(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "55%",
            transform: "translate(-50%, -50%)",
            zIndex: 1400,
          }}
        >
          <UpdateConfirm state={setShowDialog} confirm_func={handleCreate} />
        </Box>
        
      </Modal>
    </>
  );
};

export default ImageModal;
