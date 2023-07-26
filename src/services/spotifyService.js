import { getStore, removeStore } from "@/services/localStore";
import axios from "axios"

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

    return response.data
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

    return response.data
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

    return response.data
  } catch (error) {
    console.error(error)
    return error.response;
  }
}

export const logout = async () => {
  removeStore("sonoro-session");
  // removeStore("sonoro-refresh");
}

export const searchResults = async (searchText, types, market, genre, limit, offset) => {
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

    return response.data
  } catch (error) {
    console.error(error)
    return error.response;
  }
}

export const getRecommendations = async ({ genres, market, limit, offset }) => {
  const params = new URLSearchParams();
  params.append('seed_genres', genres);
  if (market !== undefined) {
    params.append("market", market);
  }
  params.append("limit", limit || 20);
  params.append("offset", offset || 0);

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/recommendations?${params}`,
      {
        headers: { "Authorization": getToken() }
      })

    return response.data
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

    return response.data
  } catch (error) {
    console.error(error)
    return error.response;
  }
}