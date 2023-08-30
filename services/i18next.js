import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../locales/en.json';
import sv from '../locales/sv.json';
import hi from '../locales/hi.json';

export const languageResource = {
  en: {translation: en},
  sv: {translation: sv},
  hi: {translation: hi},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResource,
});

export default i18next;
