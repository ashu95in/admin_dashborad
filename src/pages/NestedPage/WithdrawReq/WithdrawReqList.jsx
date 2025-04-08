import { Box, Typography } from "@mui/material";
import { FilterCard } from "../../../component/card/FilterCard";
import TableHeading from "../../../component/card/TableHeading";
import WithdrawCard from "../../../component/card/WithdrawCard";
import { useEffect, useState } from "react";
import useAuthStore from "../../../store/adminAuth";
import { getWidrowlHistory } from "../../../api/withrawlApi";
import { useQuery } from "@tanstack/react-query";
const WithdrawReqList = () => {
 
  const {token} = useAuthStore()
  const [cacheData, setCacheData] = useState();
  const {data:widrawol_req,isPending} = useQuery({
    queryKey:['getwidrowl'],
    queryFn:()=>getWidrowlHistory(token)
  })
  const data = [
    // {
    //   name: "Vishal",
    //   status: "pending",
    //   balance: "300",
    //   date: "8/2/2025",
    //   phNo: "7898459878",
    // },
    // {
    //   name: "Tony",
    //   status: "completed",
    //   balance: "200",
    //   date: "1/2/2025",
    //   phNo: "2365896589",
    // },
    // {
    //   name: "ashu",
    //   status: "Canceled",
    //   balance: "500",
    //   date: "20/2/2025",
    //   phNo: "8965896589",
    // },
    // {
    //     name: "ashu",
    //     status: "Canceled",
    //     balance: "500",
    //     date: "20/2/2025",
    //     phNo: "8965896589",
    //   },
    //   {
    //     name: "ashu",
    //     status: "Canceled",
    //     balance: "500",
    //     date: "20/2/2025",
    //     phNo: "8965896589",
    //   },
    //   {
    //     name: "ashu",
    //     status: "Canceled",
    //     balance: "500",
    //     date: "20/2/2025",
    //     phNo: "8965896589",
    //   },
    //   {
    //     name: "ashu",
    //     status: "Canceled",
    //     balance: "500",
    //     date: "20/2/2025",
    //     phNo: "8965896589",
    //   },
    //   {
    //     name: "ashu",
    //     status: "Canceled",
    //     balance: "500",
    //     date: "20/2/2025",
    //     phNo: "8965896589",
    //   },
    //   {
    //     name: "ashu",
    //     status: "Canceled",
    //     balance: "500",
    //     date: "20/2/2025",
    //     phNo: "8965896589",
    //   },
    //   {
    //     name: "ashu",
    //     status: "Canceled",
    //     balance: "500",
    //     date: "20/2/2025",
    //     phNo: "8965896589",
    //   }
  ];

  useEffect(()=>{
   setCacheData(widrawol_req?.payload)
  //  console.log('=========>',widrawol_req?.payload)
  },[widrawol_req])

  return (
 
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
          <FilterCard datafor_filter={widrawol_req?.payload} setFilter_data={setCacheData}  />
          <TableHeading />
          <Box
            sx={{ 
              width: "100%",
              gap: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1
            }}
          >
            {cacheData?.map((item,index)=>{
              if(item.amount<199) return null
               return   <WithdrawCard
               key={index}
                data={item}
               />
              })}
           
           
          </Box>
        </Box>
      
    
  );
};

export default WithdrawReqList;

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
