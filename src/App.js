import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy } from "react";
// import Grocery from "./components/Grocery";

//Chunking
//Dynamic Bundling
//Lazy Loading
//Code Splitting
//ondemand loading
//dynamix import

const Grocery=lazy(()=>import("./components/Grocery"));

const Allayout=()=>{
    return(
       <div className= "app">
         <Header/> 
         <Outlet/>
         </div>
    );
};

//Here we make use of createRouterBrowser and its take a list of object and object contain the path and the element

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Allayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:(
          <Suspense fallback={<h1>Loading...</h1>}>
          <Grocery/>
          </Suspense>
        ),
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  }
]);

// Get the root element and render the parent element into it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);