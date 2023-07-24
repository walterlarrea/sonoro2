'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, logout } from '@/services/spotifyService';

const Profile = () => {
  const router = useRouter();
  const [profile, setProfile] = useState(null)

  const logoutButtonClassNames = useRef(`
    rounded-full 
    mt-8 
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

  useEffect(() => {
    const userProfile = async () => {
      const response = await getCurrentUser();
      if (response?.status && response.status === 401) {
        router.push('/spotify-auth')
        return;
      }
      setProfile(response);
    }
    userProfile();
  }, [])

  if (!profile) {
    return (
      <div>
        Cargando...
      </div>
    )
  }

  const handleLogout = () => {
    logout();
    window.location = '/'
    // router.push('/')
  }

  return (
    <div className='m-4'>
      <h2 className='text-[2em] mt-5'>Mi perfil</h2>

      <div>Nombre: {profile.display_name}</div>
      <div>E-mail: {profile.email}</div>

      <button
        onClick={handleLogout}
        className={logoutButtonClassNames.current}>
        Cerrar sesión
      </button>
    </div>
  )
};

export default Profile;