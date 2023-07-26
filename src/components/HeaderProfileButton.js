'use-client';
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { getCurrentUser } from "@/services/spotifyService";

const HeaderProfileButton = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const router = useRouter();

  const userButtonClassNames = useRef(`
    rounded-full 
    ps-1 
    pe-4 
    py-1 
    text-md 
    font-semibold 
    text-zinc-900 
    bg-zinc-200 
    border-solid 
    border-2 
    border-zinc-900 
    hover:border-zinc-200 
    transition 
    duration-200 
    hover:bg-zinc-900 
    hover:text-zinc-200`)

  const loginButtonClassNames = useRef(`
    rounded-full 
    px-6
    py-4 
    text-md 
    font-semibold 
    text-zinc-900 
    bg-zinc-200 
    border-solid 
    border-2 
    border-zinc-900 
    hover:border-zinc-200 
    transition 
    duration-200 
    hover:bg-zinc-900 
    hover:text-zinc-200 
    uppercase`)

  const imgClassNames = useRef(`
    inline-block
    rounded-full
    me-4
    h-[3em]
    bg-zinc-200`)

  useEffect(() => {
    const getUser = async () => {
      const response = await getCurrentUser()

      if (response?.status && response.status === 401) {
        setCurrentUser(null)
        return;
      }

      const user = response;
      setCurrentUser(user);
    }
    getUser()
  }, [])

  return (
    <>
      {currentUser ?
        <button
          key='profile-button'
          onClick={() => router.push('/profile')}
          className={userButtonClassNames.current}>
          <img
            className={imgClassNames.current}
            src={currentUser?.images?.length > 0 ? currentUser?.images[0]?.url : '/images/userIcon-dark.png'}
            alt='Profile picture' />
          {currentUser.display_name}
        </button>
        :
        <button
          key='login-button'
          onClick={() => router.push('/spotify-auth')}
          className={loginButtonClassNames.current}>
          Login
        </button>
      }
    </>
  )
}

export default HeaderProfileButton;