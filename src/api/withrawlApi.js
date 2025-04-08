import { baseUrl } from "./var";
import axios from "axios";


export const getWidrowlHistory = async(token) => {
    try {
      const resp = await axios.get(`${baseUrl}widrowl/get-history`, {
        headers: { "x-auth-token": token },
      });
     console.log(resp.data)
      return resp.data;
    } catch (error) {
      console.error(error);
      return 0;
    }
  };


  export const updateWidrowlReq = async (id, data,token) => {
    try {
       const resp  = await axios.put(`${baseUrl}widrowl/update-request/${id}`,data,{
        headers: { "x-auth-token": token },
      });
      console.log(resp.data)
       return resp.data
    console.log(id,data,token)
    } catch (error) {
      console.error(
        "Error:",
        error.response?.data || error.message
      );
    }
  };
  