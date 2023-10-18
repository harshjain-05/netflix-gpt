import { createSlice } from "@reduxjs/toolkit";

const gptSLice=createSlice({
    name:"GPT",
    initialState:{
        showGPTSearch:false
    },
    reducers:{

        toggleGPTSearchView:(state)=>{

            state.showGPTSearch=!state.showGPTSearch
        }
    }
})

export default gptSLice.reducer
export const{toggleGPTSearchView}=gptSLice.actions