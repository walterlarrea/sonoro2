'use client';
import { searchResults } from "@/services/spotifyService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import AlbumList from "./AlbumList";
import { useTranslation } from "next-i18next";
import TrackList from "./TrackList";
// import { checkUserSession } from "@/utils/liveSession";

const SearchBar = () => {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState(null);
  const { data: results, error, refetch, isLoading } = useQuery({
    queryKey: ['searchData'],
    queryFn: async () => {
      const res = await searchResults({ searchText, types: ['album', 'track', 'artist'] })
      return res.data
    },
    enabled: false,
  })

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchText || searchText === '') {
      return
    }
    refetch();
    setSearchText(null)
  }

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
      <div className="mb-8 whitespace-nowrap">
        <form onSubmit={handleSearch}>

          <input
            className="
              outline-none
              bg-gray-100
              h-12
              text-2xl
              text-zinc-900
              rounded-s-full
              align-middle
              px-4"
            type='search'
            name='search-bar'
            placeholder={t('search.placeholder')}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="
              bg-zinc-100
              h-12
              text-2xl
              text-zinc-900
              border-solid
              border-2
              border-l-zinc-400
              rounded-e-full
              align-middle
              px-4
              "
            onClick={refetch}
            type='submit'
          >
            {t('search.button')}
          </button>
        </form>
      </div>

      {results &&
        <>
          <h3
            className="text-[2rem] text-zinc-100 font-bold">
            {t('search.songs')}
          </h3>
          <TrackList tracks={results.tracks?.items} />

          <h3
            className="text-[2rem] text-zinc-100 font-bold">
            {t('search.albums')}
          </h3>
          <AlbumList albums={results.albums} withAccess={true} />
        </>
      }

    </div>
  )
};

export default SearchBar;