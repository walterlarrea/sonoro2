import { HomeIcon, HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import SidebarPlaylist from "./SidebarPlaylist";

export default function SideBar() {
  return (
    <nav className="flex-col text-sm sm:flex w-64 mr-3">
      <div className="space-y-3 rounded-md bg-white bg-opacity-10 p-3">

        <div>
          <Link
            href='/'>
            <HomeIcon className="h-6 w-6 me-4 inline-block" />
            Inicio
          </Link>
        </div>
        <div>
          <Link
            href='/search'>
            <MagnifyingGlassIcon className="h-6 w-6 me-4 inline-block" />
            Buscar
          </Link>
        </div>
        <div>
          <Link
            href='/new-releases'>
            <HeartIcon className="h-6 w-6 me-4 inline-block" />
            Últimos lanzamientos
          </Link>
        </div>

      </div>

      <div className="mt-5 rounded-t bg-white bg-opacity-10 p-4 w-64 mr-3" >
        <div className="flex flex-row justify-center items-center space-x-3 text-zinc-100 ">
          <h2>Tu lista</h2>
          <SidebarPlaylist />
        </div>
      </div>
    </nav>
  );
}
