import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, Avatar } from "@mui/material";
import { updateCrt_user,create_User } from "../../../api/leaderboardApi";
import useAuthStore from "../../../store/adminAuth";
import { useMutation } from "@tanstack/react-query";
import Success_Msg from "../../msgBox/Success_Msg";
const FakeUserForm = ({ info }) => {
  const {token} = useAuthStore();
  const [success,setSuccess] = useState('')
  const [form_data, setForm_data] = useState({
    name: '',
    balance: '',
    balance_intrv: '',
    time_intrv: '',
    image: "",
  });

  
  const { mutate: update, isPending, isError } = useMutation({
    mutationFn: () =>info?.id==''?create_User(form_data,token): updateCrt_user(info?.id, form_data,token),
    mutationKey:['user creat'],
    onSuccess: () => {
      setSuccess("successfully completed")
      queryClient.invalidateQueries(["user creat"]);
      
    },
  });
  
  
  
  
  
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleChange("image", URL.createObjectURL(file));
    }
  };

  const handleChange = (key, value) => {
    setForm_data({ ...form_data, [key]: value });

  };
  // Handle point increment at intervals
  useEffect(() => {
    setForm_data({
      name: info?.name,
      balance: info?.balance,
      balance_intrv: info?.balance_intrv,
      time_intrv: info?.time_intrv,
      image: info?.img,
    });
  }, [info]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
       console.log(form_data)
    if(
      form_data?.name &&
      form_data?.balance &&
      form_data?.balance_intrv &&
      form_data?.time_intrv 
      
    ) {
      // All fields are filled
      
       update()
      console.log("✅ All values are filled");
    } else {
      // Some fields are missing
      console.log(form_data)
      console.log("❌ Some values are missing");
    }

  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        p: 3,
        border: 0,
        borderRadius: 2,
        borderColor: "grey.400",
        boxShadow: 0,

        backgroundColor: "rgba(246, 246, 246, 0.71)",
      }}
    >
      <center> <Success_Msg msg={success}  isShow={success} hideFunc={setSuccess}  /></center>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {info?.name ? "Update user" : "Create user"}
      </Typography>

      {/* Image Upload */}
     
      {form_data?.image && (
        <Avatar
          src={form_data?.image}
          sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
        />
      )}
      
        
       <input
        type="file"
        accept="image/*"
        
        onChange={handleImageUpload}
        style={{ marginBottom: 10 }}
      />

      {/* Name Field */}
      <TextField
        fullWidth
        // label="Name"
        variant="outlined"
        value={form_data.name}
        onChange={(e) => handleChange("name", e.target.value)}
        sx={{ mb: 2 }}
        size="small"
        placeholder={"Enter name"}
      />

      {/* Initial Points */}
      <TextField
        fullWidth
        placeholder="Balance"
        type="number"
        variant="outlined"
        value={form_data.balance}
        onChange={(e) => handleChange("balance", e.target.value)}
        sx={{ mb: 2, width: "49%" }}
        size="small"
      />

      {/* Interval Points */}
      <TextField
        fullWidth
        placeholder="Interval Time Value in min"
        type="number"
        variant="outlined"
        value={form_data?.time_intrv}
        onChange={(e) => handleChange("time_intrv", e.target.value)}
        sx={{ mb: 2, width: "49%" }}
        size="small"
      />

      <TextField
        fullWidth
        placeholder="Interval balance"
        type="number"
        variant="outlined"
        value={form_data?.balance_intrv}
        onChange={(e) => handleChange("balance_intrv", e.target.value)}
        sx={{ mb: 2, width: "100%" }}
        size="small"
      />

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        fullWidth
      >
        {info?.name ? "Update " : "Create"}
      </Button>
    </Box>
  );
};

export default FakeUserForm;
