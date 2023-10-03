import SidebarPlaylist from "./SidebarPlaylist";
import SidebarSavedSongs from "./SidebarSavedSongs";
import React from 'react';
import { appWithTranslation, useTranslation } from 'next-i18next'; // Asegúrate de importar appWithTranslation
import SidebarSavedAlbums from "./SidebarSavedAlbums";

const SideBar = () => {
  const { t } = useTranslation();

  // <div className="hidden md:block text-sm w-full h-full gap-[8px] overflow-y-auto">
  {/* <Navbar column={true} /> */ }
  return (
    <div className="
      inline-flex  
      flex-col 
      w-full
      justify-start 
      items-center 
      text-[#080808] 
      dark:text-[#e5fdba]">
      <h2 className="mb-3">{t('sidebar.userLibrary')}</h2>
      <SidebarSavedSongs />
      <SidebarPlaylist />
      <SidebarSavedAlbums />
    </div>
  );
  // </div>
}

export default appWithTranslation(SideBar)