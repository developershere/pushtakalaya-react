import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import stateSlice from "./stateSlice";
import topProductSlice from "./topProductSlice";
import citySlice from "./citySlice";

const store = configureStore({
    reducer:{
        category:categorySlice,
        state:stateSlice,
        topProduct:topProductSlice,
        city:citySlice
        
    }
})

export default store;