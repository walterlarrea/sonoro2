'use client';
import { useState, useEffect } from 'react';
import { useParams } from "next/navigation";
import { usePlayerProvider } from "@/context/playerProvider";
import { getAlbum } from '@/services/spotifyService';
import { ClockIcon } from "@heroicons/react/24/solid";
import SongListItem from "@/components/SongListItems";
import LoadingEqualizer from '@/components/Loader/LoadingEqualizer';

const Album = () => {
  const router = useParams()
  const { setActiveContext } = usePlayerProvider();
  const albumId = router["albumId"]
  const [album, setAlbum] = useState(null)

  useEffect(() => {
    const albumDetails = async () => {
      if (albumId) {
        const response = await getAlbum(albumId);

        if (response?.status && response.status === 401) {
          setAlbum(null)
          return;
        }
        const albumObject = response;

        setAlbum(albumObject);
      }
    }
    albumDetails();
  }, [albumId])

  if (!album) {
    return (
      <LoadingEqualizer />
    )
  }
  if (album.error) {
    return (
      <div>
        Ocurrió un error: {album.error}
      </div>
    )
  }

  const handlePlayAlbum = (track) => () => {
    setActiveContext([{ ...album, trackToPlay: track.uri }]);
  }

  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-center font-normal text-zinc-300 ms-4">#</th>
            <th className="text-start font-normal text-zinc-300">Título</th>
            {/* <th className="text-start font-normal text-zinc-300">Álbum</th> */}
            <th className="text-start font-normal text-zinc-300"></th>
            <th className="text-start font-normal text-zinc-300">
              <ClockIcon className="h-6 w-6" />
            </th>
          </tr>
        </thead>
        <tbody>
          {album?.tracks &&
            album.tracks?.items?.map((track, index) =>
              <SongListItem
                key={track.id}
                track={track}
                listNumber={index}
                handlePlayAlbumPlaylist={handlePlayAlbum(track)}
              />
            )}
        </tbody>
      </table>
      {/* <div className="relative w-content" >

      <div className="absolute z-10 flex flex-col justify-end w-full bg-gradient-to-b from-gray-900 p-3 text-[1.25em]">
        TEMONES en este album:
        {album.tracks.items.map(t =>
          <span key={t.id}>
            {t.name}
          </span>
        )}
      </div>

      <img
        src={album.images[0].url}
        alt={`Cover of the ${album.album_type} ${album.name}`}
        className='relative top-0 left-0 min-w-full w-full min-h-screen aspect-square'
      />
    </div> */}
    </>
  )
}

export default Album