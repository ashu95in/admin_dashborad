import React, { useState } from "react";
import { Box, Typography, Grid2, Button } from "@mui/material";
import SaveAs from "../../msgBox/actionBox/SaveAs";
import { formatDate } from "../../../utils/service";
import { updateWidrowlReq } from "../../../api/withrawlApi";
import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../../../store/adminAuth";
import Success_Msg from "../../msgBox/Success_Msg";
import { useNavigate } from "react-router-dom";
const WithdrawActionCard = ({ data }) => {
  const [showMsgBox, setShowMsgBox] = useState();
  const { token } = useAuthStore();
  const navigate = useNavigate();
  const [success,setSuccess] = useState('')
  const { mutate, isPending } = useMutation({
    mutationFn: (U_data) => updateWidrowlReq(data.id, U_data, token),
    onSuccess :  async (data) => {
      if(data.success){
         setSuccess("Request accepted")
       setTimeout(() => {
        navigate(-1);
      }, 1550); // Wait 1.5 seconds before navigating
      }
      
    },
  });
  const temp = true;
  return (
    <Box
      sx={{
        width: "100%",
        height: 180,
        borderRadius: 2,
        borderColor: "grey",
        backgroundColor: "rgba(218, 217, 217, 0.42)",
        p: 5,
      }}
    >
             <center> <Success_Msg msg={success}  isShow={success} hideFunc={setSuccess}  /></center>
      <Grid2 container>
        <Grid2 size={6}>
          <Box sx={{ fontSize: 14, display: "flex", gap: 1 }}>
            Type
            <Typography
              sx={{
                fontSize: 13,
                fontFamily: "poppins",
                backgroundColor: "grey",
                px: 1,
                borderRadius: 3,
                color: "#fff",
              }}
            >
              Bank
            </Typography>
          </Box>
          {data?.widrowlType !== "upiId" ? (
            <Box sx={[style.text]}>
              <Box sx={{ fontSize: 13, fontFamily: "poppins" }}>
                Name : Ashu
              </Box>
              <Box sx={{ fontSize: 13, fontFamily: "poppins" }}>
                ifsc code : 465sdf
              </Box>
              <Box sx={{ fontSize: 13, fontFamily: "poppins" }}>
                A/c No. : 789878878
              </Box>
              <Box sx={{ fontSize: 13, fontFamily: "poppins" }}>
                Bank : State bank
              </Box>
            </Box>
          ) : (
            <Box sx={{ fontSize: 13, fontFamily: "poppins" }}>
              UpiId : {data?.upiId}
            </Box>
          )}
        </Grid2>
        <Grid2 size={6}>
          <Box sx={{ fontSize: 13, display: "flex", alignItems: "center" }}>
            Request info :{" "}
            <Box
              sx={{
                marginLeft: 1,
                borderRadius: 5,
                fontSize: 12,

                width: "fit-Content",
                px: 2,
                py:.2,
                backgroundColor:
                  data?.status === "completed"
                    ? "rgba(4, 245, 4, 0.3)"
                    : data?.status === "pending" // ? "rgba(4, 245, 4, 0.3)"
                    ? //: "rgba(255, 0, 0, 0.31)",
                      "grey"
                    : data?.status === "failed"
                    ? "rgba(255, 0, 0, 0.31)"
                    : "grey.200",
                //          ? "rgba(6, 78, 6, 0.97)"
                color:
                  //  : "rgba(145, 16, 16, 0.94)",
                  data?.status === "completed"
                    ? "rgba(6, 78, 6, 0.97)"
                    : data?.status === "pending"
                    ? "White"
                    : data?.status === "failed"
                    ? "rgba(145, 16, 16, 0.94)"
                    : "text.primary",
              }}
            >
              {" "}
              {data?.status}
            </Box>{" "}
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}></Box>
          <Box sx={{ fontSize: 13 }}>
            Date of Request : {formatDate(data?.createdAt)}
          </Box>
          <Box sx={{ fontSize: 13 }}>Amount :{data?.amount} </Box>
        </Grid2>
        <Grid2
          size={12}
          sx={{
            justifyContent: "center",
            display: "flex",
            gap: 2,
            marginBottom: 1,
            marginTop: data?.widrowlType !== "upiId" ? 0 : 5,
          }}
        >
          <Button
          disabled={data?.status=="completed"}
            onClick={() => mutate({ status: "completed", reason: "null" })}
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "success.light",
              boxShadow: 0,
              fontSize: 12,
            }}
          >
            Accept
          </Button>
          <Button
          disabled={data?.status=="failed"}
            onClick={() => setShowMsgBox(true)}
            size="small"
            variant="contained"
            sx={{ bgcolor: "error.main", boxShadow: 0, px: 1, fontSize: 12 }}
          >
            Reject
          </Button>
        </Grid2>
      </Grid2>
      {showMsgBox ? (
        <Box sx={{ position: "absolute", top: "35%", left: "45%" }}>
          <SaveAs state={setShowMsgBox} update={mutate}   ></SaveAs>
        </Box>
      ) : null}
    </Box>
  );
};

export default WithdrawActionCard;

const style = {
  text: {
    fontFamily: 14,
    fontFamily: "poppins",
  },
};
