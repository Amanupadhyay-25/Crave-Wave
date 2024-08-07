import React, { Suspense, useState, useEffect, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import {Provider} from "react-redux";
// import Grocery from "./components/Grocery";

// Chunking
// Dynamic Bundling
// Lazy Loading
// Code Splitting
// On-demand loading
// Dynamic import


const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Make an API call and send a username and password
    const data = {
      name: ""
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName,setUserName }}> 
      <div className="app">
        <Header />
        <Outlet />
      </div>
      <div >
          <Footer />
        </div>
    </UserContext.Provider>
    </Provider>
  );
};

// Here we make use of createBrowserRouter, and it takes a list of objects. Each object contains the path and the element.
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
]);

// Get the root element and render the parent element into it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
