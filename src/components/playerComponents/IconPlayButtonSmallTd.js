import { usePlayerProvider } from "@/context/playerProvider";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import PlayPauseButton from "./PlayPauseButton";

const IconPlayButtonSmallTd = ({ thisIsActive, handleSetTrack }) => {
  const { isPlaying, togglePlayPause } = usePlayerProvider();

  const containerStyle = `
  block 
  md:${thisIsActive ? 'block' : 'hidden'} 
  group-hover:block`
  const iconStyle = `h-[1rem]`

  const handleClick = () => {
    if (thisIsActive) {
      togglePlayPause();
      return
    }

    handleSetTrack()
  }

  return (
    <PlayPauseButton
      thisIsActive={thisIsActive}
      isPlaying={isPlaying}
      handleClick={handleClick}
      containerStyle={containerStyle}
      iconStyle={iconStyle}
    />
  )
}

export default IconPlayButtonSmallTd