'use-client';
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { getCurrentUser } from "@/services/spotifyService";
import SideMenuMobile from "./SideMenuMobile";

const HeaderProfileButton = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [showSideMenu, setShowSideMenu] = useState(false)

  const router = useRouter();

  const userButtonClassNames = useRef(`
    rounded-lg
    ps-1 
    pe-4 
    py-1 
    text-md 
    font-semibold
    text-zinc-900 
    bg-green-500 
    hover:border-zinc-200 
    transition 
    duration-200 
    hover:bg-green-400 
    shadow-neobrutalism`)

  const loginButtonClassNames = useRef(`
    rounded-lg
    px-6
    py-4 
    text-md 
    font-semibold 
    text-zinc-900 
    bg-green-500 
    hover:border-zinc-200 
    transition 
    duration-200 
    hover:bg-green-400 
    shadow-neobrutalism 
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
      const user = response.data;

      if (user?.status && user.status === 401) {
        setCurrentUser(null)
        return;
      }

      setCurrentUser(user);
    }
    getUser()
  }, [])

  const handleOpenMenu = () => {
    setShowSideMenu(true)
    // router.push('/profile')
  }

  const handleCloseMenu = () => {
    setShowSideMenu(false)
  }

  return (
    <>
      {currentUser ?
        <>
          <button
            key='profile-button'
            onClick={handleOpenMenu}
            className={userButtonClassNames.current}>
            <img
              className={imgClassNames.current}
              src={currentUser?.images?.length > 0 ? currentUser?.images[0]?.url : '/images/userIcon-dark.png'}
              alt='Profile picture' />
            {currentUser.display_name}
          </button>
          <SideMenuMobile visible={showSideMenu} closeHandler={handleCloseMenu} />
        </>
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