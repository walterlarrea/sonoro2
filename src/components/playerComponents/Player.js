import { usePlayerProvider } from "@/context/playerProvider";
import WebPlayback from "../WebPlayback";
import IconPlayButtonBig from "./IconPlayButtonBig";
import VolumeRockerFixed from "./VolumeRockerFixed";
import PlayPauseButton from "./PlayPauseButton";

const Player = () => {
  const {
    player,
    activeContext,
    setActiveContext,
    isActive,
    setIsActive,
    isPlaying,
    setIsPlaying,
  } = usePlayerProvider();

  const containerStyle = ` 
    block 
    flex-col 
    items-center 
    gap-2`
  const iconStyle = `
    h-12 
    w-12 
    p-3 
    rounded-full 
    bg-green-500 
    hover:bg-green-400
    text-black`

  const handleClick = () => {
    if (isActive) {
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <div className="relative custom-bottom-player left-0 right-0 bottom-0">
      {isActive &&
        <div className="flex flex-row justify-center">
          <VolumeRockerFixed />
          <PlayPauseButton
            thisIsActive={true}
            isPlaying={isPlaying}
            handleClick={handleClick}
            containerStyle={containerStyle}
            iconStyle={iconStyle} />
        </div>
      }
      <WebPlayback />
    </div>
  )
}

export default Player