import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies=()=>{
    const  dispatch=useDispatch()
    
    useEffect(()=>{
        getPopularMovies()
    },[])

    const getPopularMovies=async()=>{
        const response= await fetch('https://api.themoviedb.org/3/movie/popular?page=3', API_OPTIONS)
        const movieData= await response.json()
        dispatch(addPopularMovies(movieData.results))

    }


}

export default usePopularMovies