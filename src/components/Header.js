import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header=()=>{
      
    const [reactbtn,setreactbtn]=useState("Login");
    console.log("Header Render");
 
//If we dont pass any dependency array in useEffect then it would render every time as state chnages     
    useEffect(()=>{
      console.log("useEffect Render")
    },[]);

    return(
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo"
                src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                   <li>Home</li>
                   <li>Cart</li>
                   <li>Contact</li>
                   <li>Home</li>
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