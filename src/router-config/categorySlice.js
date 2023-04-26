import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiEndPoint } from "../webApi/webapi";

export const fetchCategory = createAsyncThunk('fetchCategory',async ()=>{
  let response = await axios.get(apiEndPoint.CATEGORY_API);
  console.log("Category : "+response);
  if(response.data.status){
    console.log(response.data)
  return response.data.category
  }
})


const slice = createSlice({
    name:'category',
    initialState:{
      categoryList:[],
      isLoading:false,
      error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCategory.pending,(state,action)=>{
             state.isLoading = true;
        }).addCase(fetchCategory.fulfilled,(state,action)=>{
            state.categoryList = action.payload
            state.isLoading=false;
        }).addCase(fetchCategory.rejected,(state,action)=>{
            state.isLoading=false;
            state.error="oops Something Went Wrong"
        })
    }

})

export default slice.reducer;