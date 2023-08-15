import { usePlayerProvider } from "@/context/playerProvider";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";

const VolumeRockerFixed = () => {
  const { localVolume, setLocalVolume } = usePlayerProvider();

  const handleVolumeChange = (event) => {
    setLocalVolume(event.target.value / 100)
  }

  return (
    <div className="flex items-center group gap-2 mx-4">
      <SpeakerWaveIcon className="w-5 h-5 text-[#ffffff] group-hover:text-[#22C55E]" />
      <input
        className="group"
        type='range'
        min='0'
        max='100'
        defaultValue={localVolume * 100}
        onChange={handleVolumeChange} />
    </div>
  )
}

export default VolumeRockerFixed