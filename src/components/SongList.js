import { removeSavedTrack, saveTrack } from "@/services/spotifyService";
import SongListItem from "./SongListItems"
import { ClockIcon } from "@heroicons/react/24/solid";

import { useTranslation } from "react-i18next";

const SongList = ({ tracks, updateSavedStatus, handlePlayPlaylist, isAlbum }) => {
  const { t } = useTranslation();

  const handleTrackSavedState = (trackId, savedState) => async () => {
    if (savedState === undefined) return
    if (savedState) {
      const response = await removeSavedTrack({ trackIds: [trackId] })
    } else {
      const response = await saveTrack({ trackIds: [trackId] })
    }

    updateSavedStatus(trackId, !savedState)
  }

  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-center font-normal ms-4">#</th>
            <th className="text-start font-normal">{t('songListHeaders.title')}</th>
            {!isAlbum &&
              <th className="text-start font-normal">{t('songListHeaders.album')}</th>
            }
            <th className="text-start font-normal"></th>
            <th className="text-start font-normal">
              <ClockIcon className="h-6 w-6" />
            </th>
          </tr>
        </thead>
        <tbody>
          {tracks &&
            tracks.map((track, index) =>
              <SongListItem
                key={track.id}
                track={track}
                listNumber={index + 1}
                handlePlayAlbumPlaylist={handlePlayPlaylist(track)}
                handleSaveOrRemoveTrack={handleTrackSavedState(track.id, track.saved)}
              />
            )}
        </tbody>
      </table>
    </>
  )
}

export default SongList