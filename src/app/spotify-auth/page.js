'use client';
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { getAccessToken, redirectToAuthCodeFlow } from '@/utils/spotifyAuth';

const AccesoApi = () => {
  const router = useRouter()
  const params = useSearchParams()
  const clientId = "c4ebe3bd87fe4a0493dd6d14ee608734";
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
        redirectToAuthCodeFlow(clientId);
      } else {
        const accessToken = await getAccessToken(clientId, code);
        if (accessToken) {
          localStorage.setItem("sonoro-session", accessToken)
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