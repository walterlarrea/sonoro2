import { useEffect, useState } from "react";
import { getCurrentUser } from "@/services/spotifyService";
import { getStore, setStore } from '@/services/localStore';
import { refreshAccessToken } from "@/utils/spotifyAuthClient";
import { CLIENT_ID } from "@/utils/constantes";
import { BsArrowReturnLeft } from "react-icons/bs";

async function renewSessionAuto (refreshToken) {
  if (!refreshToken) 
    return {error: 'No refresh token'}

  const authResponse = await refreshAccessToken(CLIENT_ID, refreshToken);

  if (!authResponse.access_token)
    return {error: authResponse.error_description || 'Invalid refresh token'}
  
  setStore("sonoro-session", authResponse.access_token)
  setStore("sonoro-refresh", authResponse.refresh_token)

  return {data: authResponse}
}

export const useSession = () => {
  const [sessionData, setSessionData] = useState(undefined)

  useEffect(() => {
    const getUserSession = async () => {
      try {
        const response = await getCurrentUser()
        
        if (response?.data?.email) setSessionData(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUserSession()
  }, [])

  return sessionData
}

export const useSessionRefresh = () => {
    useEffect(() => {
      const refreshToken = async () => {
        const storedRefreshToken = getStore('sonoro-refresh');
        const renewement = await renewSessionAuto(storedRefreshToken)

        if (renewement.error) return
        if (renewement.data) return
      }

      const isTokenExpired = async () => {
        try{
          const response = await getCurrentUser()

          if (response?.data?.email) {
            return false
          } else {
            return true
          }
        } catch (error) {
          return true
        }
      };
  
      isTokenExpired().then(expired => {
        if (expired) {
        refreshToken();
        }
      })
  
      const tokenRefreshInterval = setInterval(() => {
        console.log('REFRESHHOOK by time')
        refreshToken();
      }, 3000000); // Verifica cada minuto
  
      return () => {
        clearInterval(tokenRefreshInterval);
      };
    }, []);
  
    return true;
  }