import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../../utils/movieSlice";
import useMovieTrailer from "../../customHooks/useMovieTrailer";

const VideoBackGround = ({ movieId }) => {

    useMovieTrailer(movieId)
  
  
    const trailer = useSelector((state) => {
    return state.movies.trailer;
  });

 
 

  return (
    <div className="w-screen aspect-video">
      {trailer && (
        <iframe
          src={"https://www.youtube.com/embed/" + trailer?.key +"?&autoplay=1&mute=1" }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-screen aspect-video"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackGround;
