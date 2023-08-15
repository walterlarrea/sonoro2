'use client';
import LoadingEqualizer from "@/components/Loader/LoadingEqualizer";
import { usePlayerProvider } from "@/context/playerProvider";

const Player = () => {
  const {
    player,
    activeContext,
    setActiveContext,
    isActive,
    setIsActive,
    isPlaying,
    setIsPlaying,
  } = usePlayerProvider();

  if (!player) {
    return (
      <LoadingEqualizer />
    )
  }

  return (
    <>
      Nada por ahora
    </>
  )
}

export default Player