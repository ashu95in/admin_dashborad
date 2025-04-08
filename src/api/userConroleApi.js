import { baseUrl } from "./var";
import axios from "axios";

export const getUserlist = async (id, page, type, plan) => {
  try {
    // const resp = await axios.get(`${baseUrl}user/?page=${page}/?type=all`, {
    //     headers: { "x-auth-token": token },
    //   });

    //   return resp.data;
    console.log("==", page, type, plan);
    return [
      {
        _id:'sdf5sdf54sdf778a5f54fsd5',
        name: "karan",
        phone_number: "+91 5845986589",
        balance: 0,
        type: "non referred",
        paid: "true",
      },
      {
        _id:'sdf5sdf54sdf778a5f54fsd5',
        name: "Arjun",
        phone_number: "+91 9876543210",
        balance: 0,
        type: "non referred",
        paid: "false",
      },
    ];
  } catch (error) {
    console.error("error found");
  }
};

export const getUserData = async (token, id) => {
  try {
    //    const resp   = await axios.get(`${baseUrl}/endpoint/?id=${id}`,{
    //     headers:{
    //         "x-auth-token":token
    //     }
    //    })
    //    return resp.data
    return {
      profile: {
        name: "ashu",
        email: "ashu@gmail.com",
        ph_no: "+91 8965896589",
      },
      wallet: {
        balance: 50000,
        last_transaction: "21/25/2025",
        total_transaction: 15,
      },
      plan: [
        { name: "free", expiry: "never" },
        { name: "Premium", expiry: "jun 30, 2025" },
        { name: "Premium", expiry: "April 2, 2025" },
        { name: "Premium", expiry: "aug 30, 2025" },
      ],
      wdrawl_req: [{ amount: 500, status: "pending", date: "2/12/2025" },{ amount: 500, status: "pending", date: "2/12/2025" },{ amount: 500, status: "failed", date: "2/12/2025" },{ amount: 500, status: "completed", date: "2/12/2025" }],
    };
  } catch (error) {
    console.error("error found");
  }
};
