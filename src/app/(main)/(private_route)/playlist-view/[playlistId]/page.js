'use client';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { usePlayerProvider } from "@/context/playerProvider";
import { getPlaylistDetail, checkSavedTracks, saveTrack, removeSavedTrack } from "@/services/spotifyService";
import LoadingEqualizer from "@/components/Loader/LoadingEqualizer";
import SongList from "@/components/SongList";

const Playlist = () => {
  const router = useParams()
  const { setActiveContext } = usePlayerProvider();
  const playlistId = router["playlistId"]
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const getPlaylist = async () => {
      const response = await getPlaylistDetail({ playlistId });
      const playlistObject = response.data

      if (playlistObject?.status && playlistObject.status === 401) {
        setPlaylist(null)
        return;
      }

      const trackIds = playlistObject.tracks.items.map(({ track }) => track.id)
      const savedCheckResponse = await checkSavedTracks({ trackIds })

      if (savedCheckResponse.status === 200) {
        const likes = savedCheckResponse.data
        const trackListWithSavedStatus = playlistObject.tracks.items.map((item, index) => {
          return { ...item, track: { ...item.track, saved: likes[index] } }
        })

        setPlaylist({ ...playlistObject, tracks: { ...playlistObject.tracks, items: trackListWithSavedStatus } });
      } else {
        setPlaylist(playlistObject);
      }
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

  const updateTrackListSavedStatus = (trackId, newState) => {
    setPlaylist(playlist => {
      return {
        ...playlist,
        tracks: {
          ...playlist.tracks,
          items: playlist.tracks.items.map(item => {
            return trackId !== item.track.id ? item : { ...item, track: { ...item.track, saved: newState } }
          })
        }
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

  const handlePlayPlaylist = (track) => () => {
    setActiveContext([{ ...playlist, trackToPlay: track.uri }]);
  }

  return (
    <>
      <SongList
        tracks={playlist.tracks.items.map(item => item.track)}
        updateSavedStatus={handleTrackSavedState}
        handlePlayPlaylist={handlePlayPlaylist} />
    </>
  )
};

export default Playlist;