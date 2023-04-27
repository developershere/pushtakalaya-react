import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiEndPoint } from "../webApi/webapi";
export const fetchCart = createAsyncThunk("cart/fetchCart", async(userId) => {
    let response = await axios.post(apiEndPoint.FETCH_CART, { userId });
    return response.data[0].cartItems;
});

export const addItemInToCart = createAsyncThunk("cart/addItemInToCart", async(obj) => {
    let response = await axios.post(apiEndPoint.ADD_TO_CART, { userId: obj.userId, productId: obj.productId });
    return response.data;
});
const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        cartError: null,
        flag: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            state.cartItems = action.payload;
        }).addCase(fetchCart.rejected, (state) => {
            state.cartError = "Oops! somehting went wrong..";
        }).addCase(addItemInToCart.pending, (state) => {
            state.flag = false;
        }).addCase(addItemInToCart.fulfilled, (state, action) => {
            state.flag = true;
        }).addCase(addItemInToCart.rejected, (state) => {
            state.cartError = 'Oops! something went wrong';
        });
    }
});

export default slice.reducer;