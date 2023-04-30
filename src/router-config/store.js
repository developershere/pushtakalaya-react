import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import adminslice from "./adminslice";

const store = configureStore({
    reducer:{
        category:categorySlice,
        admin:adminslice
    }
})

export default store;