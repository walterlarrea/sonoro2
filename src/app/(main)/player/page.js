'use client';
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

  return (
    <>
      Nada por ahora
    </>
  )
}

export default Player