import { usePlayerProvider } from "@/context/playerProvider";

const VolumeRockerFixed = () => {
  const { localVolume, setLocalVolume } = usePlayerProvider();

  const handleVolumeChange = (event) => {
    setLocalVolume(event.target.value / 100)
  }

  return (
    <input
      type='range'
      min='0'
      max='100'
      defaultValue={localVolume * 100}
      onChange={handleVolumeChange} />
  )
}

export default VolumeRockerFixed