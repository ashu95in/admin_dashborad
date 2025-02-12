export const hitLoginApi = async (loginData,func) => {
    func(true);
    if(loginData.userName=="ashutosh95"&&loginData.password=='123456789'||true){
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            status:true,
            msg: "Login successful! Hello, user.",
            token: "sdf4s64f56465s4df45",
          });
        }, 1000);
      });

    } 
    else{
      return {
        status:false,
        msg:'login fail'
      }
    }

  };