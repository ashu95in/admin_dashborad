import { Box, Typography, Grid2, Button } from "@mui/material";
import PlanCard from "../../../component/card/PlanCard";
import { getPlan } from "../../../api/PlanApi";
import { NavLink } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAuthStore from "../../../store/adminAuth";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const PlanList = () => {
  const [data, setData] = useState([]);
  const { token } = useAuthStore();
  const [page, setPage] = useState(1);
  const {
    data: planlist,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ["protectedData"],
    queryFn: () => getPlan(token,page),
  });
  async  function handlePagination(type, currentPage = 1) {


    console.log(type, "paignation", page);
    if (type == "back" && page !== 1) {
      console.log("backing");
      setPage(page - 1);
    } else if (
      type == "next" &&
      page !== Math.ceil(planlist?.payload.count / 10)
    ) {
      console.log("next");
      setPage(page + 1);
    }
   await   setTimeout(() => {
  
    }, 1000);
    refetch()
  }
  useEffect(() => {
    setData(planlist?.payload?.planData);

    console.log(planlist?.payload?.planData)

  }, [planlist]);
  return (
    //   <Box sx={style.hero_section}>

    <Grid2
      container
      sx={{
        p: 1,
        width: "100%",
        gap: 1,
        display: "flex",
        justifyContent: "center",
        borderRadius: 5,
      }}
    >
      <Grid2
        sx={{ justifyContent: "center", display: "flex", marginTop: 2 }}
        size={12}
      >
        <NavLink
          style={{ border: 5, width: "80%" }}
          to={`/home/PlaneEdite/Plan/New`}
        >
          <Button
            sx={{
              border: 1,
              width: "100%",
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
        </NavLink>
      </Grid2>
      {data
        ?.sort((a, b) => a.price - b.price)
        .map((item, index) => {
          // if (item?.isDeleted) return null;
          return (
            <Grid2
              size={5}
              sx={{ justifyContent: "center", display: "flex" }}
              key={index}
            >
              <PlanCard data={item} />
            </Grid2>
          );
        })}
      <Grid2
        size={12}
        sx={{ display: "flex", justifyContent: "center", gap: 5}}
      >
        <Button variant="contained" onClick={() => handlePagination("back")}>
          Prev. page
        </Button>
        <Button variant="contained" onClick={() => handlePagination("next")}>
          Next Page
        </Button>
      </Grid2>
    </Grid2>
    //   </Box>
  );
};

export default PlanList;

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
