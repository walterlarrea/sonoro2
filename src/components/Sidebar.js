import React from 'react';
import { appWithTranslation } from 'next-i18next'; // Asegúrate de importar appWithTranslation
import Navbar from './Navbar'; // Importa el componente Navbar aquí
import SidebarPlaylist from "./SidebarPlaylist";
import SidebarSavedSongs from "./SidebarSavedSongs";

const SideBar = () => {


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
        <h2 className="mb-3">Tus listas</h2>
        <SidebarSavedSongs />
        <SidebarPlaylist />
      </div>

    </div>
  );
}

export default appWithTranslation(SideBar)