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