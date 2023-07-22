'use client';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { getNewReleases } from '@/services/spotifyService';
import AlbumCard from '../components/AlbumCard';
import RootLayout from '../layout';

const NewReleases = () => {
  const router = useRouter()
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
    <RootLayout>
      <h2 className='text-[2em] mt-5'>Últimos lanzamientos</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minMax(270px, 1fr))',
        justifyItems: 'center',
        gap: '1em',
      }}
        className="my-3"
      >

        {albums?.items?.map(a =>
          <div style={{ minWidth: '270px', width: '100%' }} className="m-0">
            <AlbumCard
              key={a.id}
              album={a}
              onClick={() => router.push(`/albums/${a.id}`)}
            />
          </div>
        )}
      </div>
    </RootLayout>
  )
};

export default NewReleases;