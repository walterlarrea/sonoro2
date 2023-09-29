import { usePlayerProvider } from "@/context/playerProvider";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";

const VolumeRockerFixed = () => {
  const { localVolume, setLocalVolume } = usePlayerProvider();

  const handleVolumeChange = (event) => {
    setLocalVolume(event.target.value / 100)
  }

  return (
    <div className="flex items-center gap-2">
      <SpeakerWaveIcon className="w-5 h-5 text-[#181818] dark:text-[#eeeeee]" />
      <input
        type='range'
        min='0'
        max='100'
        defaultValue={localVolume * 100}
        onChange={handleVolumeChange} />
    </div>
  )
}

export default VolumeRockerFixed