import { Box, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const DashboardCard = ({ infotitle, value, ValueColor }) => {
  
  return (
    <Box
      sx={{
        p: 1,
        width: {sm:"25%"},
        height: 100,
        borderRadius: 2,
        boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
        backgroundColor: "rgba(246, 246, 246, 0.71)",

        cursor: "pointer",
      }}
    >
      <Typography
        sx={{
           fontFamily: "poppins",
          fontWeight: 600,
          textAlign: "center",
          fontSize: "2rem",
          color: ValueColor ? ValueColor : "black",
        }}
      >
        {value}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 500,
          textAlign: "center",
          color: "grey",
        }}
      >
        {infotitle}
      </Typography>
    </Box>
  );
};

export default DashboardCard;

// import { Box, Typography } from "@mui/material";
// import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

// const DashboardCard = ({ infotitle, value }) => {
//   return (
//     <Box
//       sx={{
//         gap: { md: 3, xm: 1 },
//         width: { md: "30%", xs: "80%" },
//         padding: { md: 2, xs: 2 },
//         borderRadius: 2,
//         display: "flex",
//         flexDirection: "row",
//         bgcolor: "primary.main",
//         maxWidth:450
//         // justifyContent: "space-evenly",
//       }}
//     >
//       <Box sx={{ width: "25%"}}>
//         <CurrencyRupeeIcon
//           sx={{ fontSize: { md: 65, xs: 50 }, color: "#fff" }}
//         />
//       </Box>
//       <Box sx={{ width: { md: "67%", xs: "50%" } ,gap:1,display:'flex',flexDirection:'column'}}>
//         <Typography
//           variant={"h4"}
//           sx={{
//             textAlign: "center",
//             fontWeight: 400,
//             color: "#3ad59f",
//             fontSize: { md: 30, xs: 20 },
//           }}
//         >
//           {value}
//         </Typography>
//         <Typography
//           sx={{
//             textAlign: "center",
//             color: "#ffff",

//             fontSize: {md:14},
//           }}
//         >
//           {infotitle}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default DashboardCard;
