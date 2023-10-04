'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isValidSession } from "@/utils/liveSession";
import { getCurrentUser } from "@/services/spotifyService";
import { useTranslation } from 'react-i18next';
import swal from 'sweetalert';

const SessionErrorAlert = ({ children }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const promptMessage = async () => {
      const session = await getCurrentUser();

      if (!isValidSession(session?.data?.email)) {
        const loginOrGoHome = await swal({
          title: t('customAlert.loginTitle'),
          text: t('customAlert.loginText'),
          type: "info",
          icon: "info",
          // dangerMode: true,
          buttons: {
            // cancel: "Go Home",
            confirm: "OK",
          }
        });

        if (loginOrGoHome) {
          router.push('/spotify-auth')
        } else {
          router.push('/')
        }
      }

      setLoading(false)
    }
    promptMessage();
  }, [])

  if (loading) {
    return (
      <></>
    )
  }

  return children
}

export default SessionErrorAlert