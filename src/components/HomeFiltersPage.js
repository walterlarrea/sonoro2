import { useEffect, useState } from "react";
import TrackList from "./TrackList";
import { getRecommendations } from "@/services/spotifyService";
import LoadingEqualizer from "./Loader/LoadingEqualizer";
// import { checkUserSession } from "@/utils/liveSession";

const HomeFiltersPage = () => {
  const genres = ['jazz', 'tango', 'classical', 'rock-n-roll'];
  const [tracksByGenre, setTracksByGenre] = useState(null);

  useEffect(() => {
    const fetchTracksByGenre = async () => {
      let tracksObject = {}

      for (const g of genres) {
        const rocknrollTracks = await getRecommendations({
          genres: [g],
          limit: 5,
        })
        tracksObject[g] = rocknrollTracks?.data?.tracks
      }

      setTracksByGenre(tracksObject);
    }
    fetchTracksByGenre();
  }, [])

  if (!tracksByGenre) {
    return (
      <LoadingEqualizer />
    )
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      {/* <h2 className="text-[2rem] text-zinc-100">
        Recomendaciones
      </h2> */}
      {genres.map(genre =>
        <div key={genre}>
          <h3
            className="text-[2rem] text-zinc-100 font-bold">
            {capitalizeFirstLetter(genre)}
          </h3>

          <TrackList tracks={tracksByGenre[genre]} />
        </div>
      )}
    </>
  )
};

export default HomeFiltersPage;

