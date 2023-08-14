import { usePlayerProvider } from "@/context/playerProvider";
import WebPlayback from "../WebPlayback";
import VolumeRockerFixed from "./VolumeRockerFixed";
import PlayPauseButton from "./PlayPauseButton";
import ProgressBarFixed from "./ProgressBarFixed";

const Player = () => {
  const {
    isActive,
    togglePlayPause,
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
      togglePlayPause();
    }
  }

  return (
    <div className="relative custom-bottom-player left-0 right-0 bottom-0">
      {isActive &&
        <div className="flex flex-row justify-center">
          <ProgressBarFixed />
          <PlayPauseButton
            thisIsActive={true}
            handleClick={handleClick}
            containerStyle={containerStyle}
            iconStyle={iconStyle} />
          <VolumeRockerFixed />
        </div>
      }
      <WebPlayback />
    </div>
  )
}

export default Player