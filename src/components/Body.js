import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useonlineStatus";



const Body=(props)=>{

  const [listOfRestaurants,setListOfRestaurant]=useState([]);
  const [filteredRestaurant,setfilteredRestaurant]=useState([]);


  const [searchText,setsearchText]=useState("");


  useEffect(()=>{
   fetchData();
  },[]);


  const fetchData = async () => {
    const data = await fetch(
     "https://www.swiggy.com/mapi/homepage/getCards?lat=28.7108889&lng=77.2144538"
    );

    const json = await data.json();
 
    // Optional Chaining
    setListOfRestaurant(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant( 
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus=useOnlineStatus();
    
  if(onlineStatus===false)
     return(
  <h1>
    Heyy gunnnu !! Apna net toh on karlo !! 😍
    </h1>
    );

   return listOfRestaurants.length === 0?<Shimmer/>:(
        <div className="body">
        <div className="filter">
        <div className="search" >
        <input 
          type="text"
          value={searchText}
          onChange={(e)=>{
              setsearchText(e.target.value);
          }}
        />
        <button
         onClick={()=>{
          const filteredRestaurant=listOfRestaurants.filter((res)=>{
            return  res.info.name.toLowerCase().includes(searchText.toLowerCase())
          })
          setfilteredRestaurant(filteredRestaurant);
         }}
        >Search</button> 
        </div> 
         < button className="filter-btn"
         onClick={()=>{
          const filteredlist =listOfRestaurants.filter((res)=>
            res.info.avgRating>3.8
          )
          setListOfRestaurant(filteredlist);
         }}>
          Top-Rated Restaurant
          </button>
         </div>
        <div className="res-container">
        {filteredRestaurant.map((restaurant)=>(
            <Link 
            key={restaurant.info.id}
            to={"/restaurants/"+restaurant.info.id}>
            <RestaurantCard  resData={restaurant}/></Link>
          ))}
        </div>
        </div>
    );
};

export default Body