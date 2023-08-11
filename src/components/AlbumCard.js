import { usePlayerProvider } from "@/context/playerProvider";
import IconPlayButtonBig from "./playerComponents/IconPlayButtonBig";

const AlbumCard = ({ album, onClickCard }) => {
  const { activeContext, setActiveContext, isPlaying } = usePlayerProvider();

  const handlePlayAlbum = () => {
    setActiveContext(album);
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
        <IconPlayButtonBig
          track={album}
          thisIsActive={activeContext?.id === album?.id}
          thisIsPlaying={isPlaying}
          handleSetTrack={handlePlayAlbum}
        />
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