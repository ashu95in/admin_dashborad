import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuthStore from "../store/adminAuth";
import { logIn } from "../api/userAuthApi";
import { useMutation } from "@tanstack/react-query";
import MsgBox from '../component/msgBox/MsgBox'
const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginStatus, setLoginStatus] = useState(false);
  const [showMsg,setShowMsg] = useState(false)
  const {login} = useAuthStore()
  const navigate = useNavigate();
  const{mutate,isPending }  = useMutation({
    mutationFn:(loginData)=>logIn(loginData),
    onSuccess  :(data)=>{
      if(!data) setShowMsg("Error in login try again !")
      if(data){
        login(data?.payload);
        navigate("/home/dashboard")
      }
      console.log("Log in successfull ! welcom back admin",data);
    } ,
    onError:()=>{
      setShowMsg("Login failed")
      console.error("Login faild")
    }
  })
  
 
  
  const varifyForm = ()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(!emailRegex.test(loginData.email)) return false
   if(loginData.password.length<6) return false
   return true
  }


  const handleSubmit = async () => {
    console.log("login",isPending)
    const validateData =  varifyForm(); 
    console.log(validateData)
    if(!validateData) {
      console.log('incocrrect value');
      setShowMsg("incocrrect value")
      return false
    } else{
      mutate(loginData)
      return true
    }
    
  };
  return (
    <Box sx={style.container}>
       <center> <MsgBox msg={showMsg}  isShow={showMsg} hideFunc={setShowMsg}  /></center>
      <center>
        <Typography
         sx={{
            fontSize: { sm: "2rem", xs: "2rem" },
            fontWeight: 500,
            marginTop:"5%",

              fontFamily:"Poppins"
          
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
            setLoginData((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <TextField
        sx={{              fontFamily:"Poppins"}}
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
          {isPending ? <CircularProgress color="white" size={25} /> : "login"}
        </Button>
        <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
          <Typography style={{ color: "black",              fontFamily:"Poppins" }}>forget password</Typography>
          <Typography
            sx={{ color: "#00b4d8", fontWeight: 500, cursor: "pointer" ,              fontFamily:"Poppins"}}
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
