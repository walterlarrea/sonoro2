'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSession, useSessionRefresh } from '@/hooks/useSession'
import { isValidSession } from "@/utils/liveSession";
import { useTranslation } from 'react-i18next';
import swal from 'sweetalert';

const SessionErrorAlert = ({ children }) => {
  const { t } = useTranslation()
  const session = useSession()
  const refresher = useSessionRefresh()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    console.log('effect')

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
    ///promptMessage();
  }, [pathname])
  
  if (!session) {
    return (
      <></>
      )
  }

  return children
}

export default SessionErrorAlert