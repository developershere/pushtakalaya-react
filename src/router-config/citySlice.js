import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiEndPoint } from "../webApi/webapi";


export const fetchCity  = createAsyncThunk("fetchCity", async () => {
    let response = await axios.get(apiEndPoint.CITY_API);
   
    return response.data.result;
});
   const slice = createSlice({
    name : "state",
    initialState : {
       cityList : [],
       error : null,
       isLoading : false

    },
      extraReducers: (builder) => {
          builder.addCase(fetchCity.pending, (state, action) => {
               state.isLoading = true;
           });
          builder.addCase(fetchCity.fulfilled, (state, action) => {
              state.cityList = action.payload;
               state.isLoading = false;
           });
          builder.addCase(fetchCity.rejected, (state, action) => {
               state.isLoading = false;
               state.error = "Oops! something went wrong...";
           });
       }
});



export default slice.reducer;
