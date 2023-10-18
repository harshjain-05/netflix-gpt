import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReudcer from "./movieSlice"
import gptReducer from "./gptSlice"
import languageReducer from "./languageSlice"


const store=configureStore({

    reducer:{
        user:userReducer,
        movies:movieReudcer,
        gpt:gptReducer,
        language:languageReducer,
    }
})

export default store