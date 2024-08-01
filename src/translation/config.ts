import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import eng_translation from './en/translation.json';
import heb_translation from './heb/translation.json';

i18next.use(initReactI18next).init({
  lng: 'heb', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation:eng_translation,
    },
    heb:{
      translation:heb_translation,
    }
  },
});

