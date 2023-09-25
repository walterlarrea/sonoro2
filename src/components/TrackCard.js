'use client';
// import { useRouter } from "next/navigation";
import { usePlayerProvider } from "@/context/playerProvider";
import IconPlayButtonBig from "./playerComponents/IconPlayButtonBig";

const TrackCard = ({ track, onClick }) => {
  const { currentPlayingTrack, setActiveContext } = usePlayerProvider();

  const handlePlayTrack = () => {
    setActiveContext([track]);
  }

  return (
    <div className="
      group 
      rounded-lg 
      p-3 
      h-full 
      bg-[#fee2b0] 
      hover:bg-[#fff3dd] 
      dark:bg-[#271900] 
      dark:hover:bg-[#3E2800] 
      border-2
      shadow-neobrutalism"
      onClick={onClick}>

      <div className="relative">
        <IconPlayButtonBig
          thisIsActive={currentPlayingTrack?.id === track?.id}
          handleSetTrack={handlePlayTrack}
        />
        <img
          src={track.album?.images[0]?.url}
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