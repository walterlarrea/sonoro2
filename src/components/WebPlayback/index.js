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
    setPlayer,
    isActive,
    setIsActive,
    activeContext,
    setCurrentPlayingTrack,
    setIsPlaying,
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

        setCurrentPlayingTrack(state.track_window.current_track)
        setIsPlaying(!(state.paused));

        player.getCurrentState().then(state => {
          (!state) ? setIsActive(false) : setIsActive(true)
        });
      }));

      const setPlayerInitialStatus = async () => {
        const mainVolume = await player.getVolume()

        setLocalVolume(mainVolume)
      }
      setPlayerInitialStatus()

      player.connect();
    };
  }, []);

  useEffect(() => {
    if (activeContext?.[0]?.uri) {
      if (activeContext[0].uri.search('track') >= 0) {
        const uriList = activeContext.map(track => track.uri)
        startPlayingTrack(uriList, getStore("device_id"), activeContext[0]?.trackToPlay)
      }
      if (activeContext[0].uri.search('album') >= 0 || activeContext[0].uri.search('playlist') >= 0) {
        startPlayingAlbumOrPlaylist(activeContext[0].uri, getStore("device_id"), activeContext[0].trackToPlay)
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