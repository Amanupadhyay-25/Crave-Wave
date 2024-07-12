import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";

const Allayout=()=>{
    return(
       <div className= "app">
         <Header/> 
         <Body/>
         </div>
    );
};

// Get the root element and render the parent element into it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Allayout/>);