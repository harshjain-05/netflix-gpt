import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTopMovies } from "../utils/movieSlice"
import { useEffect } from "react"

const useTopMovies=()=>{
    const  dispatch=useDispatch()
    
    useEffect(()=>{
        getTopMovies()
    },[])

    const getTopMovies=async()=>{
        const response= await fetch('https://api.themoviedb.org/3/movie/popular?page=2', API_OPTIONS)
        const movieData= await response.json()
        dispatch(addTopMovies(movieData.results))

    }


}

export default useTopMovies