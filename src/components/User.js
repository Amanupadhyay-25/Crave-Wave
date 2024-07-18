import { useEffect, useState } from "react";

const User =(props)=>{
    const {name,location}=props;
    const [count,setcount]=useState(0);

    const Increment=()=>{
        setcount(count+1);
    }

    useEffect(()=>{

    },[])

    return(
        <div className="user-card">
            <h3 onClick={Increment}>Count : {count}</h3> 
            <h3>Name : {name} </h3>
            <h3>Location : {location}</h3>
            <h3>Instagram Id: uritvik@0728</h3>
        </div>
    );
};

export default User;