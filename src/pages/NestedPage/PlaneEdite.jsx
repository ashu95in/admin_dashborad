import { Box, Typography, Grid2, Button } from "@mui/material";
import PlanCard from "../../component/card/PlanCard";
import CustomCard from "../../component/CustomCard";
const PlaneEdite = () => {
  const data = [
    // {
    //   isDeleted: false,
    //   _id: "67bde6a22f03ee0a5a10cec8",
    //   title: "Free Task",
    //   description: "",
    //   taskCounts: 12,
    //   taskPrice: 2,
    //   pricePerDay: 24,
    //   pricePerMonth: 720,
    //   pricePerYear: 8760,
    //   isActive: true,
    //   __v: 0,
    //   price: 0,
    // },
    // {
    //   isDeleted: false,
    //   _id: "67bde7142f03ee0a5a10cec9",
    //   title: "Mercury",
    //   description: "",
    //   taskCounts: 12,
    //   taskPrice: 5,
    //   pricePerDay: 60,
    //   pricePerMonth: 1800,
    //   pricePerYear: 21600,
    //   isActive: true,
    //   __v: 0,
    //   price: 1000,
    // },
    // {
    //   isDeleted: false,
    //   _id: "67bde7952f03ee0a5a10ceca",
    //   title: "Venus",
    //   description: "",
    //   taskCounts: 16,
    //   taskPrice: 22,
    //   pricePerDay: 352,
    //   pricePerMonth: 10500,
    //   pricePerYear: 126000,
    //   isActive: true,
    //   __v: 0,
    //   price: 6000,
    // },
    // {
    //   isDeleted: false,
    //   _id: "67bde8002f03ee0a5a10cecb",
    //   title: "Neptune",
    //   description: "",
    //   taskCounts: 21,
    //   taskPrice: 26,
    //   pricePerDay: 546,
    //   pricePerMonth: 16380,
    //   pricePerYear: 196560,
    //   isActive: true,
    //   __v: 0,
    //   price: 10000,
    // },
    // {
    //   isDeleted: false,
    //   _id: "67bde8772f03ee0a5a10cecc",
    //   title: "Jupiter",
    //   description: "",
    //   taskCounts: 33,
    //   taskPrice: 50,
    //   pricePerDay: 1650,
    //   pricePerMonth: 49500,
    //   pricePerYear: 594000,
    //   isActive: true,
    //   __v: 0,
    //   price: 30000,
    // },
    // {
    //   isDeleted: false,
    //   _id: "67bde8d82f03ee0a5a10cecd",
    //   title: "DarkEye",
    //   description: "",
    //   taskCounts: 45,
    //   taskPrice: 60,
    //   pricePerDay: 2700,
    //   pricePerMonth: 81000,
    //   pricePerYear: 972000,
    //   isActive: true,
    //   __v: 0,
    //   price: 50000,
    // },r
  ];
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
            PlaneEdite
          </Typography>
        </Box>

        <Grid2
          container
          sx={{
            p: 1,
            width: "100%",
            gap: 1,
            display: "flex",
 
            borderRadius: 5,
          }}
        >
          {data.map((item, index) => (
            <Grid2 size={5} sx={{ justifyContent: "center", display: "flex" }}  key={index} >
              <PlanCard  data={item} />
            </Grid2>
          ))}

          <Grid2
            sx={{ justifyContent: "center", display: "flex", marginTop: 2 }}
            size={12}
          >
            <Button
              sx={{
                border: 1,
                width: "50%",
                height: 45,
                borderRadius: 2,
                textAlign: "center",
                py: 1,
                fontWeight: 600,
                color: "primary.dark",
              }}
            >
              Add new
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default PlaneEdite;

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
