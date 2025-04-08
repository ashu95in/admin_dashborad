import {
  Box,
  TextField,
  InputAdornment,
  Skeleton,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Container,
  FormLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { getUser } from "../../api/dataApi";
import DashboardCard from "../../component/card/DashboardCard";
import UserCardL from "../../component/card/UserCardL";
import UserCardLTitle from "../../component/card/UserCardLTitle";

const Dashboard = () => {
  const [status, setStatus] = useState("");
  const [data, setData] = useState();
  const [cachesdData, setCachesdData] = useState();
  const [dateRange, setDateRange] = useState({ from: "", to: "" });

  const getData = async () => {
    try {
      const fetched_data = await getUser();

      setCachesdData(fetched_data);
      setData(cachesdData);
    } catch (error) {
      console.log("Error found:", error);
    }
  };

  const search_query = (query) => {
    //serach should be hit api
    console.log(query.target.value);
    const filtered_data = cachesdData.filter((item) =>
      item?.name?.toLowerCase().includes(query.target.value.toLowerCase())
    );
    setData(filtered_data);
  };

  const handleChange = (e) => {
    //should hit api
    console.log(e.target.value);
    setStatus(e.target.value);
  };

  const dateFilter = (to_from, e) => {
    if (to_from == "to") {
      setDateRange((prev) => ({ ...prev, to: e }));
    } else {
      setDateRange((prev) => ({ ...prev, from: e }));
    }   
  };

  useEffect(() => {
    getData();
    console.log(dateRange)
  }, [dateRange]); // ✅ Add dependency array

  return (
    <Box sx={style.container}>
      {/* Main Section */}
      <Box sx={style.hero_section}>
        {/* Search Box */}
        <Box sx={{ width: 350, display: "flex", justifyContent: "center", marginTop:{xs:1,md:0} }}>
          <TextField
            placeholder="Search"
            size="small"
            sx={{ width: "100%", minWidth: 100}}
            InputProps={{
              sx:{borderRadius:3},
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        {/* Dashborad Section */}
        <Box sx={{ width: "100%", padding: 1 }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins",
              color: "rgba(43,45,66,0.8)",
              marginTop: 1,
              marginBottom: 2,

            }}
          >
            Dashborad
          </Typography>
          <Box
            sx={{
              gap:1,
              display: "flex",
              justifyContent: "space-around",
              padding: 1,
              flexDirection: { sm: "row", xs: "column" },
            }}
          >
            <DashboardCard
              infotitle={"Total downloads"}
              value={"0"}
              ValueColor={"primary.main"}
            />
            <DashboardCard
              infotitle={"Buyer user"}
              value={"0"}
              ValueColor={"rgba(0,204,0,0.8)"}
            />
            <DashboardCard
              infotitle={"Non buyer user"}
              value={"0"}
              ValueColor={"rgba(255,0,0,0.6)"}
            />
          </Box>
        </Box>

        {/* <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins",
            color: "rgba(43,45,66,0.8)",
                marginTop:2,
            marginBottom:2,
            width:'100%',
            
          }}
        >
          All user data
        </Typography> */}

        <Box sx={style.card_container}>
          <Box
            sx={{
              fontFamily: "Poppins",
              color: "rgba(43,45,66,0.8)",
              marginTop: 1,
              marginBottom: 2,
              width: "100%",
              // marginLeft: 2,
              gap: {md:1,xs:1},
              alignItems: "center",
              display: "flex",
              fontSize:12,
              p:1,
              flexWrap:"wrap"
            
            }}
          >
            <Typography sx={{ fontSize:".9rem",fontFamily:'poppins',paddingLeft:1,display:{md:"block",xs:'none'}}} >
            All user data</Typography>
            <TextField
              placeholder="Search"
              onChange={search_query}
              size="small"
              sx={{ width: {lg:"35%",md:"30%",xs:"60%"},marginLeft: 2 }}
              InputProps={{
                sx:{borderRadius:3},
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl sx={{ width: "10%", marginLeft: 0 }} size="small">
              <InputLabel id="Status">Status</InputLabel>
              <Select
                labelId="Status"
                id="Status"
                value={status}
                label="Status"
                onChange={handleChange}
                sx={{fontSize:'1rem',minWidth:{sm:120,xs:110},borderRadius:3}}

              >
                <MenuItem value={"Active"}  >Active</MenuItem>
                <MenuItem value={"Inactive"}  >Inactive</MenuItem>
              </Select>
            </FormControl>
            <TextField
              type="date"
              size="small"
              sx={{ width: "14%", marginLeft: {md:2,sm:4.5,xs:2},minWidth:{xs:145} }}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => dateFilter("from", e.target.value)}
              InputProps={{sx:{borderRadius:3}}}
            />
            --
            <TextField
              type="date"
              size="small"
              sx={{ width: "14%",minWidth:145, marginLeft:{md:0,sm:0} }}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => dateFilter("to", e.target.value)}
              InputProps={{sx:{borderRadius:3}}}
            />
          
            
          </Box>
          <UserCardLTitle />

          {data?.map((item, index) => (
            <UserCardL data={item} key={index} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

// Styles
const style = {
  container: {
    bgcolor: "background.default",
    // margin: "auto",
    marginTop: 0,
    display: "flex",
    flexDirection: "row",
    
  },
  option: {
    padding: 2,
    fontSize: 14,
    // border:1,
    // borderRadius:5,
    width: "100%",
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "primary.main",
      color: "#fff",
    },
    gap: 1,
  },
  hero_section: {
    bgcolor: "background.default", // ✅ Fixed typo from "backgourd.default"
    padding: {md:1,xs:0},
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  card_container: {
    marginTop: 1,
    width:'100%',
    padding: 0,
    minHeight: "50vh",
    //maxHeight:'fit-content',
    borderRadius: 2,

    width: "90%",
    backgroundColor: "rgba(246, 246, 246, 0.71)",
    boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
    scrollbarWidth: "none", // For Firefox
    "&::-webkit-scrollbar": {
      display: "none", // For Chrome, Safari
    },
  },
};
