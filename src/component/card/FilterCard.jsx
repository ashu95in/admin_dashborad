import React, { useState,useRef, useEffect } from "react";
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

export const FilterCard = ({datafor_filter,setFilter_data}) => {
  // datafor_filter  data for filter .
  const [status,setStatus] = useState('All')
  console.log('========>',datafor_filter)
  // const [fitler_form,setFilter_Form] = useState({

  // }) 
 
  //search filter   
    function search_filter(query){
     const filteredData = datafor_filter.filter((item)=>
           item?.name?.toLowerCase().includes(query.target.value.toLowerCase())
       )
    
     setFilter_data(filteredData)
     console.log(datafor_filter)
    }


  //data and time filter
  function data_time_filter(to,from){
        console.log(to,from)
  }


  //status filter 
    async function status_filter(status){
      if(status=="All"){
        setFilter_data(datafor_filter)
        return 0
      }
      const filteredData = datafor_filter.filter((item)=>
        item?.status?.toLowerCase().includes(status.toLowerCase())
    ) 
 
  setFilter_data(filteredData)
  
    }



  //main filter function
  function get_filterd_data(){
  
  }

  useEffect(()=>{
status_filter(status)
  },[status])

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
      <Grid2 size={5}>
        <TextField
        onChange={search_filter}
          placeholder="Search"
          size="small"
          sx={{ width: "100%", bprder: 1 }}
          InputProps={{
            sx:{borderRadius:3},
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
            value={status}
            onChange={(e)=>setStatus(e.target.value)}
            sx={{ fontSize: "1rem",borderRadius:3 }}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Pending"}>Pending</MenuItem>
            <MenuItem value={"Completed"}>Completed</MenuItem>
            <MenuItem value={"failed"}>Failed</MenuItem>
          </Select>
        </FormControl>
      </Grid2>
      <Grid2
        size={4}
        sx={{ justifyContent: "center", display: "flex", gap: 1 }}
      >
        <TextField size="small" type="date" InputProps={{sx:{borderRadius:3}}} ></TextField>
        <TextField size="small" type="date"InputProps={{sx:{borderRadius:3}}}  ></TextField>
      </Grid2>

      <Grid2 size={1} sx={{ justifyContent: "center", display: "flex" }}>
        <Button variant="contained" sx={{ width: "80%",borderRadius:3 }}>
          Get
        </Button>
      </Grid2>
    </Grid2>
  );
};
