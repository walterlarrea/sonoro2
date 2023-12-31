'use client';
import { useRouter } from "next/navigation";
import AlbumCard from "./AlbumCard"

const AlbumList = ({ albums, withAccess }) => {
  const router = useRouter()

  const handleClickCard = (albumId) => () => {
    if (withAccess) {
      router.push(`/albums/${albumId}`)
    }
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minMax(175px, 1fr))',
      justifyItems: 'center',
      gap: '1em',
    }}
      className="my-3">

      {albums && albums?.items?.map(a =>
        <div key={a.id} className="m-0 w-full min-w-[145px]">
          <AlbumCard
            album={a}
            onClickCard={handleClickCard(a.id)}
          />
        </div>
      )}
    </div>
  )
}

export default AlbumList