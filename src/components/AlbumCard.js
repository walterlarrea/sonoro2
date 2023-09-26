import { usePlayerProvider } from "@/context/playerProvider";
import IconPlayButtonBig from "./playerComponents/IconPlayButtonBig";

const AlbumCard = ({ album, onClickCard }) => {
  const { activeContext, setActiveContext } = usePlayerProvider();

  const handlePlayAlbum = () => {
    setActiveContext([album]);
  }

  return (
    <div className="
    group
    rounded-lg 
    h-full 
    bg-[#fee2b0] 
    hover:bg-[#fff3dd] 
    dark:bg-[#271900] 
    dark:hover:bg-[#3E2800] 
    overflow-hidden 
    shadow-neobrutalism"
      onClick={onClickCard}>

      <div className="relative">
        <IconPlayButtonBig
          thisIsActive={activeContext?.[0].id === album?.id}
          handleSetTrack={handlePlayAlbum}
        />
        <img
          src={album?.images[0]?.url}
          alt={`Cover of the ${album.album_type} ${album.name}`}
          className="border-b-2 border-[#080808] dark:border-[#e5fdba]"
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