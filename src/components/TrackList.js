'use client';
import TrackCard from "./TrackCard";

const TrackList = ({ tracks }) => {

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minMax(195px, 1fr))',
        justifyItems: 'center',
        gap: '1em',
      }}
      className="my-3">

      {tracks && tracks?.map(t =>
        <div key={t.played_at ?? t.id} className="m-0 w-full min-w-[145px]">
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