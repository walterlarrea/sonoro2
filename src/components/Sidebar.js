
import SidebarPlaylist from "./SidebarPlaylist";
import Navbar from "./Navbar";
import SidebarSavedSongs from "./SidebarSavedSongs";
import React from 'react';
import { appWithTranslation, useTranslation } from 'next-i18next'; // Asegúrate de importar appWithTranslation

const SideBar = () => {

  const { t } = useTranslation();
  return (
    // <div className="hidden md:flex flex-col text-sm w-full gap-[8px]">
    <div className="hidden md:grid grid-cols-1 text-sm w-full gap-[8px] overflow-y-auto">

      <Navbar column={true} />

      <div className="
      inline-flex 
      flex-col 
      justify-center 
      items-center 
      rounded-lg
      text-zinc-100 
      bg-zinc-900 
      p-[8px] 
      overflow-y-auto">
        <h2 className="mb-3">{t('sidebar.userList')}</h2>
        <SidebarSavedSongs />
        <SidebarPlaylist />
      </div>

    </div>
  );
}

export default appWithTranslation(SideBar)