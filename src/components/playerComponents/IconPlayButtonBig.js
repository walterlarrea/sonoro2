import { usePlayerProvider } from "@/context/playerProvider";
import PlayPauseButton from "./PlayPauseButton";

const IconPlayButtonBig = ({ thisIsActive, handleSetTrack }) => {
  const { togglePlayPause } = usePlayerProvider();

  const containerStyle = `
    absolute 
    bottom-3 
    right-3 
    z-10 
    block 
    md:${thisIsActive ? 'block' : 'hidden'} 
    flex-col 
    items-center 
    gap-2 
    group-hover:block`
  const iconStyle = `
    h-12 
    w-12 
    p-3 
    rounded-full 
    bg-green-500 
    hover:bg-green-400 
    hover:scale-[107%]`

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

export default IconPlayButtonBig