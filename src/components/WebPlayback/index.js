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

      player.addListener('ready', ({ device_id }) => {
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
    return (
      <>
        No activo
      </>)
  }

  return (
    <>
      <button className="btn-spotify" onClick={() => { setIsPlaying(!isPlaying) }} >
        {isPlaying ? "PAUSE" : "PLAY"}
      </button>
      {/* <div className="container">
        <div className="main-wrapper">
          <img src={current_track.album.images[0].url}
            className="now-playing__cover" alt="" />

          <div className="now-playing__side">
            <div className="now-playing__name">{
              current_track.name
            }</div>

            <div className="now-playing__artist">{
              current_track.artists[0].name
            }</div>
          </div>

          <button className="btn-spotify" onClick={() => { player.previousTrack() }} >
            &lt;&lt;
          </button>

          <button className="btn-spotify" onClick={() => { player.togglePlay() }} >
            {is_paused ? "PLAY" : "PAUSE"}
          </button>

          <button className="btn-spotify" onClick={() => { player.nextTrack() }} >
            &gt;&gt;
          </button>
        </div>
      </div> */}
    </>
  )
}

export default WebPlayback