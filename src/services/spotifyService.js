import axios from "axios"

const getToken = () => {
  const token = localStorage.getItem("sonoro-session");
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
    return error;
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
    return { error: error.message };
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
    return { error: error.message };
  }
}

export const searchResults = async (searchText, market, offset) => {
  const params = new URLSearchParams();
  params.append("q", searchText);
  params.append("type", ['album']);
  params.append("market", market || 'ES');
  params.append("limit", 20);
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
    return { error: error.message };

  }
}