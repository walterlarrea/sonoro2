"use client";
import i18n from '@/config/i18n'//'./config/i18n';
import { I18nextProvider } from 'react-i18next';

function Translator({ children }) {
  return (
    <I18nextProvider>
      {children}
    </I18nextProvider>
  )
}

export default Translator