'use client';
import { createContext, useContext, useState } from "react";

const Context = createContext();

export function PlayerProvider({ children }) {
  const [player, setPlayer] = useState(undefined);
  const [activeContext, setActiveContext] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setPlayingState] = useState(false);

  const setIsPlaying = (newState) => {
    if (player) {
      player.togglePlay();
      setPlayingState(newState)
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
  }

  return (
    <Context.Provider value={contextValue}>{children}</Context.Provider>
  );
}

export function usePlayerProvider() {
  return useContext(Context);
}