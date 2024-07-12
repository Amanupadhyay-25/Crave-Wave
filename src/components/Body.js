import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



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
    // console.log(json);

    console.log(json.data.success.cards[0]?.gridWidget?.gridElements?.infoWithStyle.restaurants);
 
    // Optional Chaining
    setListOfRestaurant(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant( 
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))}
        </div>
        </div>
    );
};

export default Body