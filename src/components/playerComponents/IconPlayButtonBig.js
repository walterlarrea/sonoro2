import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

const IconPlayButtonBig = ({ thisIsActive, thisIsPlaying, togglePlayPause, handleSetTrack }) => {
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
  const IconStyle = `
    h-12 
    w-12 
    p-3 
    rounded-full 
    bg-green-500 
    hover:bg-green-400
    text-black
    hover:scale-[107%]`

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

export default IconPlayButtonBig