import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    topMovies: [],
    upcomingMovies:[],
    trailer: null,
  },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    addTopMovies: (state, action) => {
      state.topMovies = action.payload;
    },

    addUpcomingMovies: (state,action) => {
      state.upcomingMovies = action.payload;
    },

    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addPlayingMovies, addTrailer, addPopularMovies, addTopMovies ,addUpcomingMovies} = movieSlice.actions;
