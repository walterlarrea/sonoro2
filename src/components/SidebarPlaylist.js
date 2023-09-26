'use-client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getUserPlaylists } from "@/services/spotifyService";
import { useEffect } from "react";
import SidebarItem from "./SidebarItem";
// import { checkUserSession } from "@/utils/liveSession";

const SidebarPlaylist = () => {
  const router = useRouter()
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const getPlaylists = async () => {
      const response = await getUserPlaylists({});
      const userPlaylists = response.data;

      if (userPlaylists?.status && userPlaylists.status === 401) {
        setPlaylists(null)
        return;
      }
      setPlaylists(userPlaylists);
    };
    getPlaylists();
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