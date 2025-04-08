import { baseUrl } from "./var";
import axios from "axios";

export const getFakeTopEarner = async (token) => {
  try {
    //   const resp = await axios.get(`${baseUrl}/endpoint`,{
    //     headers:{
    //         'x-auth-token':token
    //     }
    //   })
    //   return resp.data
    return [
      { _id: "as5df454sdf", name: "ashu", img: "a", balance: 500 ,isCreated:true},
      { _id: "as5df454sdf", name: "ankit", img: "a", balance: 1500 ,isCreated:true},
      { _id: "as5df454sdf", name: "vishal", img: "a", balance: 10 ,isCreated:true},
    ];
  } catch (error) {
    console.error("error found");
  }
};


export const getTopEarner = async (token) => {
    try {
      //   const resp = await axios.get(`${baseUrl}/endpoint`,{
      //     headers:{
      //         'x-auth-token':token
      //     }
      //   })
      //   return resp.data
      return [
        { _id: "as5df454sdf", name: "ashu", img: "a", balance: 500 },
        { _id: "as5df454sdf", name: "ankit", img: "a", balance: 1500 },
        { _id: "as5df454sdf", name: "vishal", img: "a", balance: 10 },
      ];
    } catch (error) {
      console.error("error found");
    }
  };
  




  export const updateCrt_user = async (id, data,token) => {
    console.log('updateding')
    // const formData = new FormData();
    // formData.append("title", data?.title);
    // formData.append("link", data?.link);
    // formData.append("image", data?.thumnail);
    console.log(id,data,token)
    try {
    //    const resp  = await axios.put(`${baseUrl}Created_User/update/${id}`,formData,{
    //     headers: { "x-auth-token": token },
    //   });
    //    return resp.data
    return{sccess:true,msg:"updated"}
    } catch (error) {
      console.error(
        "Error in updating item:",
        error.response?.data || error.message
      );
    }
  };






  export const create_User = async ( data,token) => {
    console.log('creating')
    // const formData = new FormData();
    // formData.append("title", data?.title);
    // formData.append("link", data?.link);
    // formData.append("image", data?.thumnail);
    console.log(data,token)
    try {
    //    const resp  = await axios.put(`${baseUrl}Created_User/creat`,formData,{
    //     headers: { "x-auth-token": token },
    //   });
    //    return resp.data
    return{sccess:true,msg:"created"}
    } catch (error) {
      console.error(
        "Error in updating item:",
        error.response?.data || error.message
      );
    }
  };



  export const delete_user = async (token,id) => {
    try {
    //    const resp = await axios.delete(`${baseUrl}fakeuser/delet${id}`,{
    //     headers: { "x-auth-token": token },
    //   })
    //    return resp.data
      return {success:true,msg:'deleting'}
    } catch (error) {
      console.error(
        "Error deleting item:",
        error.response?.data || error.message
      );
      
    }
  };
  