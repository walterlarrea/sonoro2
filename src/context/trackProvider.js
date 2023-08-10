'use client';
import { createContext, useContext, useState } from "react";

const Context = createContext();

export function TrackProvider({ children }) {
  const [track, setTrack] = useState(null);
  return (
    <Context.Provider value={[track, setTrack]}>{children}</Context.Provider>
  );
}

export function useTrackProvider() {
  return useContext(Context);
}