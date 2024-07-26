//Step-1:- The first step of redux toolkit is to create store which contain slices in it 

import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore=configureStore({
      reducer:{
        cart:cartReducer,
      }
})

export default appStore;