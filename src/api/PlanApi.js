import { baseUrl } from "./var";
import axios from "axios";

export const getPlan = async (token,page) => {
  try {
    const resp = await axios.get(`${baseUrl}plan/?page=${page}`, {
      headers: { "x-auth-token": token },
    });

    return resp.data;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

export const deletePlan = async (token,id) => {
  try {
     const resp = await axios.delete(`${baseUrl}plan/${id}`,{
      headers: { "x-auth-token": token },
    })
     return resp.data
    
  } catch (error) {
    console.error(
      "Error deleting item:",
      error.response?.data || error.message
    );
    
  }
};

export const updatePlan = async (id, data,token) => {
  const des  = data?.title
  try {
     const resp  = await axios.put(`${baseUrl}plan/update/${id}`,{...data,"isActive":false ,description:des},{
      headers: { "x-auth-token": token },
    });
     return resp.data
  } catch (error) {
    console.error(
      "Error in updating item:",
      error.response?.data || error.message
    );
  }
};



export const createPlan = async ( id,data,token) => {
  try {
    console.log(token)
     const resp  = await axios.post(`${baseUrl}plan/add`,{...data,"isActive":true ,description:"plan created by admin"},{
      headers: { "x-auth-token": token },
    });
    console.log(resp.data)
     return resp.data
   
  } catch (error) {
    console.error(
      "Error :",
      error.response?.data || error.message
    );
  }
};
