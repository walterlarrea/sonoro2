'use-client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserSavedSongs } from "@/services/spotifyService";
import SidebarItem from "./SidebarItem";

const SidebarSavedSongs = () => {
  const router = useRouter()
  const [userSavedSongs, setUserSavedSongs] = useState(null);

  useEffect(() => {
    const getSavedSongs = async () => {
      const response = await getUserSavedSongs({});

      if (response?.status && response.status === 401) {
        setUserSavedSongs(null)
        return;
      }

      const savedSongsObject = response;
      setUserSavedSongs(savedSongsObject);
    };
    getSavedSongs();
  }, [])

  return (
    <>
      {userSavedSongs?.total > 0 &&
        <SidebarItem
          title='Canciones que te gustan'
          description={`Lista. ${userSavedSongs.total} ${userSavedSongs.total === 1 ? 'canción' : 'canciones'}`}
          thumbnailSource='/images/saved-songs-playlist.png'
          handleClick={() => router.push('/saved-songs')}
        />
      }
    </>
  )
}

export default SidebarSavedSongs