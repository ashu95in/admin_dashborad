import { Box, Typography, TextField, InputAdornment, Grid2 } from "@mui/material";
import UserControleCard from "../../../component/card/UserControleCard";
import { FilterCardv2 } from "../../../component/card/FilterCardv2";
import TableHeadingv2 from "../../../component/card/TableHeadingv2";
import { useEffect, useState } from "react";
import { getUserlist } from "../../../api/userConroleApi";
import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../../../store/adminAuth";
const UserList = () => {
     const {token} = useAuthStore() ;
     
     const [data,setData] = useState([]);
     const [param,setParam] = useState({
      
      page:1,
      type:"all",
      plan:"all"
     })
     const {data:userlist,isPending,refetch} = useQuery({
      queryKey:['userlist',param.page,param.type,param.plan],
      queryFn: ({ queryKey }) => {
        const [_key, page, type = 'all', plan = 'all'] = queryKey;
        return getUserlist(token, page, type, plan);
      },
     })

    const handlepagination = ()=>{
      setParam({...param,page:param.page+1})
      refetch(param.page,param.type,param.plan)
    }

    useEffect(()=>{
      setData(userlist)
    },[userlist])
  return (
    <>
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
          <FilterCardv2     setParam={setParam} param={param}  get_func={refetch}  />
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
         {data?.map((item,index)=>(
            <UserControleCard data={item} key={index} />
         )) 
          }
          </Box>

        </Box>
        <Box onClick={handlepagination}  sx={{marginTop:2,cursor:'pointer'}} >Load more</Box>
        </>
  );
};

export default UserList;

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
