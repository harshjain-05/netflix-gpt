import MovieList from "../MovieListComponents/Movielist";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20 pl-10">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        
        <MovieList title="Top Rated Movies" movies={movies.topMovies} />

        <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />

        <MovieList title="Popular Movies" movies={movies.popularMovies}/>


       
      </div>
    </div>
  );
};

export default SecondaryContainer;
