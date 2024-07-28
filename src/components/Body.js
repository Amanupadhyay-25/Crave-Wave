import RestaurantCard ,{withPromotedLabel}from "./RestaurantCard";
import { useContext, useEffect, useState ,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useonlineStatus";
import UserContext from "../utils/UserContext";



const Body=(props)=>{

  const [listOfRestaurants,setListOfRestaurant]=useState([]);
  const [filteredRestaurant,setfilteredRestaurant]=useState([]);
  const [searchText,setsearchText]=useState("");

  // console.log(listOfRestaurants);


  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

  const {loggedInUser,setUserName}=useContext(UserContext);


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


  const onlineStatus=useOnlineStatus(true);
    
  if(!onlineStatus)
     return(
      <div className="w-3/4 m-auto rounded-2xl shadow-2xl shadow-gray-300 text-center mt-12 p-10 text-2xl font-semibold bg-yellow-50 ">
      <h2> 🔴 Offline, please check your internet connection!! </h2>
       </div>
    );

   return filteredRestaurant.length === 0?<Shimmer/>:(
    <>
      <div className="  shadow-2xl mb-10  m-auto rounded-2xl">
        <br></br>
        {/*  tailwind css for body component with responsiveness */}
        <div
          className="  flex justify-between  items-center  rounded-2xl mx-5 m-auto   
         xl:gap-0 xl:px-10 lg:gap-2 lg:px-10 lg:py-5 md:justify-center md:flex-wrap md:gap-2 sm:py-2 md:p-1   sm:flex-wrap sm:justify-center
           min-[300px]:flex-wrap min-[300px]:justify-center  min-[300px]:py-2 min-[300px]:gap-4
       shadow-lg text-center gap-5 bg-gray-100"
        >

        <div className="font-bold text-xl text-orange-600   lg:font-bold lg:text-base  ">
            <h2 className="text-lg">
              <span className="text-green-500 lg:px-2 text-2xl">Welcome to</span>
              Crave Wave
            </h2>
          </div>

         {/* input section  */}
        <div className=" flex  gap-5 mx-10 min-[300px]:justify-center  min-[300px]:flex-wrap " >
        <input 
       type="search"
       className="bg-gray-100 outline-none p-1 px-16 rounded-md text-green-700 min-[300px]:w-60  "
       placeholder="Search items..."
          value={searchText}
          onChange={(e)=>{
              setsearchText(e.target.value);
          }}
        />

        <button
        data-testid="search-btn"
              className=" bg-green-500  rounded-md p-2 text-white xl:p-2 xl:px-4  font-bold lg:p-0 lg:px-3  min-[320px]:px-4 min-[320px]:p-1"
         onClick={()=>{
          const filteredRestaurant=listOfRestaurants.filter((res)=>{
            return  res.info.name.toLowerCase().includes(searchText.toLowerCase())
          })
          setfilteredRestaurant(filteredRestaurant);
         }}
        >Search</button> 
      </div> 

     <div className="flex mx-5 gap-10  ">
      <button
        className=" py-1  bg-green-500  rounded-md text-white xl:p-2 xl:px-4  lg:p-1 lg:px-2 min-[320px]:p-1 "
              onClick={() => {
                const filteredlist = listOfRestaurants.filter(
                  (res) => res.info.avgRating < 3.0
                );

                setfilteredRestaurant(filteredlist);
              }}
            >
              3 ⭐ Rating
        </button>

        <button
              className=" p-2  bg-green-500  rounded-md text-white xl:p-2 xl:px-4  lg:p-1 lg:px-2 min-[320px]:p-1 "
              onClick={() => {
                const filteredlist = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4.0
                );

                setfilteredRestaurant(filteredlist);
              }}
            >
              4 ⭐ Rating
        </button>
      </div>      
      </div>

      <div 
        className="flex flex-wrap gap-2 justify-center "
        >
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
    </>
    );
};

export default Body