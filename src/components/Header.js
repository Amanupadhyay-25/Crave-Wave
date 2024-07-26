import { useEffect, useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useonlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header=()=>{
      
    const [reactbtn,setreactbtn]=useState("Login");
    // console.log("Header Render");

    const onlineStatus=useOnlineStatus();

    const {loggedInUser}=useContext(UserContext); //Context API

    //subscribing to the store using a selector
    const cartItems=useSelector((store)=>store.cart.items);
 
//If we dont pass any dependency array in useEffect then it would render every time as state chnages   
//If dependency array is empty => []=> useEffect array is called on Initial render(just once)
//If dependency array ok is [reactbtn]=>useEffect array is called evrytime when reactbtn is updated  
    useEffect(()=>{
    //   console.log("useEffect Render")
    },[]);

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg ">
            <div className="logo-container">
                <img 
                className="w-56"
                src={LOGO_URL} />
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">Online Status:{onlineStatus?"🟢":"🔴"}</li>
                   <li className="px-4"><Link to="/">Home</Link></li>
                   <li className="px-4"><Link to="/about">About Us</Link></li>
                   <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                   <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                   <li className="px-4 font-bold text-xl"><Link to="/cart">Cart({cartItems.length})</Link></li>
                   <li className="px-4">Login</li>
                   <button className="px-4"
                   type="text"
                   value={reactbtn}
                   onClick={()=>{
                      reactbtn==="Login"
                      ? setreactbtn("Logout")
                      :setreactbtn("Login")
                   }}
                   >{reactbtn}</button>
                   <li className="font-bold">{loggedInUser}</li>
                </ul>   
            </div>
        </div>
    );
};

export default Header