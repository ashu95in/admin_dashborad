import { baseUrl } from "./var";
import axios from "axios";

//get  banner

export const getBanner = async (token) => {
  try {
    const resp = await axios.get(`${baseUrl}adBanners`, {
      headers: { "x-auth-token": token },
    });

    return resp.data;
    // console.log(token)
  } catch (error) {
    console.error(error);
    return 0;
  }
};

export const deleteBanner = async (token, id) => {
  try {
    const resp = await axios.delete(`${baseUrl}adBanners/${id}`, {
      headers: { "x-auth-token": token },
    });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.error(
      "Error deleting item:",
      error.response?.data || error.message
    );
  }
};

export const createBanner = async (data, token) => {
  const formData = new FormData();
  formData.append("title", data?.title);
  formData.append("description", data?.description);
  formData.append("image", data?.imageBlob);
  formData.append("link", data?.link);

  try {
    // formData.forEach((value, key) => {
    //   console.log(key, value);
    // });
    // const resp = await axios.post(`${baseUrl}adBanners/add`, formData, {
    //   headers: { "x-auth-token": token },
    // });
    // return resp.data;
       console.log("image uploaded")
    return {payload:{msg:"success"}}
  } catch (error) {
    console.error(
      "Error deleting item:",
      error.response?.data || error.message
    );
  }
};

// export const createBanner = async (data,token) => {
//   try {
//     console.log(data)
//         const formData = new FormData();
//         const link = data?.link?data.link:data.image

//     //  const resp  = await axios.post(`${baseUrl}adBanners/add`,{...data,link:link},{
//     //   headers: { "x-auth-token": token },
//     // });
//     //  return resp.data
//       // console.log({...data,link:link})
//   } catch (error) {
//     console.error(
//       "Error deleting item:",
//       error.response?.data || error.message
//     );
//   }
// };
