import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

const IconPlayButtonSmallTd = ({ thisIsActive, thisIsPlaying, togglePlayPause, handleSetTrack }) => {
  const containerStyle = `
  block 
  md:${thisIsActive ? 'block' : 'hidden'} 
  group-hover:block`
  const IconStyle = `h-[1rem]`

  const handleClick = () => {
    if (thisIsActive) {
      togglePlayPause();
      return
    }

    handleSetTrack()
  }

  return (
    <button onClick={handleClick} className={containerStyle}>
      {(thisIsActive && thisIsPlaying) ?
        <PauseIcon className={IconStyle} />
        :
        <PlayIcon className={IconStyle} />
      }
    </button>
  )
}

export default IconPlayButtonSmallTd