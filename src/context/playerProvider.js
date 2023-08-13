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
  const [isActive, setIsActive] = useState(false);
  const [activeContext, setContext] = useState(null);
  const [currentPlayingTrack, setCurrentPlayingTrack] = useState(null)
  const [isPlaying, setPlayingState] = useState(false);
  const [localVolume, setVolume] = useState(0.3);

  const togglePlayPause = () => {
    player?.togglePlay().then(p =>
      player.getCurrentState().then(state =>
        setPlayingState(!(state.paused))
      )
    )
  }

  const setIsPlaying = (newState) => {
    if (player) {
      newState ? player.resume()
        : player.pause()
      setPlayingState(newState)
    }
  }

  // const isPlaying = () => {
  //   const playerState = getPlayerState()
  //   return !(playerState.paused)
  // }

  const setActiveContext = (newContext) => {
    // Acepta un objeto { uri: 'ejemplo:jhd9823yhd3' }
    setContext(newContext)
  }

  // const activeContext = () => {
  //   const playerState = getPlayerState()
  //   return playerState?.context
  // }

  const setLocalVolume = (newVolumeValue) => {
    if (typeof newVolumeValue === 'number' && newVolumeValue >= 0 && newVolumeValue <= 1) {
      player?.setVolume(newVolumeValue)
      setVolume(newVolumeValue)
    }
  }

  const contextValue = {
    player,
    setPlayer,
    activeContext,
    setActiveContext,
    currentPlayingTrack,
    setCurrentPlayingTrack,
    isActive,
    setIsActive,
    isPlaying,
    togglePlayPause,
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