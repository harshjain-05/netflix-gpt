import { useSelector } from "react-redux"
import VideoTitle from "../VideoComponents/VideoTitle"
import VideoBackGround from "../VideoComponents/VideoBackground"


const MainContainer=()=>{

    const movies=useSelector((state)=>state.movies?.nowPlayingMovies)
    if(movies.length===0) return
    const mainMovie=movies[Math.floor(Math.random() * movies.length)]


    return(
        <div>
             <VideoTitle title={mainMovie.original_title} description={mainMovie.overview}/>
             <VideoBackGround movieId={mainMovie.id}/>
        </div>
    )
}

export default MainContainer