'use client';
import { createContext, useContext, useState } from "react";

const Context = createContext();

const track = {
  name: "",
  album: {
    images: [
      { url: "" }
    ]
  },
  artists: [
    { name: "" }
  ]
}

export function PlayerProvider({ children }) {
  const [player, setPlayer] = useState(undefined);
  const [activeContext, setActiveContextState] = useState({ trackPlaying: null });
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setPlayingState] = useState(false);
  const [localVolume, setPlayerLocalVolume] = useState(0.3);

  const setIsPlaying = (newState) => {
    if (player) {
      player?.togglePlay();
      setPlayingState(newState)
    }
  }

  const setActiveContext = (newContext) => {
    if (newContext.type === 'track') {
      setActiveContextState({ type: 'track', trackPlaying: newContext })
      return
    }
    setActiveContextState(newContext)
  }

  const setLocalVolume = (newVolumeValue) => {
    if (typeof newVolumeValue === 'number' && newVolumeValue >= 0 && newVolumeValue <= 1) {
      player?.setVolume(newVolumeValue)
      setPlayerLocalVolume(newVolumeValue)
    }
  }

  const contextValue = {
    player,
    setPlayer,
    activeContext,
    setActiveContext,
    isActive,
    setIsActive,
    isPlaying,
    setIsPlaying,
    localVolume,
    setLocalVolume,
  }

  return (
    <Context.Provider value={contextValue}>{children}</Context.Provider>
  );
}

export function usePlayerProvider() {
  return useContext(Context);
}