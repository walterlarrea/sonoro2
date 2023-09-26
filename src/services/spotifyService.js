import { getStore, removeStore } from "@/services/localStore";
import axios from "axios";

const getToken = () => {
  const token = getStore("sonoro-session");
  const authToken = `Bearer ${token}`;

  return authToken;
}

export const getNewReleases = async () => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/browse/new-releases/', {
      headers: { "Authorization": getToken() }
    })

    return response
  } catch (error) {
    console.error(error)
    return error.response;
  }
}

export const getAlbum = async (albumId) => {
  try {
    const response = await axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
      headers: { "Authorization": getToken() }
    })

    return response
  } catch (error) {
    console.error(error)
    return error.response;
  }
}

export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`https://api.spotify.com/v1/me`, {
      headers: { "Authorization": getToken() }
    })

    return response
  } catch (error) {
    console.error(error)
    return error.response;
  }
}

export const logout = async () => {
  removeStore("sonoro-session");
  removeStore("sonoro-refresh");
}

export const searchResults = async ({ searchText, types, market, genre, limit, offset }) => {
  const params = new URLSearchParams();
  params.append("q", searchText);
  params.append("type", types || ['album']);
  if (market !== undefined) {
    params.append("market", market);
  }
  if (genre !== undefined) {
    params.append("genre", genre);
  }
  params.append("limit", limit || 20);
  params.append("offset", offset || 0);

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?${params}`,
      {
        headers: { "Authorization": getToken() }
      })

    return response
  } catch (error) {
    console.error(error)
    return error.response;
  }
}

export const getRecommendations = async ({ seedGenres, seedTracks, seedArtists, market, limit, offset }) => {
  const params = new URLSearchParams();
  if (seedGenres !== undefined) params.append('seed_genres', seedGenres);
  if (seedTracks !== undefined) params.append("seed_tracks", seedTracks)
  if (seedArtists !== undefined) params.append("seed_artists", seedArtists)

  if (market !== undefined) params.append("market", market);

  params.append("limit", limit || 20);
  params.append("offset", offset || 0);

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/recommendations?${params}`,
      {
        headers: { "Authorization": getToken() }
      })

    return response
  } catch (error) {
    console.error(error)
    return error.response;
  }
}

export const getUserSavedSongs = async ({ market, limit, offset }) => {
  const params = new URLSearchParams();
  if (market !== undefined) {
    params.append("market", market);
  }
  params.append("limit", limit || 20);
  params.append("offset", offset || 0);

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/me/tracks?${params}`,
      {
        headers: { "Authorization": getToken() }
      })

    return response
  } catch (error) {
    console.error(error)
    return error.response;
  }
}

export const getUserPlaylists = async ({ limit, offset }) => {
  const params = new URLSearchParams();
  params.append("limit", limit || 20);
  params.append("offset", offset || 0);

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/me/playlists?${params}`,
      {
        headers: { "Authorization": getToken() }
      })

    return response
  } catch (error) {
    console.error(error)
    return error.response;
  }
}

export const getPlaylistDetail = async ({ playlistId, market, fields }) => {
  const params = new URLSearchParams();
  if (market !== undefined) {
    params.append("market", market);
  }
  if (fields !== undefined) {
    params.append("fields", fields);
  }

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlistId}?${params}`,
      {
        headers: { "Authorization": getToken() }
      })
    return response
  } catch (error) {
    console.error(error)
    return error.response;
  }
}

export const getRecentlyPlayedTracks = async ({ limit }) => {
  const params = new URLSearchParams();
  params.append("limit", limit || 20);

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/me/player/recently-played?${params}`,
      {
        headers: { "Authorization": getToken() }
      })
    return response
  } catch (error) {
    console.error(error)
    return error.response;
  }
}
