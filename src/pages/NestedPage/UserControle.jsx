import { Box, Typography, TextField, InputAdornment, Grid2 } from "@mui/material";
import UserControleCard from "../../component/card/UserControleCard";
import { FilterCardv2 } from "../../component/card/FilterCardv2";
import TableHeadingv2 from "../../component/card/TableHeadingv2";
const UserControle = () => {
  return (
    <Box sx={style.container}>
      <Box sx={style.hero_section}>
        <Box sx={{ width: "100%", padding: 1 }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins",
              color: "rgba(43,45,66,0.8)",
              marginTop: 6,
              marginBottom: 2,
            }}
          >
            Controle user
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "rgba(246, 246, 246, 0.71)",
            boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <FilterCardv2   />
          <TableHeadingv2 />
          <Box
            sx={{
              width: "100%",
              gap: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1
            }}
          >
          <UserControleCard/>
          <UserControleCard/>
          <UserControleCard/>
          <UserControleCard/>
          <UserControleCard/>
          <UserControleCard/>
          </Box>
        </Box>
      
      </Box>
    </Box>
  );
};

export default UserControle;

// Styles
const style = {
  container: {
    bgcolor: "background.default",
    marginTop: 0,
    display: "flex",
    flexDirection: "row",
  },
  hero_section: {
    bgcolor: "background.default", // ✅ Fixed typo from "backgourd.default"
    padding: { md: 1, xs: 0 },
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
};
