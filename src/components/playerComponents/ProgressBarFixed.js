import { useState, useEffect } from "react";
import { usePlayerProvider } from "@/context/playerProvider";
import { millisToMinutesAndSeconds } from '@/utils/playerUtils';

const ProgressBarFixed = () => {
  const { player, activeContext, isPlaying } = usePlayerProvider();
  const [duration, setDuration] = useState(0)
  const [value, setValue] = useState(0)
  const [updateTime, setUpdateTime] = useState(true)

  useEffect(() => {
    player.getCurrentState().then(state => {
      setDuration(state.duration)
      setValue(state.position)
    })
  }, [activeContext])

  if (updateTime && value < duration) {
    player.getCurrentState().then(state => {
      setValue(state.position)
    })
    if (isPlaying) {
      setUpdateTime(false)
      setTimeout(() => setUpdateTime(true), 1000)
    }
  }

  const handleSeekTo = (event) => {
    player.seek(event.target.value)
  }

  return (
    <div className="flex items-center gap-2">
      {millisToMinutesAndSeconds(value)}

      <input
        className="w-full md:w-[300px]"
        type='range'
        min='0'
        max={duration}
        value={value}
        onChange={handleSeekTo} />

      {millisToMinutesAndSeconds(duration)}
    </div>
  )
}

export default ProgressBarFixed;