import Header from "../Header";
import useNowPlayingMovies from "../../customHooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../../customHooks/usePopularMovies";
import useTopMovies from "../../customHooks/useTopMovies";
import useUpcomingMovies from "../../customHooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearch from "../GPTSearch/GPTSearch";

const Broswer = () => {
  const showGPTSearch = useSelector((state) => state.gpt.showGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />

      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Broswer;
