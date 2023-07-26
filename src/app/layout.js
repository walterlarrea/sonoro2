'use client'
import './globals.css'
import React from 'react';
import { appWithTranslation } from 'next-i18next';
import i18n from '@/config/i18n'//'./config/i18n';

export const metadata = {
  title: 'Sonoro',
  description: 'bla bla bla',
}

function RootLayout({ children }) {


  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}

export default appWithTranslation(RootLayout)

