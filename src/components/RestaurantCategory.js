import React,{ useState } from "react";
import ItemList from "./ItemList";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { IconContext } from "react-icons";

const RestaurantCategory=({data,showItems,setShowIndex})=>{

   const handleClick =()=>{
        setShowIndex()
    };

const [isVisible, setIsVisible] = useState("false");    

    return(
        <div>
        {/* Header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
           <div className="flex justify-between">
            <span className="font-bold text-lg cursor-pointer" onClick={handleClick}>
                {data.title} ({data.itemCards.length})
            </span>
            <button className='p-4' onClick={()=> setIsVisible("false")}>
            <IconContext.Provider value={{ size: "1.5em" }}>
                <div className="mr-2">
                  <BsCaretDown />
                </div>
              </IconContext.Provider>
           
            </button>
            </div>
           {showItems && <ItemList items={data.itemCards}/>}
        </div>
        </div>
    )
}

export default RestaurantCategory;