import { baseUrl } from "./var";
import axios from "axios";

export const getVideo = async (page, token) => {
  try {
    //  const resp = axios.get(`${baseUrl}/endpoint/?page=${page}`,{
    //     headers: { "x-auth-token": token }
    //  })

    //  return resp.data
    console.log(token, page);
    return [
      {
        id:'sdfsafw54f7ds854fSD',
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSsIg7Oo1Iaork71jI_MFIS5dAB9a74LAVJw&s",
        link: "https://www.youtube.com/vedio/?id=basd5rg7h8ds54fawd",
        title: "How to top task guru",
      },
      {
        id:'sdfsafw54f7ds854fSD',
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8IVEEufxjmdoFg0K1wN_d9Qbx68GH4bB5ew&s",
        link: "https://www.youtube.com/vedio/?id=basd5rg7h8ds54fawd",
        title: "How earn money in task guru",
      },
      {
        id:'sdfsafw54f7ds854fSD',
        image:
          "data:image/jpeg;base64,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",
        link: "https://www.youtube.com/vedio/?id=basd5rg7h8ds54fawd",
        title: "How earn money in task guru",
      },
      {
        id:'sdfsafw54f7ds854fSD',
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSsIg7Oo1Iaork71jI_MFIS5dAB9a74LAVJw&s",
        link: "https://www.youtube.com/vedio/?id=basd5rg7h8ds54fawd",
        title: "How to top more task in task guru",
      },
      {
        id:'sdfsafw54f7ds854fSD',
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8IVEEufxjmdoFg0K1wN_d9Qbx68GH4bB5ew&s",
        link: "https://www.youtube.com/vedio/?id=basd5rg7h8ds54fawd",
        title: "How to complete task fast in task guru",
      },
      {
        id:'sdfsafw54f7ds854fSD',
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWoXeKzVoEEtwFplMVfPZ5BbFi8r-3gxcMXQ&s",
        link: "https://www.youtube.com/vedio/?id=basd5rg7h8ds54fawd",
        title: "Akon - Right Now (Na Na Na) (Official ...",
      },
    ];
  } catch (error) {
    console.error("Error :", error.response?.data || error.message);
  }
};









export const deleteVideo = async (token,id) => {
    try {
    //    const resp = await axios.delete(`${baseUrl}endpoint/${id}`,{
    //     headers: { "x-auth-token": token },
    //   })
    //    return resp.data
    console.log(token,id)
    return {success:true}  
    } catch (error) {
      console.error(
        "Error deleting item:",
        error.response?.data || error.message
      );
      
    }
  };




  export const updateVideo = async (id, data,token) => {
    console.log('uploadin')
    const formData = new FormData();
    formData.append("title", data?.title);
    formData.append("link", data?.link);
    // formData.append("image", data?.thumnail);
    try {
    //    const resp  = await axios.put(`${baseUrl}video/update/${id}`,formData,{
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


  
  export const createVideo = async (id, data,token) => {
    console.log("creating")
    const formData = new FormData();
    formData.append("title", data?.title);
    formData.append("link", data?.link);
    // formData.append("image", data?.image);
    try {
    //    const resp  = await axios.post(`${baseUrl}video/update/${id}`,formData,{
    //     headers: { "x-auth-token": token },
    //   });
    //    return resp.data
    return{sccess:true,msg:"posted"}
    } catch (error) {
      console.error(
        "Error in updating item:",
        error.response?.data || error.message
      );
    }
  };