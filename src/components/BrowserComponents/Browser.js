import Header from "../Header"
import useNowPlayingMovies from "../../customHooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";



const Broswer =()=>{

   useNowPlayingMovies()
   
  return(
    <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )

}

export default Broswer