import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'admin',
    initialState:{
        currentadmin:null,
        isError:false
    },
    reducers:{
     setCurrentAdmin:(state,action)=>{
        
        state.currentadmin=action.payload;
     },
     signout:(state,action)=>{
        state.currentadmin=null;
     }
    
    }
})

export const {setCurrentAdmin,signout}= slice.actions;
export default slice.reducer;