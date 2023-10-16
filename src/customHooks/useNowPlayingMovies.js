import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies=()=>{
    const  dispatch=useDispatch()
    
    useEffect(()=>{
        getPlayingMovies()
    },[])

    const getPlayingMovies=async()=>{
        const response= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const movieData= await response.json()
        dispatch(addPlayingMovies(movieData.results))

    }


}

export default useNowPlayingMovies