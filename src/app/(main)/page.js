'use client'

// pages/_app.js
import React from 'react';
import { appWithTranslation } from 'next-i18next'; // Importa appWithTranslation
import i18n from './i18n'; // Asegúrate de usar la ruta correcta a i18n.js



import HomeFiltersPage from '@/components/HomeFiltersPage';

const Home = () => {

  return (
    <HomeFiltersPage />
  );
};


export default appWithTranslation(Home);
