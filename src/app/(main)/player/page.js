'use client';
import React, { useState, useEffect, useRef } from 'react';
import { getStore } from "@/services/localStore";
import { useTrackProvider } from '@/context/playerProvider';
import { startPlayingTrack } from '@/services/playerService';

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

        // transferPlaybackDevice(device_id)
        if (!current_track) {
          return;
        }

        startPlayingTrack(current_track.uri, device_id)
        setPaused(false);
        setActive(true)
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.addListener('player_state_changed', (state => {
        if (!state) {
          return;
        }

        setTrack(state.track_window.current_track);
        setPaused(state.paused);

        player.getCurrentState().then(state => {
          (!state) ? setActive(false) : setActive(true)
        });
      }));

      // player.addListener('autoplay_failed', () => {
      //   console.log('Autoplay is not allowed by the browser autoplay rules');
      // });
      // player.on('initialization_error', ({ message }) => {
      //   console.error('Failed to initialize', message);
      // });
      // player.on('account_error', ({ message }) => {
      //   console.error('Failed to validate Spotify account', message);
      // });
      // player.on('playback_error', ({ message }) => {
      //   console.error('Failed to perform playback', message);
      // });

      player.connect();
    };
  }, []);

  if (!is_active) {
    return (
      <>
        <div className="container">
          <div className="main-wrapper">
            <b> Instance not active. Transfer your playback using your Spotify app </b>
          </div>
        </div>
      </>)
  }
  if (!current_track) {
    return (
      <>
        Cargando...
      </>
    )
  }

  return (
    <>
      <div className="container">
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
      </div>
    </>
  )
}

export default WebPlayback