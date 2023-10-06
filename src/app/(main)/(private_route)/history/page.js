'use client';
import { useEffect, useRef, useCallback, useState } from "react";
import { getRecentlyPlayedTracks } from "@/services/spotifyService";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ClockIcon } from "@heroicons/react/24/solid";
import SongListItem from "@/components/SongListItems";
import { usePlayerProvider } from "@/context/playerProvider";
import LoadingEqualizer from "@/components/Loader/LoadingEqualizer";
import { useTranslation } from "react-i18next";

const ITEM_COUNT_BY_PAGE = 20

const playerHistory = () => {
  const { t } = useTranslation();
  const { setActiveContext } = usePlayerProvider();
  const [allTracks, setAlltracks] = useState(undefined)

  const { data: trackHistoryObj, error, fetchNextPage, isRefetching, hasNextPage } = useInfiniteQuery({
    queryKey: ['searchData'],
    queryFn: async ({ pageParam = undefined }) => {
      const res = await getRecentlyPlayedTracks({ limit: ITEM_COUNT_BY_PAGE, before: pageParam })
      return res.data
    },
    getNextPageParam: (lastPage) => lastPage?.cursors?.before,
    enabled: false,
  })

  useEffect(() => {
    let tracks = []
    
    trackHistoryObj?.pages.map((page) => {
      page.items?.map(({track, played_at}) => {
        tracks.push({...track, played_at})
      })
    })

    setAlltracks(tracks)
  }, [trackHistoryObj])

  const observer = useRef()
  const lastTrackElementRef = useCallback(node => {
    if (isRefetching) return
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        fetchNextPage()
      }
    })

    if (node) observer.current.observe(node)
  }, [isRefetching])

  useEffect(() => {
    fetchNextPage()
  }, [])

  if (!trackHistoryObj) {
    return (
      <LoadingEqualizer />
    )
  }

  const handlePlayTracks = (track) => () => {
    if (trackHistoryObj) {
      const tracks = allTracks.map((song) => {
        return { ...song, trackToPlay: track.uri }
      })

      setActiveContext(tracks)
    }
  }

  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-center font-normal ms-4">#</th>
            <th className="text-start font-normal">{t('songListHeaders.title')}</th>
            <th className="text-start font-normal">{`${t('songListHeaders.album')} / ${t('songListHeaders.playlist')}`}</th>
            <th className="text-start font-normal"></th>
            <th className="text-start font-normal">
              <ClockIcon className="h-6 w-6" />
            </th>
          </tr>
        </thead>
        <tbody>
          {allTracks &&
            allTracks.map((track, index) => {
              if ( allTracks.length === index + 1) {
                return (
                  <SongListItem
                    key={track.played_at}
                    refLastItem={lastTrackElementRef}
                    track={track}
                    listNumber={index + 1}
                    handlePlayAlbumPlaylist={handlePlayTracks(track)}
                  />
                )
              } else {
                return (
                  <SongListItem
                    key={track.played_at}
                    track={track}
                    listNumber={index + 1}
                    handlePlayAlbumPlaylist={handlePlayTracks(track)}
                  />
                )
              }
            })
          }
        </tbody>
      </table>
      {hasNextPage &&
        <div className="flex justify-center m-8">
          <span>
            {t('loader.loading')}
          </span>
        </div>
      }
    </>
  )
}

export default playerHistory;