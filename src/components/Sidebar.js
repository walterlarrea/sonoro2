
import SidebarPlaylist from "./SidebarPlaylist";
import Navbar from "./Navbar";
import SidebarSavedSongs from "./SidebarSavedSongs";
import React from 'react';
import { appWithTranslation, useTranslation } from 'next-i18next'; // Asegúrate de importar appWithTranslation




const SideBar = () => {

const {t} = useTranslation();
  return (
    <div className="flex-col text-sm hidden md:flex w-full gap-[8px]">

      <Navbar column={true} />

      <div className="
      flex 
      flex-col 
      justify-center 
      items-center 
      rounded-lg
      text-zinc-100 
      bg-zinc-900 
      p-[8px]">
        <h2 className="mb-3">{t('sidebar.userList')}</h2>
        <SidebarSavedSongs />
        <SidebarPlaylist />
      </div>

    </div>
  );
}

export default appWithTranslation(SideBar)