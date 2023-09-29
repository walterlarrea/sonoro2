import { usePlayerProvider } from "@/context/playerProvider";
import WebPlayback from "../WebPlayback";
import VolumeRockerFixed from "./VolumeRockerFixed";
import PlayPauseButton from "./PlayPauseButton";
import ProgressBarFixed from "./ProgressBarFixed";
import PlayingTrackDetails from "./PlayingTrackDetails";

const Player = () => {
  const {
    isActive,
    togglePlayPause,
    currentPlayingTrack
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
    <div className="relative custom-bottom-player left-0 right-0 bottom-0 mb-2 mx-4">
      {isActive &&
        <div className="flex flex-col gap-4 justify-between items-center md:flex-row">
          <div className="flex flex-nowrap gap-4">
            <PlayPauseButton
              thisIsActive={true}
              handleClick={handleClick}
              containerStyle={containerStyle}
              iconStyle={iconStyle} />
            <VolumeRockerFixed />
          </div>
          <ProgressBarFixed />
          <PlayingTrackDetails track={currentPlayingTrack} />
        </div>
      }
      <WebPlayback />
    </div>
  )
}

export default Player