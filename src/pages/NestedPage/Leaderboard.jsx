import { Box, Typography,Grid2 } from "@mui/material";
import { TopEarner_Card } from "../../component/card/Leaderboard/TopEarner_Card";
import { TopEarner_Card_title } from "../../component/card/Leaderboard/TopEarner_Card_title";
import CreatFakeUser from "../../component/card/Leaderboard/CreatFakeUser";
import { getTopEarner,getFakeTopEarner } from "../../api/leaderboardApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAuthStore from "../../store/adminAuth";
const Leaderboard = () => {
  const {token} = useAuthStore()
  const [comb_data,setComb_data] = useState([])
  const [edite,setEdite] = useState({})
  const {data:realUser,isLoading} = useQuery({
    queryKey:['realtop_earner'],
    queryFn:()=>getTopEarner(token)
  })
  const {data:createdUser,isLoading:isUserLoading} = useQuery({
    queryKey:['Created_earner'],
    queryFn:()=>getFakeTopEarner(token)
  })



  useEffect(()=>{
 
    const combineUsers = async () => {
      if (realUser && createdUser) {
        const combined = [...realUser, ...createdUser];
        await  setComb_data(combined);
      }
    };
  
    combineUsers();
  },[realUser,createdUser])
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
            Leaderboard
          </Typography>
        </Box>
        <Grid2 container sx={{   width: "100%" }}>
             <Grid2 size={6}   sx={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center'}} >
             <TopEarner_Card_title/>
          {comb_data?.sort((a,b)=>b.balance-a.balance).map((item, index) => (
            <TopEarner_Card key={index} data={index+1}   userinfo={item} setEdite={setEdite}   />
          ))}
          </Grid2>
          <Grid2 size={5} sx={{p:0}}  >  
          <CreatFakeUser info={edite}  />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default Leaderboard;

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
