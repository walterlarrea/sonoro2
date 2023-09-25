
import SidebarPlaylist from "./SidebarPlaylist";
import Navbar from "./Navbar";
import SidebarSavedSongs from "./SidebarSavedSongs";
import React from 'react';
import { appWithTranslation, useTranslation } from 'next-i18next'; // Asegúrate de importar appWithTranslation

const SideBar = () => {

  const { t } = useTranslation();
  return (
    // <div className="hidden md:flex flex-col text-sm w-full gap-[8px]">
    <div className="hidden md:grid grid-cols-1 grid-rows-[min-content] text-sm w-full gap-[8px] overflow-y-auto">

      <Navbar column={true} />

      <div className="
      inline-flex 
      flex-col 
      justify-start 
      items-center 
      rounded-lg
      text-[#080808] 
      dark:text-[#e5fdba] 
      bg-[#c9dea3] 
      dark:bg-[#34392A] 
      p-[8px] 
      overflow-y-auto
      shadow-neobrutalism">
        <h2 className="mb-3">{t('sidebar.userList')}</h2>
        <SidebarSavedSongs />
        <SidebarPlaylist />
      </div>

    </div>
  );
}

export default appWithTranslation(SideBar)