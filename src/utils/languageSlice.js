import { createSlice } from "@reduxjs/toolkit";

const languageSlice=createSlice({
    name:"language",
    initialState:{
        languageSeleted:"en"
    },
    reducers:{
       changeLanguage:(state,action)=>{
          state.languageSeleted=action.payload
       }
    }
})

export default languageSlice.reducer

export const {changeLanguage}=languageSlice.actions