import { Box, TextField, InputAdornment, Skeleton } from "@mui/material";
import User_avtar from "../component/user_avtar";
import SearchIcon from "@mui/icons-material/Search";
import CustomCard from "../component/CustomCard";
import { useEffect, useState } from "react";
import { hitDateApi } from "../api/dataApi";
import PersonIcon from '@mui/icons-material/Person';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import HistoryIcon from '@mui/icons-material/History';
import BorderColorIcon from '@mui/icons-material/BorderColor';
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
      <Box
        sx={{
          width: 250,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          paddingTop: 1,
          bgcolor: "primary.light",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <User_avtar img="A" />
        </Box>
        <Box sx={{ marginTop: 5,display:'flex',flexDirection:"column",alignItems:'center',gap:1 }}>
          <Box sx={style.option}> <PersonIcon/> Get all user</Box>
          <Box sx={style.option}> <HistoryIcon/>User login history</Box>
          <Box sx={style.option}><LocalActivityIcon/>User activity</Box>
          <Box sx={style.option}><PersonRemoveIcon/>  Delete User</Box>
          <Box sx={style.option}><BorderColorIcon/> Create Plan</Box>

        </Box>
      </Box>

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
