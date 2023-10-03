'use-client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserSavedSongs } from "@/services/spotifyService";
import SidebarItem from "./SidebarItem";
import { useTranslation } from "next-i18next";

const SidebarSavedSongs = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [userSavedSongs, setUserSavedSongs] = useState(null);

  useEffect(() => {
    const getSavedSongs = async () => {
      const response = await getUserSavedSongs({});
      const savedSongsObject = response.data;

      if (savedSongsObject?.status && savedSongsObject.status === 401) {
        setUserSavedSongs(null)
        return;
      }

      setUserSavedSongs(savedSongsObject);
    };
    getSavedSongs();
  }, [])

  const songText = t("sidebarSavedSongs.song");
  const songsText = t("sidebarSavedSongs.songs");

  return (
    <>
      {userSavedSongs?.total > 0 && (
        <SidebarItem
          title={t("sidebarSavedSongs.userLikeSongs")}
          // Utilizar las variables en lugar de t('etc') directamente
          description={`${t('sidebarSavedSongs.list')} • ${userSavedSongs?.total} ${userSavedSongs?.total === 1 ? songText : songsText}`}
          thumbnailSource="/images/saved-songs-playlist.png"
          handleClick={() => router.push("/saved-songs")}
        />
      )}
    </>
  );
};

export default SidebarSavedSongs;