'use-client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getUserPlaylists } from "@/services/spotifyService";
import { useEffect } from "react";
import SidebarItem from "./SidebarItem";
import { checkUserSession } from "@/utils/liveSession";

const SidebarPlaylist = () => {
  const router = useRouter()
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const getSavedSongs = async () => {
      const response = await checkUserSession(() => getUserPlaylists({}));

      if (response?.status && response.status === 401) {
        setPlaylists(null)
        return;
      }
      const userPlaylists = response;
      setPlaylists(userPlaylists);
    };
    getSavedSongs();
  }, [])

  if (!playlists) {
    return (
      <>
        Cargando...
      </>
    )
  }

  return (
    <>
      {playlists?.items?.length > 0 && playlists?.items?.map((data) => (
        <SidebarItem
          key={data.id}
          title={data.name}
          description={data.owner?.display_name}
          thumbnailSource={data.images?.[0]?.url}
          handleClick={() => router.push(`/playlist-view/${data.id}`)}
        />
      ))}
    </>
  )
}

export default SidebarPlaylist