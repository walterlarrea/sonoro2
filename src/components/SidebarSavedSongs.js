'use-client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserSavedSongs } from "@/services/spotifyService";
import SidebarItem from "./SidebarItem";
import { useTranslation } from "next-i18next";
import { checkUserSession } from "@/utils/liveSession";

const SidebarSavedSongs = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [userSavedSongs, setUserSavedSongs] = useState(null);

  useEffect(() => {
    const getSavedSongs = async () => {
      const response = await checkUserSession(() => getUserSavedSongs({}));

      if (response?.status && response.status === 401) {
        setUserSavedSongs(null)
        return;
      }

      const savedSongsObject = response;
      setUserSavedSongs(savedSongsObject);
    };
    getSavedSongs();
  }, [])

  // Almacenar el resultado de t('sidebarSavedSongs.song') en una variable
  const songText = t("sidebarSavedSongs.song");
  // Almacenar el resultado de t('sidebarSavedSongs.songs') en una variable
  const songsText = t("sidebarSavedSongs.songs");

  return (
    <>
      {userSavedSongs?.total > 0 && (
        <SidebarItem
          title={t("sidebarSavedSongs.userLikeSongs")}
          // Utilizar las variables en lugar de t('etc') directamente
          description={`Lista. ${userSavedSongs.total} ${userSavedSongs.total === 1 ? songText : songsText}`}
          thumbnailSource="/images/saved-songs-playlist.png"
          handleClick={() => router.push("/saved-songs")}
        />
      )}
    </>
  );
};

export default SidebarSavedSongs;