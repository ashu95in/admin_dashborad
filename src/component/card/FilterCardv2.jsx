import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  Grid2,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const FilterCardv2 = ({

  setParam,
  param,
  get_func,
}) => {
  const [status, setStatus] = useState("all");
  const [plan, setPlan] = useState("all");
  // const [fitler_form,setFilter_Form] = useState({

  // })

  //search filter
  function search_filter(query) {
    console.log(query.target.valuse)
  }

  //status filter
  async function status_filter(status) {
    return 0;
  }

  function onChangeHandle(option, value) {
    if(param.page>1){
      setParam({ ...param, [option]: value,page:1 });
      return 0
    }
    setParam({ ...param, [option]: value });
  }
  //main filter function
  function getFiltered_data() {
    get_func(param.type, param.plan);
  }

  useEffect(() => {
    status_filter(status);
  }, [status, plan]);

  return (
    <Grid2
      container
      sx={{
        width: "100%",
        p: 2,
        borderRadius: 1,
        backgroundColor: "rgba(246, 246, 246, 0.71)",
      }}
    >
      <Grid2 size={4}>
        <TextField
          onChange={search_filter}
          placeholder="Search"
          size="small"
          sx={{ width: "100%", bprder: 1 }}
          InputProps={{
            sx: { borderRadius: 3 },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid2>
      <Grid2 size={2} sx={{ justifyContent: "center", display: "flex" }}>
        <FormControl size="small" sx={{ width: "90%" }}>
          <InputLabel id={"type"}>Type</InputLabel>
          <Select
            labelId="type"
            label="type"
            id="type"
            value={param.type}
            onChange={(e) => onChangeHandle("type", e.target.value)}
            sx={{ fontSize: "1rem", borderRadius: 3 }}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"Refered"}>Refered</MenuItem>
            <MenuItem value={"Non referred"}>Non Refered</MenuItem>
          </Select>
        </FormControl>
      </Grid2>
      <Grid2
        size={2}
        sx={{ justifyContent: "center", display: "flex", gap: 1 }}
      >
        <FormControl size="small" sx={{ width: "90%" }}>
          <InputLabel id={"plan"}>Plan</InputLabel>
          <Select
            labelId="Plan"
            label="plan"
            id="Plan"
            value={param.plan}
            onChange={(e) => onChangeHandle("plan", e.target.value)}
            sx={{ fontSize: "1rem", borderRadius: 3 }}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"false"}>Free</MenuItem>
            <MenuItem value={"true"}>paid</MenuItem>
          </Select>
        </FormControl>
      </Grid2>

      <Grid2 size={1} sx={{ justifyContent: "center", display: "flex" }}>
        <Button
          onClick={getFiltered_data}
          variant="contained"
          sx={{ width: "80%", borderRadius: 3 }}
        >
          Get
        </Button>
      </Grid2>
    </Grid2>
  );
};
