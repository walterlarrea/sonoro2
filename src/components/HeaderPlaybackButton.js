'use-client';
import { useRouter } from "next/navigation";
import { useRef } from "react";
import WebPlayback from "./WebPlayback";

const HeaderPlaybackButton = () => {
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

  return (
    <>
      <WebPlayback />
      {/* {currentUser ?
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
      } */}
    </>
  )
}

export default HeaderPlaybackButton;