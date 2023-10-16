import {BsFillPlayFill} from "react-icons/bs"


const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-[15%] px-14 absolute bg-gradient-to-r from-black  text-white w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/2 py-6 text-lg font-semibold text-justify">{description}</p>

      <div className="flex gap-3">
        <button className="bg-white text-black text-lg font-bold hover:bg-opacity-80 rounded-lg p-4 px-12">Play</button>
        <button className="bg-gray-500 text-white text-lg font-bold bg-opacity-60 rounded-lg p-4 px-12 hover:bg-opacity-80">More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
