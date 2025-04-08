import React,{useState} from "react";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfimAction from "./msgBox/actionBox/ConfimAction";
import { deleteBanner } from "../api/bannerApi";
import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../store/adminAuth";
import Success_Msg from "./msgBox/Success_Msg";
const Banner = ({data}) => {

    const [showDilog,setDilog] = useState(false);
    const [success,setSuccess] = useState('')
    const {token} =  useAuthStore();
    const { mutate: deleteItem, isLoading }=  useMutation({
        mutationFn: ()=>deleteBanner(token,data?._id),
        mutationKey:['banner'],
        onSuccess: () => {
          if(true){
          setSuccess("Item deleted")
        }
          queryClient.invalidateQueries(["banner"]); // Refresh items after delete
        },
      });
    function deletPhoto(){
        return false
    }
  return (
    <Box
      sx={{
        width: "90%",
        height: 160,
        borderRadius: 2,
        boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
        backgroundColor: "rgba(246, 246, 246, 0.71)",
        backgroundImage:
          `url(${data?.link})`, // Set background image

        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // No repeating
      }}
    >
      <center> <Success_Msg msg={success}  isShow={success} hideFunc={setSuccess}  /></center>
      <Button onClick={()=>setDilog(true)} size="small">
        <DeleteIcon
          sx={{ color: "#fff", bgcolor: "error.main", p: 0.2, borderRadius: 5 }}
        />
      </Button>
         {showDilog?<Box sx={{position:'absolute',top:"25%",left:"45%",zIndex:1}}   >
            <ConfimAction  state={setDilog}  deletfn={deleteItem}  />
          </Box>:null}
    </Box>
  );
};

export default Banner;
