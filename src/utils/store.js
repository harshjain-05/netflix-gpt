import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReudcer from "./movieSlice"
import gptReducer from "./gptSlice"
const store=configureStore({

    reducer:{
        user:userReducer,
        movies:movieReudcer,
        gpt:gptReducer
    }
})

export default store