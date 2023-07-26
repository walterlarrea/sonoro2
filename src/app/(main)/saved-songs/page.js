'use client';
import { useEffect, useState } from "react";
import { getUserSavedSongs } from "@/services/spotifyService";
import { ClockIcon } from "@heroicons/react/24/solid";
import SongListItem from "@/components/SongListItems";

const SavedSongs = () => {
  const [savedSongsObj, setSavedSongsObj] = useState(null);

  useEffect(() => {
    const getSavedSongs = async () => {
      const response = await getUserSavedSongs({});

      if (response?.status && response.status === 401) {
        setSavedSongsObj(null)
        return;
      }

      const savedSongsObject = response;
      setSavedSongsObj(savedSongsObject);
    };
    getSavedSongs();
  }, [])

  if (!savedSongsObj) {
    return (
      <div>
        Cargando...
      </div>
    )
  }

  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-start font-normal text-zinc-300 ms-4">#</th>
            <th className="text-start font-normal text-zinc-300">Título</th>
            <th className="text-start font-normal text-zinc-300">Álbum</th>
            <th className="text-start font-normal text-zinc-300"></th>
            <th className="text-start font-normal text-zinc-300">
              <ClockIcon className="h-6 w-6" />
            </th>
          </tr>
        </thead>
        <tbody>
          {savedSongsObj &&
            savedSongsObj.items?.map(({ track }, index) =>
              <SongListItem
                key={track.id}
                track={track}
                listNumber={index}
              />
            )}
        </tbody>
      </table>
    </>
  )
};

export default SavedSongs;