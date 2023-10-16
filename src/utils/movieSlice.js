import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
   name:"movies",
   initialState:{
    nowPlayingMovies:[],
    trailer:null
   },
   reducers:{
      
    addPlayingMovies:(state,action)=>{
        state.nowPlayingMovies=action.payload
    },

    addTrailer:(state,action)=>{
        state.trailer=action.payload
    }

   }
})

export default movieSlice.reducer
export const {addPlayingMovies,addTrailer}=movieSlice.actions

