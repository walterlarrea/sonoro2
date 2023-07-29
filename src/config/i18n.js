import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '/public/locales/en.json';
import esTranslations from '/public/locales/es.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  es: {
    translation: esTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // lenguaje por defecto
  fallbackLng: 'es', // si no encuentra ningun lenguaje va usar este.
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;