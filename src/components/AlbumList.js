'use client';
import { useRouter } from "next/navigation";
import AlbumCard from "./AlbumCard"

const AlbumList = ({ albums, withAccess }) => {
  const router = useRouter()

  const handleClick = (albumId) => () => {
    if (withAccess) {
      router.push(`/albums/${albumId}`)
    }
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minMax(270px, 1fr))',
      justifyItems: 'center',
      gap: '1em',
    }}
      className="my-3"
    >

      {albums && albums?.items?.map(a =>
        <div key={a.id} style={{ minWidth: '270px', width: '100%' }} className="m-0">
          <AlbumCard
            album={a}
            onClick={handleClick(a.id)}
          />
        </div>
      )}
    </div>
  )
}

export default AlbumList