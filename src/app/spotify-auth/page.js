'use client';
import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { useSessionContext } from '@/context/sessionProvider';
import { getAccessToken, redirectToAuthCodeFlow } from '@/utils/spotifyAuthClient';
import { setStore } from '@/services/localStore';
import { CLIENT_ID } from '@/utils/constantes';

const AccesoApi = () => {
  const router = useRouter()
  const params = useSearchParams()
  const { checkSession } = useSessionContext()

  const code = params.get("code") || undefined;
  const error = params.get("error") || undefined;

  useEffect(() => {
    if (error) {
      alert('Acceso rechazado')
      router.push('/')
      return;
    }

    const apiAuth = async () => {
      if (!code) {
        redirectToAuthCodeFlow(CLIENT_ID);
      } else {
        const authResponse = await getAccessToken(CLIENT_ID, code);

        if (authResponse.access_token) {
          setStore("sonoro-session", authResponse.access_token)
          setStore("sonoro-refresh", authResponse.refresh_token)
          checkSession()
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