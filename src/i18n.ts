import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
.use(initReactI18next)
.use(LanguageDetector)
.init({
  debug: true,
  lng: 'en',
  resources:{
    en:{
      translation:{
        "game_stats":"Game Stats",
        "credits":"Credits",
        "spins":"Spins",
        "spin":"Spin",
        "cash_out":"Cash Out",
        "new_game":"New Game",
        'welcome_message':'Welcome to the Belagio Casino'
    }
  },
  heb:{
    translation:{
      "game_stats":"סטטיסטיקות משחק",
      "credits":"נקודות",
      "spins":"סיבובים",
      "spin":"סובב",
      "cash_out":"משיכת כספים",
      "new_game":"משחק חדש",
      'welcome_message':'ברוכים הבאים לקזינו בלאגיו'
    }
  },
  es:{
    translation:{
      "game_stats":"Estadísticas del juego",
      "credits":"Créditos",
      "spins":"Vueltas",
      "spin":"Girar",
      "cash_out":"Cobrar",
      "new_game":"Nuevo juego",
      'welcome_message':'Bienvenido al Casino Belagio'
    }
  },  
  fr:{
    translation:{
      "game_stats":"Statistiques du jeu",
      "credits":"Crédits",
      "spins":"Tours",
      "spin":"Tourner",
      "cash_out":"Encaisser",
      "new_game":"Nouveau jeu",
      'welcome_message':'Bienvenue au Casino Belagio'
    }
  }
  }
})


export default i18n;
