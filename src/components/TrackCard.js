import { PlayIcon } from "@heroicons/react/24/solid";

const TrackCard = ({ track, onClick }) => {

  return (
    <div className="
      group
      rounded-lg 
      p-3 
      h-full 
      bg-zinc-900 
      hover:bg-zinc-800"
      onClick={onClick}>

      <div className="relative">

        <div className="
        absolute 
        bottom-3 
        right-3 
        hidden 
        flex-col 
        items-center 
        gap-2 
        group-hover:block">
          <PlayIcon className="
          h-12 
          w-12 
          p-3 
          rounded-full 
          bg-green-500 
          hover:bg-green-400
          text-black
          hover:scale-[107%]" />
        </div>

        <img
          src={track.album.images[0].url}
          alt={`Cover of the ${track.album_type} ${track.name}`}
          className="rounded-md"
        />
      </div>

      <div className="
        text-center
        font-bold
        w-full 
        h-1/3 
        text-[1.2em]
        mt-3">
        <span>
          {track.name}
        </span>
      </div>

    </div>
  );
};

export default TrackCard;