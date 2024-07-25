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
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-500
        transition transform hover:-translate-y-1 hover:scale-105">
          <img
          className="rounded-lg"
          alt="nahi-dikha"
            src=
            {CDN_URL+cloudinaryImageId}
          />
          <h3 className="font-bold py-3 text-lg">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
         <h4>{avgRating} stars</h4>
         <h4>{costForTwo} FOR TWO</h4>
         <h4>{sla?.slaString} minutes</h4>
         <h4>{loggedInUser}</h4>
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
    