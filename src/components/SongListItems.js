import { usePlayerProvider } from "@/context/playerProvider";
import { millisToMinutesAndSeconds } from '@/utils/playerUtils';
import IconPlayButtonSmallTd from "./playerComponents/IconPlayButtonSmallTd";
import { HeartIcon as HeartIconFill } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

const SongListItem = ({ track, listNumber, refLastItem, handleClick, handlePlayAlbumPlaylist, handleSaveOrRemoveTrack }) => {
  const { currentPlayingTrack } = usePlayerProvider();

  const currentlyPlayingThisTrack = currentPlayingTrack?.id === track?.id;

  return (
    <tr
      ref={refLastItem}
      onClick={handleClick}
      className="
        group
        gap-[16px]
        w-full
        h-[4rem]
        py-[0.5rem]
        px-[16px]
        bg-transparent 
        hover:bg-[#f6ffe8] 
        active:bg-[#cdee93] 
        dark:hover:bg-[#505741] 
        dark:active:bg-[#40482E] 
        rounded-md
        cursor-pointer
        ">
      <td>
        <div className="flex m-auto w-8 justify-center align-center">
          <IconPlayButtonSmallTd
            thisIsActive={currentlyPlayingThisTrack}
            handleSetTrack={handlePlayAlbumPlaylist}
          />
          {!currentlyPlayingThisTrack &&
            <span
              className={`
            hidden 
            md:block 
            group-hover:hidden`}>
              {listNumber}
            </span>
          }
        </div>
      </td>
      <td>
        <div className="
          flex
          flex-row
          items-center  
          gap-[16px]
          bg-transparent 
          ">
          {track.album?.images &&
            <img
              src={track.album?.images[2]?.url}
              alt={track.name}
              className="
                w-[3rem]
                rounded-md
                m-0
                " />
          }
          <div className="flex flex-col gap-[2px] justify-center min-w-[48px]">
            <h4 className="font-bold">{track.name}</h4>
            <span className="text-[0.9rem]">
              {track.artists?.map(artist => artist.name).join(', ')}
            </span>
          </div>
        </div>
      </td>

      {track.album &&
        <td className="items-center text-[0.9rem]">
          {track.album?.name}
        </td>
      }
      <td>
        {track.saved ?
          <HeartIconFill
            onClick={handleSaveOrRemoveTrack}
            className="h-6 w-6 me-4 inline-block hover:scale-[110%] text-green-500" />
          : <HeartIcon
            onClick={handleSaveOrRemoveTrack}
            className="h-6 w-6 me-4 inline-block hover:scale-[110%] text-green-500" />
        }
      </td>
      <td>
        {millisToMinutesAndSeconds(track.duration_ms)}
      </td>
    </tr>
  )
}

export default SongListItem
