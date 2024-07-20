import { useEffect , useState} from "react";


const useOnlineStatus=()=>{
  const [onlineStatus,setonlineStatus]=useState(true);

    //Check online logic
    useEffect(()=>{
       window.addEventListener("offline",()=>{
        setonlineStatus(false);
    });
      window.addEventListener("online",()=>{
        setonlineStatus(true);
      })
    },[]);

    //return a boolean expression
    return onlineStatus;
}

export default useOnlineStatus;