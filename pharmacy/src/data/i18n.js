import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';

import arTranslation from './ar-translation.json'
import enTranslation from './en-translation.json'

const resources = {
    en: {
        translation: enTranslation
    },
    ar: {
        translation: arTranslation
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',  //default language
    interpolation: {
      escapeValue: false, 
    },
})

export default i18n