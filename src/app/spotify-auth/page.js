'use client';
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { getAccessToken, refreshAccessToken, redirectToAuthCodeFlow } from '@/utils/spotifyAuthClient';
import { getStore, setStore } from '@/services/localStore';

const AccesoApi = () => {
  const router = useRouter()
  const params = useSearchParams()
  const code = params.get("code") || undefined;
  const error = params.get("error") || undefined;
  const clientId = "c4ebe3bd87fe4a0493dd6d14ee608734";
  const refreshToken = getStore('sonoro-refresh')

  useEffect(() => {
    if (error) {
      alert('Acceso rechazado')
      router.push('/')
      return;
    }

    const apiAuth = async () => {
      if (refreshToken) {
        const authResponse = await refreshAccessToken(clientId, refreshToken);
        if (authResponse.access_token) {
          setStore("sonoro-session", authResponse.access_token)
          setStore("sonoro-refresh", authResponse.refresh_token)
          router.push('/')
          return
        }
      }

      if (!code) {
        redirectToAuthCodeFlow(clientId);
      } else {
        const authResponse = await getAccessToken(clientId, code);
        if (authResponse.access_token) {
          setStore("sonoro-session", authResponse.access_token)
          setStore("sonoro-refresh", authResponse.refresh_token)
          router.push('/')
        }
      }
    }
    apiAuth();
  }, [])

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-1">
      Redirigiendo...
    </div>
  )
};

export default AccesoApi;