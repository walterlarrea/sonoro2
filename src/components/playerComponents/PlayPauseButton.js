import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

const PlayPauseButton = ({ thisIsActive, isPlaying, handleClick, containerStyle, iconStyle }) => {

  return (
    <button onClick={handleClick} className={containerStyle}>
      {thisIsActive && isPlaying ?
        <PauseIcon className={iconStyle} />
        :
        <PlayIcon className={iconStyle} />
      }
    </button>
  )
}

export default PlayPauseButton