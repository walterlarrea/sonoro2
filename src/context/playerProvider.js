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

  const setIsPlaying = (newState) => {
    if (player) {
      player.togglePlay();
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