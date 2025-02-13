import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { hitLoginApi } from "../api/userAuthApi";
const LoginPage = () => {
  const [loginData, setLoginData] = useState({ userName: "", password: "" });
  const [loginStatus, setLoginStatus] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (loginData) => {
    try {
      const reponse = await hitLoginApi(loginData, setLoginStatus);
      console.log(loginData, reponse);
      if (reponse.status) {
        setLoginStatus(false);
        navigate("/home");
      } else {
        setLoginStatus(false);
        alert("login fail");
      }
    } catch (error) {
      console.log("error found", error);
    }
  };
  return (
    <Box sx={style.container}>
      <center>
        <Typography
          sx={{
            fontSize: { sm: "2rem", xs: "2rem" },
            fontWeight: 500,
            marginTop:"5%"
          }}
        >
          Admin Login
        </Typography>
      </center>
      <Box sx={style.form}>
        <TextField
          placeholder="user@544654"
          label="Enter your name"
          onChange={(event) =>
            setLoginData((prev) => ({ ...prev, userName: event.target.value }))
          }
        />
        <TextField
          placeholder="135465"
          label="Enter your Password"
          onChange={(event) =>
            setLoginData((prev) => ({ ...prev, password: event.target.value }))
          }
        />
        <Button
          onClick={() => handleSubmit(loginData)}
          color="primary.main"
          sx={{ bgcolor: "primary.main", color: "#fff" }}
        >
          {loginStatus ? <CircularProgress color="white" size={25} /> : "login"}
        </Button>
        <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
          <Typography style={{ color: "black" }}>forget password</Typography>
          <Typography
            sx={{ color: "#00b4d8", fontWeight: 500, cursor: "pointer" }}
          >
            sign up
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;

const style = {
  container: {
    bgcolor: "background.default",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
   
  },
  title: {},
  form: {
    display: "flex",
    flexDirection: "column",
    minWidth: { sm: "450px", xs: "350px" },
    maxWidth: "30vw",
    margin: "auto",
    gap: "2em",
    marginTop: "3%",
    
  },
};
