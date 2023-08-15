'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isValidSession } from "@/utils/liveSession";
import { getCurrentUser } from "@/services/spotifyService";
import swal from 'sweetalert';
import { useState } from 'react';

const SessionErrorAlert = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const promptMessage = async () => {
      const session = await getCurrentUser();

      if (!isValidSession(session?.data?.email)) {
        const loginOrGoHome = await swal({
          title: "Error",
          text: "You need to be logged in to access this feature",
          icon: "warning",
          dangerMode: true,
          buttons: {
            cancel: "Go Home",
            confirm: "Log in",
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