import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies=()=>{
    const  dispatch=useDispatch()
    
    useEffect(()=>{
        getUpcomingMovies()
    },[])

    const getUpcomingMovies=async()=>{
        const response= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        const movieData= await response.json()
        dispatch(addUpcomingMovies(movieData.results))

    }


}

export default useUpcomingMovies