import { Box, Avatar } from "@mui/material";

const User_avtar = ({ img = "no" }) => {
  return (
    <Box sx={style.user_avtar_container}>
      <Avatar sx={{ bgcolor: "black" }} />
      Admin
    </Box>
  );
};

export default User_avtar;

const style = {
  user_avtar_container: {
    border: 1,
    width: "10%",
    display: "flex",
    alignItems: "center",
    gap: 1,
    borderRadius: 5,
    minWidth: 150,
   
  },
};
