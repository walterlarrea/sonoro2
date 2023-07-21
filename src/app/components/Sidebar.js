
import { HomeIcon, HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

export default function SideBar() {
  const playlists = []; // You can replace this with your actual list of playlists.

  return (
    <div className="hidden flex-col text-sm sm:flex w-64 mr-3">
      <div className="space-y-3 rounded-md bg-white bg-opacity-10 p-3 ">
        <button
          className="flex items-center space-x-3 hover:text-white text-gray-400"
        >
          <HomeIcon className="h-6 w-6" />
          <p>Home</p>
        </button>
        <button
          className="flex items-center space-x-3 hover:text-white text-gray-400"
        >
          <HeartIcon className="h-6 w-6" />
          <p>Liked Songs</p>
        </button>
        <button
          className="flex items-center space-x-3 hover:text-white text-gray-400"
        >
          <MagnifyingGlassIcon className="h-6 w-6" />
          <p>Search</p>
        </button>
      </div>
      <div className="mt-5 rounded-t bg-white bg-opacity-10 p-4 w-64 mr-3" >
        <div className="flex flex-row items-center space-x-3 text-gray-400 ">
          <p>Your Library</p>
        </div>
      </div>
      <div className="flex-grow space-y-3 overflow-y-auto rounded-b bg-white bg-opacity-10 p-4 scrollbar-thin scrollbar-thumb-gray-600 w-64">
        {playlists.map((data) => (
          <div
            key={data.id}
            className={`flex cursor-pointer items-center space-x-3 text-gray-400 hover:text-white`}
          >
            <Image
              src={data.images[0].url}
              alt={data.name}
              width={40}
              height={40}
              className={"h-10 w-10 rounded-md"}
            />
            <p className="truncate">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
