export const   formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };


  export const debounce =  (func,delay)=>{
    let timer ;
    return function(...args){
      clearTimeout(timer);
      timer= setTimeout(()=>{
        func.apply(this,args)
      },delay) 
    }
  }