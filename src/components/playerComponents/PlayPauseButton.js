import { usePlayerProvider } from "@/context/playerProvider";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

const PlayPauseButton = ({ thisIsActive, handleClick, containerStyle, iconStyle }) => {
  const { isPlaying } = usePlayerProvider();

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