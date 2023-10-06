'use client';
import { useState, useEffect } from 'react';
import { useParams } from "next/navigation";
import { usePlayerProvider } from "@/context/playerProvider";
import { checkSavedTracks, getAlbum, removeSavedTrack, saveTrack } from '@/services/spotifyService';
import LoadingEqualizer from '@/components/Loader/LoadingEqualizer';
import SongList from '@/components/SongList';

const Album = () => {
  const router = useParams()
  const { setActiveContext } = usePlayerProvider();
  const albumId = router["albumId"]
  const [album, setAlbum] = useState(null)

  useEffect(() => {
    const albumDetails = async () => {
      if (albumId) {
        const response = await getAlbum(albumId);
        const albumObject = response.data;

        if (albumObject?.status && albumObject.status === 401) {
          setAlbum(null)
          return;
        }

        const trackIds = albumObject.tracks.items.map(track => track.id)
        const savedCheckResponse = await checkSavedTracks({ trackIds })

        if (savedCheckResponse.status === 200) {
          const likes = savedCheckResponse.data
          const trackListWithSavedStatus = albumObject.tracks.items.map((track, index) => {
            return { ...track, saved: likes[index] }
          })

          setAlbum({ ...albumObject, tracks: { ...albumObject.tracks, items: trackListWithSavedStatus } });
        } else {
          setAlbum(albumObject);
        }
      }
    };
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

  const updateTrackListSavedStatus = (trackId, newState) => {
    setAlbum(album => {
      return {
        ...album,
        tracks: {
          ...album.tracks,
          items: album.tracks.items.map(track => {
            return trackId !== track.id ? track : { ...track, saved: newState }
          })
        }
      }
    })
  }

  const handlePlayAlbum = (track) => () => {
    setActiveContext([{ ...album, trackToPlay: track.uri }]);
  }

  return (
    <>
      <SongList
        tracks={album.tracks.items}
        updateSavedStatus={updateTrackListSavedStatus}
        handlePlayPlaylist={handlePlayAlbum}
        isAlbum={true} />
    </>
  )
}

export default Album