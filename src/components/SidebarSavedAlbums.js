'use-client';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getUserSavedAlbums } from "@/services/spotifyService";
import SidebarItem from "./SidebarItem";
import { t } from "i18next";
// import { checkUserSession } from "@/utils/liveSession";

const SidebarSavedAlbums = () => {
  const router = useRouter()
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    const getSavedAlbums = async () => {
      const response = await getUserSavedAlbums({});
      const userAlbums = response.data;

      if (userAlbums?.status && userAlbums.status === 401) {
        setAlbums(null)
        return;
      }
      setAlbums(userAlbums);
    };
    getSavedAlbums();
  }, [])

  if (!albums) {
    return (
      <>
        Cargando...
      </>
    )
  }

  return (
    <>
      {albums?.items?.length > 0 && albums?.items?.map(({ album }) => (
        <SidebarItem
          key={album.id}
          title={album.name}
          description={
            `${t('sidebar.album')} • ${album.artists?.map((artist, index) =>
              `${artist.name}${album.artists.length !== index + 1 ? ',' : ''} `)}`
          }
          thumbnailSource={album.images?.[0]?.url}
          handleClick={() => router.push(`/albums/${album.id}`)}
        />
      ))}
    </>
  )
}

export default SidebarSavedAlbums