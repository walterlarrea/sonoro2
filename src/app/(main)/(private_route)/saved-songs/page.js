'use client';
import { useEffect, useState } from "react";
import { getUserSavedSongs } from "@/services/spotifyService";
import { ClockIcon } from "@heroicons/react/24/solid";
import SongListItem from "@/components/SongListItems";
import { usePlayerProvider } from "@/context/playerProvider";
import LoadingEqualizer from "@/components/Loader/LoadingEqualizer";
// import { checkUserSession } from "@/utils/liveSession";
import { useTranslation } from "react-i18next";

const SavedSongs = () => {
  const { t } = useTranslation();
  const { setActiveContext } = usePlayerProvider();
  const [savedSongsObj, setSavedSongsObj] = useState(null);

  useEffect(() => {
    const getSavedSongs = async () => {
      const response = await getUserSavedSongs({});
      const savedSongsObject = response.data;

      if (savedSongsObject?.status && savedSongsObject.status === 401) {
        setSavedSongsObj(null)
        return;
      }

      setSavedSongsObj(savedSongsObject);
    };
    getSavedSongs();
  }, [])

  if (!savedSongsObj) {
    return (
      <LoadingEqualizer />
    )
  }

  const handlePlayTracks = (track) => () => {
    if (savedSongsObj) {
      const tracks = savedSongsObj.items.map(song => { return { ...song.track, trackToPlay: track.uri } })
      setActiveContext(tracks)
    }
  }

  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-center font-normal ms-4">#</th>
            <th className="text-start font-normal">{t('songListHeaders.title')}</th>
            <th className="text-start font-normal">{t('songListHeaders.album')}</th>
            <th className="text-start font-normal"></th>
            <th className="text-start font-normal">
              <ClockIcon className="h-6 w-6" />
            </th>
          </tr>
        </thead>
        <tbody>
          {savedSongsObj &&
            savedSongsObj.items?.map(({ track }, index) =>
              <SongListItem
                key={track.id}
                track={track}
                listNumber={index + 1}
                handlePlayAlbumPlaylist={handlePlayTracks(track)}
              />
            )}
        </tbody>
      </table>
    </>
  )
};

export default SavedSongs;