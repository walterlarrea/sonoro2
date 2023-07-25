import SidebarPlaylist from "./SidebarPlaylist";
import Navbar from "./Navbar";

export default function SideBar() {
  return (
    <div className="flex-col text-sm hidden md:flex w-full gap-[8px]">

      <Navbar column={true} />

      <div className="
      flex 
      flex-row 
      justify-center 
      items-center 
      rounded-lg
      text-zinc-100 
      bg-zinc-900 
      p-4">
        <h2>Tu lista</h2>
        <SidebarPlaylist />
      </div>

    </div>
  );
}
