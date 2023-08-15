'use client';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { usePlayerProvider } from "@/context/playerProvider";
import { getPlaylistDetail } from "@/services/spotifyService";
import { ClockIcon } from "@heroicons/react/24/solid";
import SongListItem from "@/components/SongListItems";
import LoadingEqualizer from "@/components/Loader/LoadingEqualizer";
import { checkUserSession } from "@/utils/liveSession";
import { useTranslation } from "react-i18next";

const Playlist = () => {
  const router = useParams()
  const { setActiveContext } = usePlayerProvider();
  const { t } = useTranslation();
  const playlistId = router["playlistId"]
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const getPlaylist = async () => {
      const response = await checkUserSession(() => getPlaylistDetail({ playlistId }));

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
      <LoadingEqualizer />
    )
  }
  if (playlist.error) {
    return (
      <div>
        Ocurrió un error: {playlist.error}
      </div>
    )
  }

  const handlePlayPlaylist = (track) => () => {
    setActiveContext([{ ...playlist, trackToPlay: track.uri }]);
  }

  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-center font-normal text-zinc-300 ms-4">#</th>
            <th className="text-start font-normal text-zinc-300">{t('songListHeaders.title')}</th>
            <th className="text-start font-normal text-zinc-300">{t('songListHeaders.album')}</th>
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
                handlePlayAlbumPlaylist={handlePlayPlaylist(track)}
              />
            )}
        </tbody>
      </table>
    </>
  )
};

export default Playlist;