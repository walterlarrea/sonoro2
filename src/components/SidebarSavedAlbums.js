'use-client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getUserSavedAlbums } from "@/services/spotifyService";
import { useEffect } from "react";
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
      {albums?.items?.length > 0 &&
        <h3>{t('sidebar.albums')}</h3>
      }
      {albums?.items?.length > 0 && albums?.items?.map(({ album }) => (
        <SidebarItem
          key={album.id}
          title={album.name}
          description={album.owner?.display_name}
          thumbnailSource={album.images?.[0]?.url}
          handleClick={() => router.push(`/albums/${album.id}`)}
        />
      ))}
    </>
  )
}

export default SidebarSavedAlbums