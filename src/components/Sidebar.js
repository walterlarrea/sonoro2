import SidebarPlaylist from "./SidebarPlaylist";
import Navbar from "./Navbar";
import SidebarSavedSongs from "./SidebarSavedSongs";

export default function SideBar() {
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
