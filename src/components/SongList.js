import SongListItem from "./SongListItems"
import { ClockIcon } from "@heroicons/react/24/solid";

import { useTranslation } from "react-i18next";

const SongList = ({ tracks, updateSavedStatus, handlePlayPlaylist, isAlbum }) => {
  const { t } = useTranslation();

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
                handleSaveOrRemoveTrack={updateSavedStatus(track.id, track.saved)}
              />
            )}
        </tbody>
      </table>
    </>
  )
}

export default SongList