const AlbumCard = ({ album, onClick }) => (
  <div className="relative" onClick={onClick}>
    <div className="
    flex 
    flex-col 
    justify-end 
    absolute 
    bottom-0 
    w-full 
    h-1/3 
    bg-gradient-to-t 
    from-gray-900 
    p-3 
    text-[1.25em]
    ">
      <span>
        {album.name}
      </span>
      <span>
        Canciones: {album.total_tracks}
      </span>
    </div>

    <img
      src={album.images[0].url}
      alt={`Cover of the ${album.album_type} ${album.name}`}
    />
  </div>
);

export default AlbumCard;