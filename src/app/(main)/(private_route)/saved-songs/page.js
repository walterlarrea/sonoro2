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
        updateSavedStatus={updateTrackListSavedStatus}
        handlePlayPlaylist={handlePlayTracks} />
    </>
  )
};

export default SavedSongs;