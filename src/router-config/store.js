import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import stateSlice from "./stateSlice";
import topProductSlice from "./topProductSlice";
import userSlice from "./userSlice";


const store = configureStore({
    reducer:{
        category:categorySlice,
        state:stateSlice,
        topProduct:topProductSlice,
        user:userSlice,
       
        
    }
})

export default store;