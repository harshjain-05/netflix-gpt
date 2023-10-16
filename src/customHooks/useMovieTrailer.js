import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer=(movieId)=>{
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const data = await response.json();
      const filteredData = data.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filteredData.length ? filteredData[0] : data.results[0];
      dispatch(addTrailer(trailer));
    };
  
    useEffect(() => {
      getMovieVideos();
    }, []);


}

export default useMovieTrailer