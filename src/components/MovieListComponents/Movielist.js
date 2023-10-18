import MovieCard from "./MovieCard";
import "./movieList.css"

const MovieList = ({ title, movies }) => {
   
  if (movies.length === 0) return;

  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar ">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
           ))} 
        </div>
      </div>
    </div>
  );
};

export default MovieList;
