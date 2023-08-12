'use client';
import React, { useEffect, useRef } from 'react';
import { getStore, setStore } from "@/services/localStore";
import { usePlayerProvider } from '@/context/playerProvider';
import { startPlayingAlbumOrPlaylist, startPlayingTrack } from '@/services/playerService';

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

function WebPlayback() {
  const {
    player,
    setPlayer,
    activeContext,
    isPlaying,
    setIsPlaying,
    isActive,
    setIsActive,
    localVolume,
    setLocalVolume,
  } = usePlayerProvider();
  const token = useRef(getStore("sonoro-session"));

  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {

      const player = new window.Spotify.Player({
        name: 'Sonoro Playback',
        getOAuthToken: cb => { cb(token.current); },
        volume: 0.5
      });

      setPlayer(player);

      player.addListener('ready', async ({ device_id }) => {
        console.log('Ready with Device ID', device_id);

        setStore("device_id", device_id)
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.addListener('player_state_changed', (state => {
        if (!state) {
          return;
        }

        setIsPlaying(!(state.paused));

        player.getCurrentState().then(state => {
          (!state) ? setIsActive(false) : setIsActive(true)
        });
      }));

      const setPlayerInitialStatus = async () => {
        const mainVolume = await player.getVolume()
        console.log(mainVolume)
        setLocalVolume(mainVolume)
      }
      setPlayerInitialStatus()

      player.connect();
    };
  }, []);

  useEffect(() => {
    if (activeContext) {
      if (activeContext.type === 'track') {
        startPlayingTrack(activeContext.trackPlaying.uri, getStore("device_id"))
      }
      if (activeContext.type === 'album' || activeContext.type === 'playlist') {
        startPlayingAlbumOrPlaylist(activeContext.uri, getStore("device_id"), activeContext.trackPlaying?.uri)
      }
      setIsPlaying(true)
    }
  }, [activeContext])

  if (!isActive) {
    return null
  }

  return (
    <>
      {/* <button className="btn-spotify" onClick={() => { setIsPlaying(!isPlaying) }} >
        {isPlaying ? "PAUSE" : "PLAY"}
      </button> */}
    </>
  )
}

export default WebPlayback