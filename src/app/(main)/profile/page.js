'use client';
import { useState, useEffect } from 'react';
import { getCurrentUser } from '@/services/spotifyService';

const Profile = () => {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const userProfile = async () => {
      const response = await getCurrentUser();
      console.log('perfil', response)
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

  return (
    <div>
      <h2 className='text-[2em] mt-5'>Mi perfil</h2>

      <div>Nombre: {profile.display_name}</div>
      <div>E-mail: {profile.email}</div>
    </div>
  )
};

export default Profile;