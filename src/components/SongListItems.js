import { HeartIcon, PlayIcon } from "@heroicons/react/24/solid";

const SongListItem = ({ track, listNumber, handleClick }) => {
  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  return (
    <tr
      onClick={handleClick}
      className="
        gap-[16px]
        w-full
        h-[4rem]
        py-[0.5rem]
        px-[16px]
        bg-transparent 
        hover:bg-zinc-800
        active:bg-black
        rounded-md
        cursor-pointer
        ">
      <td className="ms-4 justify-center">{listNumber}</td>
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
            <span className="text-[0.9rem] text-zinc-300">
              {track.artists?.map(artist => artist.name)}
            </span>
          </div>
        </div>
      </td>

      {track.album &&
        <td className="items-center text-[0.9rem] text-zinc-300">
          {track.album?.name}
        </td>
      }
      <td>
        <HeartIcon
          className="h-6 w-6 me-4 inline-block hover:scale-[110%] text-green-500" />
      </td>
      <td>
        {millisToMinutesAndSeconds(track.duration_ms)}
      </td>
    </tr>
  )
}

export default SongListItem
