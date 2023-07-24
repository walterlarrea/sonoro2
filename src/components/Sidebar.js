import SidebarPlaylist from "./SidebarPlaylist";
import Navbar from "./Navbar";

export default function SideBar() {
  return (
    <div className="flex-col text-sm hidden md:flex w-64 mr-3">

      <Navbar background={'bg-white'} column={true} />

      <div className="mt-5 rounded-t bg-white bg-opacity-10 p-4 w-64 mr-3" >
        <div className="flex flex-row justify-center items-center space-x-3 text-zinc-100 ">
          <h2>Tu lista</h2>
          <SidebarPlaylist />
        </div>
      </div>

    </div>
  );
}
