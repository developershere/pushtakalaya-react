import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiEndPoint } from "../webapi/api";

const slice = createSlice({
    name:'category',
    initialState:{
      categoryList:[],
      isLoading:false,
      error:null
    },
    reducers:{
    setCategory:(state,action)=>{
        console.log(action.payload);
         state.categoryList=action.payload;
    }

  }
})
export const {setCategory}=slice.actions;
export default slice.reducer;