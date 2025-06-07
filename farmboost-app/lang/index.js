import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import tha from './tha.json';
import eng from './eng.json';
import mya from './mya.json';

const resources = {
  THA: {translation: tha},
  ENG: {translation: eng},
  MYA: {translation: mya},
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'THA',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
