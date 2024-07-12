import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const Allayout=()=>{
    return(
       <div className= "app">
         <Header/> 
         <Body/>
         </div>
    );
};

//Here we make use of createRouterBrowser and its take a list of object and object contain the path and the element

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Allayout/>
  },
  {
    path:"/about",
    element:<About/>
  }
])

// Get the root element and render the parent element into it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);