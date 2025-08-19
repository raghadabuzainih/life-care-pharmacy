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
    lng: localStorage.getItem('language') ? localStorage.getItem('language') : 'en',
    interpolation: {
      escapeValue: false, 
    },
    //because t("...") always return strings but i want to return objects so i add this line:
    returnObjects: true 
    //becaue we have in translations products & category array
})

export default i18n