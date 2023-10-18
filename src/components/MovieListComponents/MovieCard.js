import { imageurl } from "../../utils/constants";


const MovieCard = ({ posterPath }) => {


  return (
    <div className="w-48 pr-4">
      <img src={imageurl + posterPath} />
    </div>
  );
};

export default MovieCard;
