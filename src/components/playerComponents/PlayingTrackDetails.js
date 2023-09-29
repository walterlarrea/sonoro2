const PlayingTrackDetails = ({ track }) => {
  const artists = track.artists.map((artist, index) => `${artist.name}${track.artists.length !== index + 1 ? ',' : ''} `)


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
        className="rounded-md"
        src={track.album.images[1].url || track.album.images[0].url}
        alt={`Album cover for ${track.album.name} of ${artists}`} />
      {/* {track.album.images[1] || track.album.images[1]} */}
    </div>
  )
}

export default PlayingTrackDetails