'use client';
import { useEffect, useState, useRef, useCallback } from "react";
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
  // const [offset, setOffset] = useState(undefined)

  const { data: trackHistoryObj, error, fetchNextPage, isRefetching } = useInfiniteQuery({
    queryKey: ['searchData'],
    queryFn: async ({ pageParam = undefined }) => {
      const res = await getRecentlyPlayedTracks({ limit: ITEM_COUNT_BY_PAGE, before: pageParam })
      // setOffset(res.data.cursors.before)
      return res.data
    },
    getNextPageParam: (lastPage) => lastPage?.cursors?.before,
    enabled: false,
  })

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
      // const tracks = trackHistoryObj.pages[0].items.map(({ track: song }) => { return { ...song.track, trackToPlay: track.uri } })
      // setActiveContext(tracks)
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
          {trackHistoryObj.pages.length > 0 &&
            trackHistoryObj.pages.map((page, pageIndex) => page.items?.map(({ track }, index) => {
              if (trackHistoryObj.pages.length === pageIndex + 1 && page.items.length === index + 1) {
                return (
                  <SongListItem
                    key={track.id}
                    refLastItem={lastTrackElementRef}
                    track={track}
                    listNumber={(pageIndex * ITEM_COUNT_BY_PAGE) + index + 1}
                    handlePlayAlbumPlaylist={handlePlayTracks(track)}
                  />
                )
              } else {
                return (
                  <SongListItem
                    key={track.id}
                    track={track}
                    listNumber={(pageIndex * ITEM_COUNT_BY_PAGE) + index + 1}
                    handlePlayAlbumPlaylist={handlePlayTracks(track)}
                  />
                )
              }
            })
            )}
        </tbody>
      </table>
    </>
  )
}

export default playerHistory;