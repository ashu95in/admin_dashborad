import { baseUrl } from "./var";
import axios from "axios";


export const  logIn = async (loginData)=>{
        try{
          
            const resp =await  axios.post(`${baseUrl}admin/login`,loginData)
            console.log(resp)
            return resp.data
            
        }catch(eror){
          console.error("login failed")
          return false
        }
}