'use client';
import { useEffect, useState } from "react";
import { checkSavedTracks, getUserSavedSongs, removeSavedTrack, saveTrack } from "@/services/spotifyService";
import { usePlayerProvider } from "@/context/playerProvider";
import LoadingEqualizer from "@/components/Loader/LoadingEqualizer";
import SongList from "@/components/SongList";

const SavedSongs = () => {
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

      const trackIds = savedSongsObject.items.map(({ track }) => track.id)
      const savedCheckResponse = await checkSavedTracks({ trackIds })

      if (savedCheckResponse.status === 200) {
        const likes = savedCheckResponse.data
        const trackListWithSavedStatus = savedSongsObject.items.map((item, index) => {
          return { ...item, track: { ...item.track, saved: likes[index] } }
        })

        setSavedSongsObj({ ...savedSongsObject, items: trackListWithSavedStatus });
      } else {
        setSavedSongsObj(savedSongsObject);
      }
      // setSavedSongsObj(savedSongsObject);
    };
    getSavedSongs();
  }, [])

  if (!savedSongsObj) {
    return (
      <LoadingEqualizer />
    )
  }

  const updateTrackListSavedStatus = (trackId, newState) => {
    setSavedSongsObj(savedSongs => {
      return {
        ...savedSongs,
        items: savedSongs.items.filter(item => trackId !== item.track.id)
      }
    })
  }

  const handleTrackSavedState = (trackId, savedState) => async () => {
    if (savedState === undefined) return
    if (savedState) {
      const response = await removeSavedTrack({ trackIds: [trackId] })
    } else {
      const response = await saveTrack({ trackIds: [trackId] })
    }

    updateTrackListSavedStatus(trackId, !savedState)
  }

  const handlePlayTracks = (track) => () => {
    if (savedSongsObj) {
      const tracks = savedSongsObj.items.map(song => { return { ...song.track, trackToPlay: track.uri } })
      setActiveContext(tracks)
    }
  }

  return (
    <>
      <SongList
        tracks={savedSongsObj.items.map(item => item.track)}
        updateSavedStatus={handleTrackSavedState}
        handlePlayPlaylist={handlePlayTracks} />
    </>
  )
  // <table className="w-full">
  //   <thead>
  //     <tr>
  //       <th className="text-center font-normal ms-4">#</th>
  //       <th className="text-start font-normal">{t('songListHeaders.title')}</th>
  //       <th className="text-start font-normal">{t('songListHeaders.album')}</th>
  //       <th className="text-start font-normal"></th>
  //       <th className="text-start font-normal">
  //         <ClockIcon className="h-6 w-6" />
  //       </th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {savedSongsObj &&
  //       savedSongsObj.items?.map(({ track }, index) =>
  //         <SongListItem
  //           key={track.id}
  //           track={track}
  //           listNumber={index + 1}
  //           handlePlayAlbumPlaylist={handlePlayTracks(track)}
  //         />
  //       )}
  //   </tbody>
  // </table>
};

export default SavedSongs;