import RestaurantCard ,{withPromotedLabel}from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useonlineStatus";



const Body=(props)=>{

  const [listOfRestaurants,setListOfRestaurant]=useState([]);
  const [filteredRestaurant,setfilteredRestaurant]=useState([]);

  console.log(listOfRestaurants);


  const [searchText,setsearchText]=useState("");

  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);


  useEffect(()=>{
   fetchData();
  },[]);


  const fetchData = async () => {
    const data = await fetch(
     "https://www.swiggy.com/mapi/homepage/getCards?lat=28.6790687&lng=77.4992424"
    );

    const json = await data.json();
    console.log(json);
 
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
        <div className="filter flex">
        <div className="search m-4 p-4" >
        <input 
        className="border border-solid border-black "
          type="text"
          value={searchText}
          onChange={(e)=>{
              setsearchText(e.target.value);
          }}
        />
        <button
        className="px-4 py-1 bg-green-200 m-4 rounded-lg"
         onClick={()=>{
          const filteredRestaurant=listOfRestaurants.filter((res)=>{
            return  res.info.name.toLowerCase().includes(searchText.toLowerCase())
          })
          setfilteredRestaurant(filteredRestaurant);
         }}
        >Search</button> 
        </div> 
        <div className="search m-4 p-4 flex items-center ">
         < button className="px-4 py-2 bg-gray-400 rounded-lg"
         onClick={()=>{
          const filteredlist =listOfRestaurants.filter((res)=>
            res.info.avgRating>3.8
          )
          setListOfRestaurant(filteredlist);
         }}>
          Top-Rated Restaurant
          </button>
          </div>
         </div>
        <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant)=>(
            <Link 
            key={restaurant.info.id}
            to={"/restaurants/"+restaurant.info.id}>
             { 
             //check id prototed true then add it in and enhance RestaurantCard otherwise print card without promoted label 
              restaurant.info.promoted? <RestaurantCardPromoted  resData={restaurant} 
              />:<RestaurantCard  resData={restaurant}/>
             } 
            </Link>
          ))}
        </div>
        </div>
    );
};

export default Body