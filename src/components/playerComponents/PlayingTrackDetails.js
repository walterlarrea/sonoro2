import { useRouter } from 'next/navigation';

const PlayingTrackDetails = ({ track }) => {
  const router = useRouter()
  const artists = track.artists.map((artist, index) => `${artist.name}${track.artists.length !== index + 1 ? ',' : ''} `)
  const albumId = track?.album.uri.split(':')[2]

  return (
    <div className="
    flex
    flex-row
    items-center  
    gap-[16px]
    bg-transparent 
    ">

      <div className="flex flex-col gap-[2px] justify-center items-end min-w-[48px]">
        <h4 className="font-bold">{track.name}</h4>
        <span className="text-[0.9rem]">
          {artists}
        </span>
      </div>

      <img
        className="rounded-md cursor-pointer hover:scale-[110%]"
        title='Ver álbum'
        onClick={() => router.push(`/albums/${albumId}`)}
        src={track.album.images[1].url || track.album.images[0].url}
        alt={`Album cover for ${track.album.name} of ${artists}`} />
    </div>
  )
}

export default PlayingTrackDetails