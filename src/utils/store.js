import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReudcer from "./movieSlice"
const store=configureStore({

    reducer:{
        user:userReducer,
        movies:movieReudcer
    }
})

export default store