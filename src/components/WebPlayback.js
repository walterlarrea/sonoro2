'use client';
import React, { useState, useEffect, useRef } from 'react';
import { getStore, setStore } from "@/services/localStore";
import { useTrackProvider } from '@/context/trackProvider';
import { startPlayingAlbumOrPlaylist, startPlayingTrack } from '@/services/playerService';
import { PlayCircleIcon } from '@heroicons/react/24/solid';

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
  const [player, setPlayer] = useState(undefined);
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  const [current_track, setTrack] = useTrackProvider();
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

        setPaused(state.paused);

        player.getCurrentState().then(state => {
          (!state) ? setActive(false) : setActive(true)
        });
      }));

      player.connect();
    };
  }, []);

  useEffect(() => {
    if (current_track) {
      if (current_track.uri.search('track') >= 0) {
        startPlayingTrack(current_track.uri, getStore("device_id"))
      }
      if (current_track.uri.search('album') >= 0) {
        startPlayingAlbumOrPlaylist(current_track.uri, getStore("device_id"))
      }
      if (current_track.uri.search('playlist') >= 0) {
        startPlayingAlbumOrPlaylist(current_track.uri, getStore("device_id"))
      }
      setPaused(false)
    }
  }, [current_track])

  if (!is_active) {
    return (
      <>
        No activo
      </>)
  }

  return (
    <>
      <button className="btn-spotify" onClick={() => { player.togglePlay() }} >
        {is_paused ? "PLAY" : "PAUSE"}
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