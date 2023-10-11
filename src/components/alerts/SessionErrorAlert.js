'use client';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSessionRefresh } from '@/hooks/useSessionRefresh'
import { useSessionContext } from '@/context/sessionProvider';
import { useTranslation } from 'react-i18next';
import swal from 'sweetalert';

const SessionErrorAlert = ({ children }) => {
  const { t } = useTranslation()
  const { session } = useSessionContext()
  const { refreshed, loading } = useSessionRefresh()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (loading) return
    if (refreshed) return

    const promptMessage = async () => {
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
      }
    }
    promptMessage();
  }, [pathname, session, refreshed, loading])

  if (!session) {
    return (
      <></>
    )
  }

  return children
}

export default SessionErrorAlert