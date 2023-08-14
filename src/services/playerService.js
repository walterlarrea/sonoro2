import { getStore } from "@/services/localStore";
import axios from "axios";

const getToken = () => {
  const token = getStore("sonoro-session");
  const authToken = `Bearer ${token}`;

  return authToken;
}

export const transferPlaybackDevice = async (deviceId) => {
  const body = {
    "device_ids": [
      deviceId
    ],
    "play": true
  }
  const config = {
    headers: {
      "Authorization": getToken(),
      "Content-Type": 'application/json'
    }
  }

  try {
    const response = await axios.put('https://api.spotify.com/v1/me/player', body, config)

    return response.data
  } catch (error) {
    console.error(error)
    return error.response;
  }
}

export const startPlayingTrack = async (trackUris, deviceId, trackToPlayUri) => {
  const params = new URLSearchParams();
  if (deviceId !== undefined && deviceId !== null) {
    params.append("device_id", deviceId);
  }

  const body = {
    "uris": trackUris,
    "offset": trackToPlayUri ? {
      "uri": trackToPlayUri
    }
      : {
        position: 0
      },
    "position_ms": 0
  }
  const config = {
    headers: {
      "Authorization": getToken(),
      "Content-Type": 'application/json'
    }
  }

  try {
    const response = await axios.put(`https://api.spotify.com/v1/me/player/play?${params}`, body, config)

    return response
  } catch (error) {
    console.error(error)
    return error.response;
  }
}

export const startPlayingAlbumOrPlaylist = async (contextUri, deviceId, trackToPlayUri) => {
  const params = new URLSearchParams();
  if (deviceId !== undefined && deviceId !== null) {
    params.append("device_id", deviceId);
  }

  const body = {
    "context_uri": contextUri,
    "offset": trackToPlayUri ? {
      "uri": trackToPlayUri
    }
      : {
        position: 0
      },
    "position_ms": 0
  }
  const config = {
    headers: {
      "Authorization": getToken(),
      "Content-Type": 'application/json'
    }
  }

  try {
    const response = await axios.put(`https://api.spotify.com/v1/me/player/play?${params}`, body, config)

    return response
  } catch (error) {
    console.error(error)
    return error.response;
  }
}