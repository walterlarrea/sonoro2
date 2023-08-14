'use client';

import { useState, useEffect } from 'react';
import { getNewReleases } from '@/services/spotifyService';
import AlbumList from '@/components/AlbumList';
import { useTranslation } from 'next-i18next';
import LoadingEqualizer from '@/components/Loader/LoadingEqualizer';

const NewReleases = () => {
  const { t } = useTranslation();
  const [albums, setAlbums] = useState(null)

  useEffect(() => {
    const newReleases = async () => {
      const response = await getNewReleases();
      setAlbums(response.albums);
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