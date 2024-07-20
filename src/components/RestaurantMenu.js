import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantmenu";
import { useParams } from "react-router-dom";

const RestaurantMenu=()=>{
  const {resId}=useParams();
  const resInfo=useRestaurantMenu(resId); //kalajadu karega

if(resInfo===null) return <Shimmer/>

const {name,cuisines,costForTwoMessage}=
resInfo?.cards[2]?.card?.card?.info;

const {itemCards}=
resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

console.log(itemCards);

    return(
        <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <ul>
          {itemCards.map(item=>(
            <li key={item.card.info.id}>{item.card.info.name}</li>
            ))}
        </ul>
        </div>
    );
};

export default RestaurantMenu;