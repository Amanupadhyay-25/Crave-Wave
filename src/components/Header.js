import { useEffect, useState,useContext } from "react";
import { APP_URL} from "../utils/constants";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useonlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart,faHome, faEnvelope, faCircle , faInfoCircle } from "@fortawesome/free-solid-svg-icons";


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
        <div className="flex sticky z-50 top-0  justify-between bg-white text-black text-base    lg:justify-between 
        md:justify-between  md:flex-wrap sm:flex-wrap md:items-center sm:justify-center min-[425px]:flex-wrap min-[425px]:justify-center  min-[375px]:justify-center
        min-[375px]:flex-wrap  min-[320px]:flex-wrap  min-[320px]:justify-center
    
        shadow-lg  mb-4 text-center   items-center">

             <div >
        {/* logo  */}
        <Link to="/"> <img data-testid=" logo " className="h-20 mx-10   cursor-pointer" src={APP_URL} /></Link>
        </div>

            <div>
                <ul className="flex p-4 m-4 ">
                    <li className="px-4 text-xl">
                    <FontAwesomeIcon icon={faCircle} className={onlineStatus ? 'text-green-500' : 'text-gray-500'} /> {onlineStatus ? 'Online' : 'Offline'}
                    </li>
                   <li className="px-4 text-xl hover:text-red-900">
                    <Link to="/">
                    <FontAwesomeIcon icon={faHome} /> Home
                    </Link>
                    </li>
                   <li className="px-4 text-xl hover:text-red-900">
                    <Link to="/about">
                    <FontAwesomeIcon icon={faInfoCircle} /> About Us
                    </Link>
                    </li>
                   <li className="px-4 text-xl hover:text-red-900">
                    <Link to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} /> Contact Us
                    </Link>
                    </li>
                   <li className="px-4 font-bold text-xl hover:text-red-900">
                    <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart}/>{cartItems.length}
                    </Link>
                    </li>
                   <button className=" p-2  bg-green-500  lg:p-2 lg:px-4 rounded-md text-white font-bold hover:bg-gray-800 "
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