import { PlayIcon } from "@heroicons/react/24/solid";
import { useTrackProvider } from "@/context/trackProvider";

const AlbumCard = ({ album, onClickCard }) => {
  const [current_track, setTrack] = useTrackProvider();

  const handlePlayAlbum = () => {
    setTrack(album);
  }

  return (
    <div className="
    group
    rounded-lg 
    p-3 
    h-full 
    bg-zinc-900 
    hover:bg-zinc-800"
      onClick={onClickCard}>

      <div className="relative">

        <div className="
        absolute 
        bottom-3 
        right-3 
        hidden 
        flex-col 
        items-center 
        gap-2 
        group-hover:block"
          onClick={handlePlayAlbum}>
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
          src={album?.images[0]?.url}
          alt={`Cover of the ${album.album_type} ${album.name}`}
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
          {album.name}
        </span>
      </div>
    </div>
  );
}

export default AlbumCard;