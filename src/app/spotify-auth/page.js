'use client';
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query';
import { getAccessToken, refreshAccessToken, redirectToAuthCodeFlow } from '@/utils/spotifyAuthClient';
import { getStore, setStore } from '@/services/localStore';
import { CLIENT_ID } from '@/utils/constantes';

const AccesoApi = () => {
  const clientId = CLIENT_ID;
  const router = useRouter()
  const params = useSearchParams()
  const client = useQueryClient()
  const code = params.get("code") || undefined;
  const error = params.get("error") || undefined;
  const refreshToken = getStore('sonoro-refresh');

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

          client.setQueryData(["session"], authResponse);
          router.push('/')
          return
        }
      }

      if (!code) {
        redirectToAuthCodeFlow(clientId);
      } else {
        const authResponse = await getAccessToken(clientId, code);

        if (authResponse.access_token) {
          client.setQueryData(["session"], authResponse);

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