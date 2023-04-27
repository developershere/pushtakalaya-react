import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiEndPoint } from "../webApi/webapi";

 export const fetchState=createAsyncThunk('fetchState',async()=>{
    let response = await axios.get(apiEndPoint.STATE_API);
    if(response.data.status){
        console.log(response.data);
        return response.data.result;
    }
})


const slice = createSlice({
    name:'states',
    initialState:{
        stateList:[],
        isLoading:false,
        error:null

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchState.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(fetchState.fulfilled,(state,action)=>{
            state.stateList=action.payload
            state.isLoading=false
        }).addCase(fetchState.rejected,(state,action)=>{
              state.isLoading=false
              state.error="oops Something Went Wrong"
        })
    }
})

export default slice.reducer;