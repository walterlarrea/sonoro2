'use client';
import { useRouter } from "next/navigation";
import TrackCard from "./TrackCard";

const TrackList = ({ tracks, withAccess }) => {
  const router = useRouter()

  // const handleClick = (trackId) => () => {
  //  if (withAccess) {
  //    router.push(`/albums/${trackId}`)
  //  }
  // }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minMax(145px, 1fr))',
      justifyItems: 'center',
      gap: '1em',
    }}
      className="my-3"
    >

      {tracks && tracks?.map(t =>
        <div key={t.id} className="m-0 w-full min-w-[145px]">
          <TrackCard
            track={t}
          // onClick={handleClick(t.id)}
          />
        </div>
      )}
    </div>
  )
}

export default TrackList