'use client';
import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import AlbumList from '@/components/AlbumList';
import LoadingEqualizer from '@/components/Loader/LoadingEqualizer';
import { getNewReleases } from '@/services/spotifyService';
// import { checkUserSession } from '@/utils/liveSession';

const NewReleases = () => {
  const { t } = useTranslation();
  const [albums, setAlbums] = useState(null)

  useEffect(() => {
    const newReleases = async () => {
      const response = await getNewReleases();
      const albumsList = response.data;

      setAlbums(albumsList.albums);
    }
    newReleases();
  }, [])

  if (!albums) {
    return (
      <LoadingEqualizer />
    )
  }

  return (
    <div>
      <h2 className='text-[2em] mt-5'> </h2>
      <AlbumList albums={albums} withAccess={true} />
    </div>
  )
};

export default NewReleases;