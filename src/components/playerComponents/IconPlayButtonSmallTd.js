import { usePlayerProvider } from "@/context/playerProvider";
import PlayPauseButton from "./PlayPauseButton";

const IconPlayButtonSmallTd = ({ thisIsActive, handleSetTrack }) => {
  const { togglePlayPause } = usePlayerProvider();

  const containerStyle = `
  block 
  md:${thisIsActive ? 'block' : 'hidden'} 
  group-hover:block`
  const iconStyle = `h-[1.5rem]`

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
      handleClick={handleClick}
      containerStyle={containerStyle}
      iconStyle={iconStyle}
    />
  )
}

export default IconPlayButtonSmallTd