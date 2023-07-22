'use client';
import { searchResults } from "@/services/spotifyService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import AlbumList from "./AlbumList";

const SearchBar = () => {
  const [searchText, setSearchText] = useState(null);

  const { data: results, error, refetch, isLoading } = useQuery({
    queryKey: ['searchData'],
    queryFn: () => searchResults(searchText),
    enabled: false,
  })

  // background-color: transparent;
  // display: block;
  // position: relative;

  // width: 100%;

  // svg {
  //   position: absolute;

  //   font-size: 1.2rem;
  //   line-height: 1.2rem;

  //   right: 15px;
  //   top: 50%;
  //   transform: translate(0%, -50%);
  // }

  return (
    <div className="text-center">
      <div className="mb-8">
        <input
          className="
        outline-none
        bg-gray-100
        h-12
        text-2xl
        text-gray-700
        rounded-s-xl
        align-middle
        px-4
        "
          type='search'
          name='search-bar'
          placeholder='Buscar artistas o canciones'
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="
        bg-gray-700
        h-12
        text-2xl
        text-gray-100
        rounded-e-xl
        align-middle
        px-4
        "
          onClick={refetch}
        >
          Buscar
        </button>
      </div>

      <AlbumList albums={results?.albums} withAccess={true} />

    </div>
  )
};

export default SearchBar;