import { useEffect, useState } from "react";
import TrackList from "./TrackList";
import { getRecommendations, getRecentlyPlayedTracks } from "@/services/spotifyService";
import LoadingEqualizer from "./Loader/LoadingEqualizer";
import { useTranslation } from "react-i18next";
// import { checkUserSession } from "@/utils/liveSession";

const HomeFiltersPage = () => {
  const { t } = useTranslation();
  const [tracksByHistory, setTracksByHistory] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTracksByGenre = async () => {
      setLoading(true)

      const recentlyPlayed = await getRecentlyPlayedTracks({ limit: 5 })

      const ids = recentlyPlayed.data.items.map(({ track }) => track.id)

      const tracksByRecentlyPlayed = await getRecommendations({ limit: 10, seedTracks: ids })

      setLoading(false)
      setTracksByHistory(tracksByRecentlyPlayed.data.tracks);
    }
    fetchTracksByGenre();
  }, [])

  if (loading) {
    return (
      <LoadingEqualizer />
    )
  }

  return (
    <>
      {/* <h2 className="text-[2rem] text-zinc-100">
        Recomendaciones
      </h2> */}
      {tracksByHistory &&
        <>
          <h3
            className="text-[2rem] font-bold">
            {t('home.recommendationsByHistory')}
          </h3>
          <TrackList tracks={tracksByHistory} />
        </>
      }
    </>
  )
};

export default HomeFiltersPage;

