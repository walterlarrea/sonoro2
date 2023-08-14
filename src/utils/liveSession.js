import { CLIENT_ID } from '@/utils/constantes';
import { getStore, setStore } from '@/services/localStore';
import { refreshAccessToken, redirectToAuthCodeFlow } from '@/utils/spotifyAuthClient';

const renewUserSession = async () => {
  const refreshToken = getStore('sonoro-refresh')
  const clientId = CLIENT_ID;

  if (refreshToken) {
    const authResponse = await refreshAccessToken(clientId, refreshToken);

    if (authResponse.access_token) {
      setStore("sonoro-session", authResponse.access_token)
      setStore("sonoro-refresh", authResponse.refresh_token)

      return true
    }
  }

  redirectToAuthCodeFlow(clientId);
  return false
} // This function will try refreshing the JWT using a refresh token previously provided
// In case of failure, locally sotred JWTs will be deleted and browser be redirected to Login options.

export const checkUserSession = async (callbackFn) => {
  const firstResponse = await callbackFn();

  if (firstResponse.status >= 200 && firstResponse.status <= 299) {
    return firstResponse.data;
  }

  if (firstResponse.status === 401) {
    await renewUserSession()

    try {
      const response = await callbackFn();

      console.error("User's session restored")
      return response.data
    } catch (error) {
      console.error(error)
      return error.response;
    }
  }

  console.error(firstResponse)
  return firstResponse;
}