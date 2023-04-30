import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiEndPoint } from "../webApi/webapi";
export const fetchCart = createAsyncThunk("cart/fetchCart", async(userId) => {
    let response = await axios.post(apiEndPoint.FETCH_CART, { userId });
    return response.data.cart;
});

export const addItemInToCart = createAsyncThunk("cart/addItemInToCart", async(obj) => {
    let response = await axios.post(apiEndPoint.USER_CART, { userId: obj.userId});
    console.log(response.data.result);
    return response.data.result;
});
const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        cartError: null,
        flag: false
    },
    reducers:{
        setCartItems : (state,action)=>{
            state.cartItems = action.payload;
        },
        setflag : (state,action)=>{
            state.flag = true;
        }
    }
});
export const {setCartItems,flag} = slice.actions;
export default slice.reducer;