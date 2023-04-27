import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import stateSlice from "./stateSlice";
import topProductSlice from "./topProductSlice";
import citySlice from "./citySlice";
import userSlice from "./userSlice";


const store = configureStore({
    reducer:{
        category:categorySlice,
        state:stateSlice,
        topProduct:topProductSlice,
        city:citySlice,
        user:userSlice,
       
        
    }
})

export default store;