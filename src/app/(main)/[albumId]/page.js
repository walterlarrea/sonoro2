'use client';
import { useState, useEffect } from 'react';
import { useParams } from "next/navigation";
import { getAlbum } from '@/services/spotifyService';

const Album = () => {
  const router = useParams()
  const albumId = router["albumId"]
  const [album, setAlbum] = useState(null)

  useEffect(() => {
    const album = async () => {
      if (albumId) {
        const response = await getAlbum(albumId);
        setAlbum(response);
      }
    }
    album();
  }, [albumId])

  if (!album) {
    return (
      <div>
        Cargando...
      </div>
    )
  }
  if (album.error) {
    return (
      <div>
        Ocurrió un error: {album.error}
      </div>
    )
  }

  return (
    <div className="relative w-content" >

      <div className="absolute z-10 flex flex-col justify-end w-full bg-gradient-to-b from-gray-900 p-3 text-[1.25em]">
        TEMONES en este album:
        {album.tracks.items.map(t =>
          <span>
            {t.name}
          </span>
        )}
      </div>

      <img
        src={album.images[0].url}
        alt={`Cover of the ${album.album_type} ${album.name}`}
        className='relative top-0 left-0 min-w-full w-full min-h-screen aspect-square'
      />
    </div>
  )
}

export default Album