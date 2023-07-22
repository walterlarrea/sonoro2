'use client';
import { useState, useEffect } from 'react';
import { getNewReleases } from '@/services/spotifyService';
import AlbumList from '@/components/AlbumList';

const NewReleases = () => {
  const [albums, setAlbums] = useState(null)

  useEffect(() => {
    const newReleases = async () => {
      const response = await getNewReleases();
      setAlbums(response.albums);
    }
    newReleases();
  }, [])

  if (!albums) {
    return (
      <div>
        Cargando...
      </div>
    )
  }

  return (
    <div>
      <h2 className='text-[2em] mt-5'>Últimos lanzamientos</h2>
      <AlbumList albums={albums} withAccess={true} />
    </div>
  )
};

export default NewReleases;