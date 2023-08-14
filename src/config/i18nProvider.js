"use client";
import i18n from '@/config/i18n'//'./config/i18n';
import { getStore, setStore } from '@/services/localStore';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

function Translator({ children }) {
  useEffect(() => {
    const currentLanguage = getStore('sonoro_language');

    if (currentLanguage) {
      i18n.changeLanguage(currentLanguage)
    } else {
      setStore('sonoro_language', 'es')
    }
  }, [])

  return (
    <I18nextProvider>
      {children}
    </I18nextProvider>
  )
}

export default Translator