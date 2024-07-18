import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"

const Header=()=>{
      
    const [reactbtn,setreactbtn]=useState("Login");
    // console.log("Header Render");
 
//If we dont pass any dependency array in useEffect then it would render every time as state chnages   
//If dependency array is empty => []=> useEffect array is called on Initial render(just once)
//If dependency array ok is [reactbtn]=>useEffect array is called evrytime when reactbtn is updated  
    useEffect(()=>{
    //   console.log("useEffect Render")
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
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/about">About Us</Link></li>
                   <li><Link to="/contact">Contact Us</Link></li>
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