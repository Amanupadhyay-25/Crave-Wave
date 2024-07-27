import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";


const RestaurantCard = (props) => {

 const {loggedInUser} = useContext(UserContext); //Here using Contex API

    const {resData} = props;
  
    const {cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    } = resData?.info;


      
    return (
        <div className="w-80 m-3 h-auto bg-gray-100 mb-10  mt-10 rounded-3xl shadow-2xl p-6  flex flex-col hover:bg-gray-100  shadow-slate-300 ">

          <div>
          <img
           className="w-80  h-64 rounded-lg "
          alt="nahi-dikha"
            src=
            {CDN_URL+cloudinaryImageId}
          />
          </div>

          <div className="w-72 ">
          <p className=" font-semibold mt-4 ">{name}</p>

          <p className="text-slate-600 ">{cuisines.slice(0, 3).join(" ,")}</p>

        </div>

          <div className="flex justify-between text-center items-center mt-3 text-slate-600 mb-3">

          <p className=" px-1 text-white  bg-green-600">⭐{avgRating} </p>
          <p className="p-1">{sla?.deliveryTime}min</p>
          <p className="p-1" >{costForTwo }</p>
          <h4>{loggedInUser}</h4>
        </div>
        
        </div>
      );
    };

    //Higher Order Components
    // input-RestaurantCard =>> RestaurantCardPromoted
    export const withPromotedLabel=(RestaurantCard)=>{
      return (props)=>{
        return(
          <div>
          <label className="absolute z-10 m-2 p-2 bg-black text-white rounded-lg">Promoted</label>
          <RestaurantCard {...props}/>
          </div>
        );
      };
    };


    export default RestaurantCard;
    