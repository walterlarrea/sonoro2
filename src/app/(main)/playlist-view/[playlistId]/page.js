'use client';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPlaylistDetail } from "@/services/spotifyService";
import { ClockIcon } from "@heroicons/react/24/solid";
import SongListItem from "@/components/SongListItems";

const Playlist = () => {
  const router = useParams()
  const playlistId = router["playlistId"]
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const getPlaylist = async () => {
      const response = await getPlaylistDetail({ playlistId });

      if (response?.status && response.status === 401) {
        setPlaylist(null)
        return;
      }

      const playlistObject = response;
      setPlaylist(playlistObject);
    };
    getPlaylist();
  }, [playlistId])

  if (!playlist) {
    return (
      <div>
        Cargando...
      </div>
    )
  }
  if (playlist.error) {
    return (
      <div>
        Ocurrió un error: {playlist.error}
      </div>
    )
  }

  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-start font-normal text-zinc-300 ms-4">#</th>
            <th className="text-start font-normal text-zinc-300">Título</th>
            <th className="text-start font-normal text-zinc-300">Álbum</th>
            <th className="text-start font-normal text-zinc-300"></th>
            <th className="text-start font-normal text-zinc-300">
              <ClockIcon className="h-6 w-6" />
            </th>
          </tr>
        </thead>
        <tbody>
          {playlist?.tracks &&
            playlist.tracks?.items?.map(({ track }, index) =>
              <SongListItem
                key={track.id}
                track={track}
                listNumber={index}
              />
            )}
        </tbody>
      </table>
    </>
  )
};

export default Playlist;