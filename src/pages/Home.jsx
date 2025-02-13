import { Box, TextField, InputAdornment, Skeleton,Typography } from "@mui/material";
import User_avtar from "../component/user_avtar";
import SearchIcon from "@mui/icons-material/Search";
import CustomCard from "../component/CustomCard";
import { useEffect, useState } from "react";
import { hitDateApi } from "../api/dataApi";
import DashboardCard from "../component/card/DashboardCard";
import SideBar from '../component/SideBar'
const Homepage = () => {
  const [data, setData] = useState([]); // ✅ Initialize as an empty array
  const [isLoading, setIsloading] = useState(true);
  const [temp_value,setTemp_value] = useState()
  const getData = async () => {
    try {
      const fetched_data = await hitDateApi();
      setIsloading(false);
      setData(fetched_data);
    } catch (error) {
      console.log("Error found:", error);
    }
  };

  // const search_query = ()=>{
  //   const filtered_data = data.map((item)=>)
  // }

  useEffect(() => {
    getData();
  }, []); // ✅ Add dependency array

  return (
    <Box sx={style.container}>
      

      {/* Sidebar */}
      <SideBar/>

      {/* Main Section */}
      <Box sx={style.hero_section}>
        {/* Search Box */}
        <Box sx={{ width: 450, display: "flex", justifyContent: "center" }}>
          <TextField
            placeholder="Search"
            size="small"
            sx={{ width: "100%", minWidth: 250 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
          {/* Dashborad Section */}
          <Box sx={{width:"100%",padding:1
          }} >
          <Typography variant="h4" sx={{}} >Dashborad</Typography>
          <Box sx={{display:'flex',justifyContent:'space-around',padding:2,flexDirection:{sm:"row",xs:"column"}}} >
          <DashboardCard infotitle={'Total downloads'} value={"50,000"} />
          <DashboardCard infotitle={'Total active user'} value={"4,550"} />
          <DashboardCard infotitle={'Total Earning'}  value={'200,000'} />
          </Box>
          </Box>
        {/* Card Section */}
        <Box sx={style.card_container}>
          {!isLoading
            ? data.map((item, index) => (
                <CustomCard
                  key={index}
                  title={item.title}
                  description={item.des}
                />
              ))
            : [...Array(13)].map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  width={400}
                  height={150}
                  sx={{ borderRadius: 2 }}
                />
              ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;

// Styles
const style = {
  container: {
    bgcolor: "background.default",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
  },
  option: {
    padding: 2,
    fontSize: 14,
    // border:1,
    // borderRadius:5,
    width:"100%",
    display:"flex",
    cursor: "pointer" ,
    alignItems:'center',
    "&:hover": {
      backgroundColor: "primary.main",
      color:'#fff'
    },
    gap:1
    
  },
  hero_section: {
    bgcolor: "background.default", // ✅ Fixed typo from "backgourd.default"
    padding: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    border:1
  },
  card_container: {
    width: "100%",
    marginTop:5,
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    alignItems: "center",
    overflowY: "overlay",
    maxHeight: "92vh",
  },
};
