import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useonlineStatus";


const Header=()=>{
      
    const [reactbtn,setreactbtn]=useState("Login");
    // console.log("Header Render");

    const onlineStatus=useOnlineStatus();
 
//If we dont pass any dependency array in useEffect then it would render every time as state chnages   
//If dependency array is empty => []=> useEffect array is called on Initial render(just once)
//If dependency array ok is [reactbtn]=>useEffect array is called evrytime when reactbtn is updated  
    useEffect(()=>{
    //   console.log("useEffect Render")
    },[]);

    return(
        <div className="flex justify-between bg-pink-100 ">
            <div className="logo-container">
                <img 
                className="w-56"
                src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4 ">
                    <li>Online Status:{onlineStatus?"🟢":"🔴"}</li>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/about">About Us</Link></li>
                   <li><Link to="/contact">Contact Us</Link></li>
                   <li><Link to="/grocery">Grocery</Link></li>
                   <li>Cart</li>
                   <li>Login</li>
                   <button className="btn"
                   type="text"
                   value={reactbtn}
                   onClick={()=>{
                      reactbtn==="Login"
                      ? setreactbtn("Logout")
                      :setreactbtn("Login")
                   }}
                   >{reactbtn}</button>
                </ul>   
            </div>
        </div>
    );
};

export default Header