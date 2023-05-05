import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiEndPoint } from "../webApi/webapi";
export const fetchCart = createAsyncThunk("cart/fetchCart", async(userId) => {
    let response = await axios.post(apiEndPoint.FETCH_CART, { userId });
    return response.data.cart;
});

export const removeFromCart = createAsyncThunk("cart/remove", async({userId,_id}) => {
let response = await axios.post(apiEndPoint.REMOVE_CART, {userId, _id });
   console.log(response.data);
   if(response.data.status)
    return response.data.cart.cartItems;
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
    },
    extraReducers:(builder)=>{
        builder.addCase(removeFromCart.fulfilled,(state,action)=>{
            console.log(action)
            state.cartItems = action.payload;
        })
    }
});
export const {setCartItems,setRemoveUpdate,flag} = slice.actions;
export default slice.reducer;