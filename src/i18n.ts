import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';


i18n
.use(initReactI18next)
.use(LanguageDetector)
.init({
  debug: true,
  lng: 'en',
  resources:{
    en:{
      translation:{
        "login_title":"Bellagio Casino"
    }
  },
  chineses:{
    translation:{
      "login_title":"贝拉吉奥赌场"
    }
  }
  }
})
console.log(i18n.t('login_title'));


export default i18n;
