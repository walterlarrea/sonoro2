import { useEffect, useState } from "react";
import { getCurrentUser } from "@/services/spotifyService";
import { getStore, setStore } from '@/services/localStore';
import { refreshAccessToken } from "@/utils/spotifyAuthClient";
import { useSessionContext } from "@/context/sessionProvider";
import { CLIENT_ID } from "@/utils/constantes";

async function renewSessionAuto(refreshToken) {
  if (!refreshToken)
    return { error: 'No refresh token' }

  const authResponse = await refreshAccessToken(CLIENT_ID, refreshToken);

  if (!authResponse.access_token)
    return { error: authResponse.error_description || 'Invalid refresh token' }

  setStore("sonoro-session", authResponse.access_token)
  setStore("sonoro-refresh", authResponse.refresh_token)

  return { data: authResponse }
}

export const useSessionRefresh = () => {
  const { checkSession } = useSessionContext()
  const [refreshed, setRefreshed] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const refreshToken = async () => {
      const storedRefreshToken = getStore('sonoro-refresh');
      const renewement = await renewSessionAuto(storedRefreshToken)

      if (renewement.error) setRefreshed(false)
      if (renewement.data) {
        checkSession()
        setRefreshed(true)
      }
      setLoading(false)
    }

    const isTokenExpired = async () => {
      try {
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
      refreshToken();
    }, 3000000); // Verifica cada 50 minutos

    setLoading(false)
    setRefreshed(true)

    return () => {
      clearInterval(tokenRefreshInterval);
    };
  }, []);

  return { refreshed, loading };
}